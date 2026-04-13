"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Loader2 } from "lucide-react";
import ChatMarkdown from "@/components/chat-markdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

/** Per browser tab session only, so the invite shows again after you close the tab or open a new session. */
const TEASER_SESSION_KEY = "nirvana_chat_teaser_dismissed";
const AVATAR_SRC = "/photos/swaroop.png";

const SUGGESTIONS = [
  "Bhai, which trek is easiest?",
  "Tell me about Hampta Pass itinerary",
  "What to pack for Kasol trip?",
  "Which trek has the best views?",
];

function SwaroopAvatar({
  size,
  className = "",
  priority = false,
}: {
  size: "xs" | "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}) {
  const px = size === "xs" ? 28 : size === "sm" ? 40 : size === "md" ? 48 : 56;
  const sizesAttr = size === "xs" ? "28px" : size === "sm" ? "40px" : size === "md" ? "48px" : "56px";
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-emerald-900/40 ring-2 ring-white/20 ${className}`}
      style={{ width: px, height: px }}
    >
      <Image
        src={AVATAR_SRC}
        alt="Swaroop Bhai"
        width={px}
        height={px}
        sizes={sizesAttr}
        className="h-full w-full object-cover object-top"
        priority={priority}
      />
    </span>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [introDelayDone, setIntroDelayDone] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const fn = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(TEASER_SESSION_KEY) === "1") {
        setTeaserDismissed(true);
      }
    } catch {
      /* private mode */
    }
    const t = window.setTimeout(() => setIntroDelayDone(true), 450);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(t);
  }, []);

  const markTeaserSeen = useCallback(() => {
    setTeaserDismissed(true);
    try {
      window.sessionStorage.setItem(TEASER_SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setShowPulse(false);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || streaming) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Request failed" }));
        setMessages((prev) => [...prev, { role: "assistant", content: err.error || "Something went wrong. Please try again." }]);
        setStreaming(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) { setStreaming(false); return; }

      const decoder = new TextDecoder();
      let assistantText = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: assistantText };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Network error. Please check your connection and try again." }]);
    }

    setStreaming(false);
  }, [messages, streaming]);

  const hasMessages = messages.length > 0;
  const showTeaser = introDelayDone && !open && !teaserDismissed;

  const openChat = useCallback(() => {
    markTeaserSeen();
    setOpen(true);
  }, [markTeaserSeen]);

  return (
    <>
      {/* Teaser bubble: opens chat on click */}
      <AnimatePresence>
        {showTeaser && (
          <motion.div
            role="dialog"
            aria-label="Chat invitation from Swaroop Bhai"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 10, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-[5.75rem] right-4 z-50 max-w-[min(280px,calc(100vw-2rem))] md:right-6"
          >
            <div className="relative overflow-visible rounded-2xl border border-white/15 bg-slate-950/95 p-3 pr-10 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <button
                type="button"
                onClick={openChat}
                className="flex w-full items-start gap-3 rounded-xl text-left transition-colors hover:bg-white/5"
              >
                <SwaroopAvatar size="md" priority />
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold text-white">How can I help you?</p>
                  <p className="mt-0.5 text-xs text-emerald-200/80">
                    Treks, pricing, packing. Tap to chat with Swaroop Bhai.
                  </p>
                </div>
              </button>
              <button
                type="button"
                onClick={markTeaserSeen}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Dismiss invitation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={openChat}
            className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl shadow-emerald-500/30 ring-2 ring-emerald-400/40 transition-shadow hover:shadow-emerald-500/50 md:right-6"
            aria-label="Open chat with Swaroop Bhai"
          >
            <SwaroopAvatar size="lg" className="ring-0" priority />
            {showPulse && !showTeaser && (
              <span className="pointer-events-none absolute inset-0 rounded-full animate-ping bg-emerald-400/40" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-6 right-4 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl md:right-6"
            style={{ height: "min(580px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-3">
              <SwaroopAvatar size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">Swaroop Bhai</p>
                <p className="text-xs text-emerald-400/70">Your Pahadi Trek Buddy</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {!hasMessages && (
                <div className="flex flex-col items-center text-center py-6">
                  <div className="mb-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-1">
                    <SwaroopAvatar size="lg" />
                  </div>
                  <p className="text-sm font-medium text-white mb-1">Namaste! 👋</p>
                  <p className="text-xs text-gray-400 mb-5 max-w-[260px]">
                    Main hoon Swaroop Bhai, your trip captain & buddy. Treks, pricing, packing!
                  </p>
                  <div className="w-full space-y-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-gray-300 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="mt-0.5 shrink-0">
                      <SwaroopAvatar size="xs" />
                    </div>
                  )}
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-emerald-500 text-black rounded-br-md"
                      : "bg-white/[0.07] text-gray-200 border border-white/5 rounded-bl-md"
                  }`}>
                    {msg.role === "assistant" ? (
                      msg.content ? (
                        <div className="max-h-[min(300px,42vh)] overflow-y-auto overscroll-contain pr-0.5 [-webkit-overflow-scrolling:touch]">
                          <ChatMarkdown content={msg.content} />
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-gray-400">
                          <Loader2 className="h-3 w-3 animate-spin" /> Swaroop Bhai soch raha hai...
                        </span>
                      )
                    ) : (
                      <span className="whitespace-pre-wrap break-words">{msg.content}</span>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/25">
                      <User className="h-4 w-4 text-emerald-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 bg-white/[0.02] px-3 py-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about treks, pricing, packing..."
                  disabled={streaming}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || streaming}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-black transition-all hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {streaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
