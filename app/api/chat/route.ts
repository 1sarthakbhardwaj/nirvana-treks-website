import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chat-system-prompt";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

/** Try in order: best quality → lighter → free tier */
const MODELS = [
  "nvidia/llama-3.1-nemotron-70b-instruct",
  "mistralai/ministral-3b-2512",
  "google/gemma-4-26b-a4b-it:free",
] as const;

type ChatMessage = { role: string; content: string };

function streamOpenRouterBody(response: Response): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data: ")) continue;
          const data = trimmed.slice(6);
          if (data === "[DONE]") {
            controller.close();
            return;
          }

          try {
            const parsed = JSON.parse(data);
            const token = parsed.choices?.[0]?.delta?.content;
            if (token) controller.enqueue(encoder.encode(token));
          } catch {
            // skip malformed chunks
          }
        }
      }
      controller.close();
    },
  });
}

export async function POST(req: NextRequest) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const rawMessages = body.messages;
  if (!Array.isArray(rawMessages)) {
    return new Response(JSON.stringify({ error: "messages must be an array" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages: ChatMessage[] = rawMessages
    .filter(
      (m): m is ChatMessage =>
        m != null &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 8000) }));

  const apiKey = (process.env.OPENROUTER_API_KEY ?? "")
    .trim()
    .replace(/^\uFEFF/, "");
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "OpenRouter API key not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const payloadBase = {
    messages: [{ role: "system" as const, content: SYSTEM_PROMPT }, ...messages],
    max_tokens: 512,
    temperature: 0.7,
    stream: true,
  };

  let lastError = "";

  for (const model of MODELS) {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://niravanatreks.com",
        "X-Title": "Nirvana Treks - Swaroop Bhai",
      },
      body: JSON.stringify({ ...payloadBase, model }),
    });

    if (response.ok) {
      return new Response(streamOpenRouterBody(response), {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Transfer-Encoding": "chunked",
        },
      });
    }

    lastError = await response.text().catch(() => response.statusText);
  }

  return new Response(
    JSON.stringify({
      error: "All AI models are unavailable. Please try again in a moment.",
      detail: lastError.slice(0, 500),
    }),
    { status: 502, headers: { "Content-Type": "application/json" } }
  );
}
