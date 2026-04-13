"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const MAX_LEN = 1200;

function whatsappNumber(): string | null {
  const n = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  return n.length >= 10 ? n : null;
}

export default function SuggestionToWhatsApp() {
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");

  const send = () => {
    const num = whatsappNumber();
    if (!num) {
      window.alert(
        "WhatsApp number is not configured. Add NEXT_PUBLIC_WHATSAPP_NUMBER to your environment (digits only, with country code)."
      );
      return;
    }
    const trimmed = idea.trim();
    if (trimmed.length < 8) {
      window.alert("Please share a bit more detail (at least a few words) so we can understand your idea.");
      return;
    }
    const who = name.trim() ? `From: ${name.trim()}\n` : "";
    const body = `${who}Trip improvement idea:\n${trimmed}\n\n(Sent from ${window.location.href})`;
    const url = `https://wa.me/${num}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-card/80 to-card/90 p-6 md:p-8 backdrop-blur-sm">
      <div className="mb-4 flex items-center gap-2 text-emerald-300">
        <MessageCircle className="h-5 w-5 shrink-0" />
        <h3 className="text-xl font-semibold text-white">Suggest how we can do even better</h3>
      </div>
      <p className="mb-5 text-sm text-white/70">
        Your ideas go straight to our team on WhatsApp: routes, food, pacing, stays, anything that would make
        trips smoother for the next group.
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="suggest-name" className="mb-1 block text-xs font-medium text-white/60">
            Name (optional)
          </label>
          <input
            id="suggest-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white placeholder:text-white/35 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
            placeholder="How we should address you"
            maxLength={80}
          />
        </div>
        <div>
          <label htmlFor="suggest-idea" className="mb-1 block text-xs font-medium text-white/60">
            Your suggestion
          </label>
          <textarea
            id="suggest-idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value.slice(0, MAX_LEN))}
            rows={5}
            className="w-full resize-y rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white placeholder:text-white/35 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
            placeholder="e.g. Extra hydration stop on day 2, clearer meeting point in Delhi, optional rest day…"
          />
          <p className="mt-1 text-right text-xs text-white/45">
            {idea.length}/{MAX_LEN}
          </p>
        </div>
        <button
          type="button"
          onClick={send}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 font-semibold text-black shadow-lg transition hover:from-emerald-400 hover:to-emerald-500 sm:w-auto"
        >
          <MessageCircle className="h-5 w-5" />
          Send on WhatsApp
        </button>
      </div>
    </div>
  );
}
