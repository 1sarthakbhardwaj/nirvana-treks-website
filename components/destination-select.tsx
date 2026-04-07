"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, MapPin, Sparkles } from "lucide-react";
import { clsx } from "clsx";

type DestinationSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
};

export default function DestinationSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select a destination",
}: DestinationSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const display = value || placeholder;

  return (
    <div ref={rootRef} className="relative">
      <label htmlFor={id} className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
        <Sparkles className="h-3.5 w-3.5 text-emerald-400/90" aria-hidden />
        {label}
      </label>

      {/* Gradient rim + glow */}
      <div
        className={clsx(
          "rounded-xl p-px transition-all duration-300",
          "bg-gradient-to-br from-emerald-300/70 via-teal-400/40 to-emerald-600/60",
          open
            ? "shadow-[0_0_32px_-4px_rgba(52,211,153,0.45),inset_0_1px_0_rgba(255,255,255,0.15)]"
            : "shadow-[0_0_24px_-8px_rgba(52,211,153,0.25)] hover:shadow-[0_0_28px_-6px_rgba(52,211,153,0.35)]"
        )}
      >
        <div className="rounded-[11px] bg-slate-950/80 backdrop-blur-md">
          <button
            type="button"
            id={id}
            aria-haspopup="listbox"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={clsx(
              "relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-[11px]",
              "border border-white/10 px-4 py-3 text-left text-white transition-colors",
              "bg-gradient-to-b from-white/[0.12] to-white/[0.04]",
              "hover:from-white/[0.16] hover:to-white/[0.06]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            )}
          >
            {/* Sheen */}
            <span
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.08) 55%, transparent 70%)",
                transform: open ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 0.6s ease",
              }}
            />
            <span className="relative flex min-w-0 items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <span
                className={clsx(
                  "truncate text-sm font-medium tracking-tight",
                  !value && "text-white/45"
                )}
              >
                {display}
              </span>
            </span>
            <ChevronDown
              className={clsx(
                "relative h-5 w-5 shrink-0 text-emerald-300/90 transition-transform duration-300",
                open && "rotate-180"
              )}
              aria-hidden
            />
          </button>
        </div>
      </div>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className={clsx(
            "absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl py-1.5",
            "border border-emerald-500/35 bg-slate-950/95 backdrop-blur-xl",
            "shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65),0_0_0_1px_rgba(52,211,153,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]"
          )}
        >
          <li role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={value === ""}
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
              className={clsx(
                "flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors",
                value === ""
                  ? "bg-emerald-500/15 text-emerald-200"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              )}
            >
              {value === "" ? <Check className="h-4 w-4 text-emerald-400" /> : <span className="w-4" />}
              <span className="text-white/50">{placeholder}</span>
            </button>
          </li>
          {options.map((opt) => {
            const selected = value === opt;
            return (
              <li key={opt} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={clsx(
                    "flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors",
                    selected
                      ? "bg-gradient-to-r from-emerald-500/20 to-transparent text-emerald-100"
                      : "text-white/85 hover:bg-emerald-500/10 hover:text-white"
                  )}
                >
                  {selected ? (
                    <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                  ) : (
                    <span className="w-4 shrink-0" />
                  )}
                  <span className="truncate">{opt}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
