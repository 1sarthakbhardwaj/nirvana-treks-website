"use client";

import Link from "next/link";
import Script from "next/script";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { FEATURABLE_WIDGET_ID, GOOGLE_REVIEWS_URL } from "@/lib/guest-reviews";

declare global {
  interface Window {
    initializeFeaturableWidget?: (
      root: Element | string,
      configOverride?: unknown,
      layoutOverride?: unknown,
      reviewsOverride?: unknown,
      customOverride?: unknown
    ) => Element | void;
  }
}

const FEATURABLE_SCRIPT = "https://featurable.com/assets/bundle.js";
const CONTAINER_ID = `featurable-${FEATURABLE_WIDGET_ID}`;

function isWidgetMounted(el: HTMLElement) {
  return Boolean(el.querySelector(".shadow-wrapper"));
}

/** Let carousel / grid inside Featurable shadow DOM scroll without Lenis capturing wheel */
function enableEmbedScrolling(root: HTMLElement) {
  const shadow = root.querySelector(".shadow-wrapper")?.shadowRoot;
  if (!shadow) return;

  const scrollables = shadow.querySelectorAll<HTMLElement>(
    ".slick-list, .slick-track, [class*='carousel'], [class*='slider'], [class*='reviews']"
  );
  scrollables.forEach((node) => {
    node.style.overflowX = "auto";
    node.style.overflowY = "hidden";
    node.style.setProperty("-webkit-overflow-scrolling", "touch");
    node.style.touchAction = "pan-x pan-y";
  });
}

export default function GoogleReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [scriptReady, setScriptReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const mountWidget = useCallback(() => {
    const el = containerRef.current ?? document.getElementById(CONTAINER_ID);
    if (!el || isWidgetMounted(el)) {
      if (el) enableEmbedScrolling(el);
      return;
    }

    const init = window.initializeFeaturableWidget;
    if (typeof init !== "function") {
      setLoadError(true);
      return;
    }

    try {
      init(el);
      setLoadError(false);
      window.setTimeout(() => enableEmbedScrolling(el), 300);
      window.setTimeout(() => enableEmbedScrolling(el), 1200);
    } catch (err) {
      console.error("[Featurable] mount failed:", err);
      setLoadError(true);
    }
  }, []);

  useEffect(() => {
    const existing = document.querySelector(`script[src="${FEATURABLE_SCRIPT}"]`);
    if (existing && typeof window.initializeFeaturableWidget === "function") {
      setScriptReady(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptReady) return;

    mountWidget();
    const retry = window.setTimeout(mountWidget, 500);
    return () => window.clearTimeout(retry);
  }, [scriptReady, mountWidget]);

  /* Pause Lenis while pointer is over reviews so wheel/drag reaches the widget */
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !lenis) return;

    const pause = () => lenis.stop();
    const resume = () => lenis.start();

    const stopWheelBubble = (e: WheelEvent) => e.stopPropagation();

    shell.addEventListener("pointerenter", pause);
    shell.addEventListener("pointerleave", resume);
    shell.addEventListener("wheel", stopWheelBubble, { passive: false });

    return () => {
      shell.removeEventListener("pointerenter", pause);
      shell.removeEventListener("pointerleave", resume);
      shell.removeEventListener("wheel", stopWheelBubble);
      resume();
    };
  }, [lenis, scriptReady]);

  return (
    <section
      className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-emerald-950/15 via-background to-background py-16 md:py-20"
      aria-labelledby="google-reviews-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 shadow-sm shadow-amber-500/5">
              <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" aria-hidden />
              <span
                id="google-reviews-heading"
                className="text-xs font-semibold uppercase tracking-widest text-amber-100"
              >
                What guests say
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Trusted on Google
            </h3>
            <p className="mt-3 text-base leading-relaxed text-gray-400">
              Honest feedback from travellers who joined our treks and tours across the Himalayas.
            </p>
          </div>
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-emerald-500 lg:self-end"
          >
            View all on Google
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div
          ref={shellRef}
          className="featurable-embed-shell relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-card/60 to-slate-950/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10"
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div
            ref={containerRef}
            id={CONTAINER_ID}
            data-featurable-async
            data-theme="dark"
            className="featurable-embed-target min-h-[300px] w-full sm:min-h-[340px]"
          />
          {loadError ? (
            <p className="mt-4 text-center text-sm text-gray-500">
              Reviews could not load here.{" "}
              <Link href={GOOGLE_REVIEWS_URL} className="text-emerald-400 underline-offset-2 hover:underline">
                View them on Google
              </Link>
            </p>
          ) : null}
        </div>
      </div>

      <Script
        id="featurable-bundle"
        src={FEATURABLE_SCRIPT}
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
        onError={() => setLoadError(true)}
      />
    </section>
  );
}
