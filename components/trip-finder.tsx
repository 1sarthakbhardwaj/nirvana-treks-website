"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass, ArrowRight, ArrowLeft, Sparkles, MapPin, Mountain,
  Wind, Camera, Heart, Tent, Snowflake, TreePine, User, Globe,
  Brain, Loader2,
} from "lucide-react";

const STEPS = ["welcome", "name", "region", "interests", "analyzing", "result"] as const;
type Step = (typeof STEPS)[number];

const REGIONS = [
  { id: "north", label: "North India", icon: Mountain },
  { id: "south", label: "South India", icon: Globe },
  { id: "east", label: "East India", icon: TreePine },
  { id: "west", label: "West India", icon: Wind },
  { id: "central", label: "Central India", icon: Compass },
  { id: "himachal", label: "Himachal Pradesh", icon: Mountain },
  { id: "delhi", label: "Delhi / NCR", icon: MapPin },
  { id: "other", label: "Outside India", icon: Globe },
] as const;

const INTERESTS = [
  { id: "adventure", label: "Adventure", icon: Compass },
  { id: "nature", label: "Nature", icon: TreePine },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "spiritual", label: "Spiritual", icon: Heart },
  { id: "paragliding", label: "Paragliding", icon: Wind },
  { id: "camping", label: "Camping", icon: Tent },
  { id: "snow", label: "Snow & High Passes", icon: Snowflake },
  { id: "culture", label: "Culture", icon: Globe },
] as const;

type TourRecommendation = {
  slug: string;
  title: string;
  price: string;
  duration: string;
  emoji: string;
  tagline: string;
  tags: string[];
};

const CATALOGUE: TourRecommendation[] = [
  { slug: "kasol-trip", title: "Kasol\u2013Kheerganga Trek", price: "\u20b96,499", duration: "2N / 3D", emoji: "\ud83c\udfde\ufe0f", tagline: "Hot springs, cafes & pine forests", tags: ["adventure", "nature", "camping", "culture"] },
  { slug: "bir-billing", title: "Bir Billing Trip", price: "\u20b96,999", duration: "3 Days", emoji: "\ud83e\ude82", tagline: "Paragliding capital of India", tags: ["paragliding", "adventure", "photography", "culture"] },
  { slug: "triund-trek", title: "Triund Trek", price: "\u20b95,999", duration: "2D / 1N", emoji: "\u26f0\ufe0f", tagline: "Classic ridge with Dhauladhar views", tags: ["adventure", "nature", "camping", "photography"] },
  { slug: "bir-rajgundha", title: "Bir, Barot to Rajgundha Trek", price: "\u20b95,999", duration: "3D / 2N", emoji: "\ud83c\udfd5\ufe0f", tagline: "Hidden valley through Bir & Barot", tags: ["nature", "camping", "adventure", "photography"] },
  { slug: "kareri-lake", title: "Kareri Lake Trek", price: "\u20b95,999", duration: "3D / 2N", emoji: "\ud83d\udc8e", tagline: "Glacial lake at 2,934m", tags: ["nature", "adventure", "camping", "photography"] },
  { slug: "hampta-pass", title: "Hampta Pass Trek", price: "\u20b912,999", duration: "5N / 6D", emoji: "\ud83c\udfd4\ufe0f", tagline: "Kullu to Spiti crossover + Chandratal", tags: ["adventure", "snow", "nature", "camping", "photography"] },
];

const AI_PHASES = [
  "Reading your preferences...",
  "Scanning 6 Himalayan treks...",
  "Matching terrain & difficulty...",
  "Comparing seasonal availability...",
  "Ranking by your interests...",
  "Almost there...",
];

function matchTours(interests: string[]): TourRecommendation[] {
  if (!interests.length) return CATALOGUE.slice(0, 2);
  const scored = CATALOGUE.map((t) => ({
    tour: t,
    score: t.tags.filter((tag) => interests.includes(tag)).length,
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 2).map((s) => s.tour);
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const ITEM_HEIGHT = 72;
const VISIBLE_ITEMS = 5;

function createNoiseBurstBuffer(audioCtx: AudioContext, durationSec: number) {
  const sampleRate = audioCtx.sampleRate;
  const length = Math.floor(sampleRate * durationSec);
  const buffer = audioCtx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.15));
  }
  return buffer;
}

/** Deeper mechanical slot-reel click: square thud + short filtered noise burst */
function playTick(audioCtx: AudioContext, volume = 0.08) {
  const t0 = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const oscGain = audioCtx.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(220 + Math.random() * 120, t0);
  oscGain.gain.setValueAtTime(volume * 0.55, t0);
  oscGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.022);
  osc.connect(oscGain);

  const noiseBuf = createNoiseBurstBuffer(audioCtx, 0.028);
  const noiseSrc = audioCtx.createBufferSource();
  noiseSrc.buffer = noiseBuf;
  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(volume * 0.45, t0);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.028);
  noiseSrc.connect(noiseGain);

  const master = audioCtx.createGain();
  master.gain.value = 1;
  oscGain.connect(master);
  noiseGain.connect(master);
  master.connect(audioCtx.destination);

  osc.start(t0);
  osc.stop(t0 + 0.025);
  noiseSrc.start(t0);
  noiseSrc.stop(t0 + 0.03);
}

/** Mechanical latch / lock-in: descending square tones */
function playSettleChime(audioCtx: AudioContext) {
  const freqs = [660, 550, 440];
  [0, 90, 180].forEach((delayMs, i) => {
    setTimeout(() => {
      const t0 = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freqs[i], t0);
      gain.gain.setValueAtTime(0.1, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.2);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.2);
    }, delayMs);
  });
}

function SlotReel({ tours, onDone }: { tours: TourRecommendation[]; onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  const [settled, setSettled] = useState(false);
  const reelRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastTickItem = useRef(0);

  const winnerIdx = CATALOGUE.findIndex((t) => t.slug === tours[0].slug);
  const winner = winnerIdx >= 0 ? winnerIdx : 0;

  const reelItems = useMemo(() => {
    const items: TourRecommendation[] = [];
    for (let i = 0; i < 8; i++) {
      items.push(...CATALOGUE);
    }
    items.push(...CATALOGUE.slice(0, winner + 1));
    return items;
  }, [winner]);

  const finalOffset = (reelItems.length - 1 - winner) * ITEM_HEIGHT;
  const totalScrollDistance = finalOffset;

  useEffect(() => {
    try { audioCtxRef.current = new AudioContext(); } catch { /* silent */ }

    const DURATION = 6500;
    const startTime = performance.now();

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }

    let rafId: number;
    function tickLoop() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const easedProgress = easeOutCubic(progress);
      const currentScroll = easedProgress * totalScrollDistance;
      const currentItem = Math.floor(currentScroll / ITEM_HEIGHT);

      if (currentItem !== lastTickItem.current && audioCtxRef.current) {
        lastTickItem.current = currentItem;
        const speed = 1 - progress;
        playTick(audioCtxRef.current, 0.03 + speed * 0.07);
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(tickLoop);
      }
    }

    rafId = requestAnimationFrame(tickLoop);

    const timers: ReturnType<typeof setTimeout>[] = [];
    AI_PHASES.forEach((_, i) => {
      timers.push(setTimeout(() => setPhase(i), i * 1100));
    });
    timers.push(setTimeout(() => {
      setSettled(true);
      if (audioCtxRef.current) playSettleChime(audioCtxRef.current);
      setTimeout(onDone, 1200);
    }, AI_PHASES.length * 1100 + 500));

    return () => {
      cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      audioCtxRef.current?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const centerIdx = Math.floor(VISIBLE_ITEMS / 2);

  return (
    <div className="flex flex-col items-center justify-center py-4">
      {/* AI status header */}
      <div className="mb-5 flex items-center gap-3">
        <motion.div
          animate={!settled ? { rotate: 360 } : { rotate: 0, scale: [1, 1.2, 1] }}
          transition={!settled ? { duration: 1.5, repeat: Infinity, ease: "linear" } : { duration: 0.4 }}
        >
          {settled ? (
            <Sparkles className="h-6 w-6 text-emerald-400" />
          ) : (
            <Brain className="h-6 w-6 text-emerald-400" />
          )}
        </motion.div>
        <div>
          <p className="text-sm font-semibold text-white">
            {settled ? "Perfect match found!" : "AI is analyzing..."}
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={phase}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-xs text-emerald-400/70"
            >
              {settled ? "Based on your unique preferences" : AI_PHASES[phase]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress dots */}
      <div className="mb-5 flex gap-1.5">
        {AI_PHASES.map((_, i) => (
          <motion.div
            key={i}
            className="h-1.5 rounded-full"
            animate={{
              width: i <= phase ? 20 : 6,
              backgroundColor: i <= phase ? "#34d399" : "rgba(255,255,255,0.15)",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Slot reel viewport */}
      <div className="relative w-full max-w-sm mx-auto">
        {/* Top fade */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-950/95 via-slate-950/60 to-transparent z-10 rounded-t-xl" />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent z-10 rounded-b-xl" />

        {/* Selection highlight bar */}
        <div
          className="absolute left-0 right-0 z-[5] pointer-events-none border-y border-emerald-400/40"
          style={{
            top: centerIdx * ITEM_HEIGHT,
            height: ITEM_HEIGHT,
          }}
        >
          <div className="absolute inset-0 bg-emerald-500/10 rounded-lg" />
          {/* Left arrow indicator */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-emerald-400" />
          </div>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-emerald-400" />
          </div>
        </div>

        {/* Scrolling container */}
        <div
          className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 backdrop-blur-sm"
          style={{ height: VISIBLE_ITEMS * ITEM_HEIGHT }}
        >
          <motion.div
            ref={reelRef}
            initial={{ y: 0 }}
            animate={{ y: -(totalScrollDistance - centerIdx * ITEM_HEIGHT) }}
            transition={{
              duration: 6.5,
              ease: [0.12, 0.5, 0.2, 1],
            }}
          >
            {reelItems.map((tour, i) => {
              const isWinnerSlot = settled && i === reelItems.length - 1 - winner + winner;
              return (
                <div
                  key={`${tour.slug}-${i}`}
                  className="flex items-center gap-3 px-4"
                  style={{ height: ITEM_HEIGHT }}
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl transition-colors duration-300 ${
                    isWinnerSlot ? "bg-emerald-500/20" : "bg-white/5"
                  }`}>
                    {tour.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold truncate transition-colors duration-300 ${
                      isWinnerSlot ? "text-emerald-300" : "text-white/80"
                    }`}>
                      {tour.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {tour.duration} &middot; {tour.price}
                    </p>
                  </div>
                  <div className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-300 ${
                    isWinnerSlot
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-white/5 text-gray-500"
                  }`}>
                    {tour.tags.length} match{tour.tags.length !== 1 ? "es" : ""}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Settled result preview */}
      {settled && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-4 text-center"
        >
          <span className="mr-2 text-2xl">{CATALOGUE[winner].emoji}</span>
          <span className="text-lg font-bold text-emerald-300">{CATALOGUE[winner].title}</span>
          <p className="mt-1 text-sm text-emerald-400/70">{CATALOGUE[winner].tagline}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function TripFinder() {
  const [step, setStep] = useState<Step>("welcome");
  const [dir, setDir] = useState(1);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [results, setResults] = useState<TourRecommendation[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const stepIndex = STEPS.indexOf(step);
  const progress = Math.min(((stepIndex) / (STEPS.length - 1)) * 100, 100);

  const goNext = useCallback(() => {
    if (stepIndex < STEPS.length - 1) {
      setDir(1);
      const next = STEPS[stepIndex + 1];
      if (next === "analyzing") setResults(matchTours(interests));
      setStep(next);
    }
  }, [stepIndex, interests]);

  const goBack = useCallback(() => {
    if (stepIndex > 0) {
      setDir(-1);
      setStep(STEPS[stepIndex - 1]);
    }
  }, [stepIndex]);

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const reset = () => {
    setDir(-1);
    setStep("welcome");
    setName("");
    setRegion("");
    setInterests([]);
    setResults([]);
    setShowConfetti(false);
  };

  const onAnalysisDone = useCallback(() => {
    setDir(1);
    setStep("result");
    setShowConfetti(true);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const t = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showConfetti]);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-emerald-950/15 to-background" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-emerald-500/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-1/3 h-80 w-80 rounded-full bg-teal-500/8 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-200/90 backdrop-blur-sm">
            <Compass className="h-4 w-4" />
            Find Your Trip
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Which adventure suits you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-400">
            Answer a few quick questions and our AI will find the perfect Himalayan journey for you.
          </p>
        </div>

        {/* Progress bar */}
        {step !== "welcome" && (
          <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        )}

        {/* Card */}
        <div className="relative min-h-[480px] overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-md shadow-2xl shadow-black/30">
          {/* Confetti */}
          {showConfetti && (
            <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 8 + 4,
                    height: Math.random() * 8 + 4,
                    background: ["#34d399", "#6ee7b7", "#a7f3d0", "#fbbf24", "#f472b6", "#818cf8", "#22d3ee"][i % 7],
                    left: `${Math.random() * 100}%`,
                  }}
                  initial={{ y: -20, opacity: 1, scale: 0 }}
                  animate={{
                    y: 600,
                    opacity: [1, 1, 0],
                    scale: [0, 1.2, 0.5],
                    rotate: Math.random() * 1080,
                    x: (Math.random() - 0.5) * 300,
                  }}
                  transition={{
                    duration: 2.5 + Math.random(),
                    delay: Math.random() * 0.6,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* STEP: Welcome */}
              {step === "welcome" && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Compass className="mb-6 h-16 w-16 text-emerald-400 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    Let&apos;s find your perfect adventure!
                  </h3>
                  <p className="mb-4 text-gray-400">
                    Tell us about yourself, and our AI will scroll through every trek to find your ideal match.
                  </p>
                  <div className="mb-8 flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> Your info</span>
                    <span className="text-white/20">→</span>
                    <span className="flex items-center gap-1"><Heart className="h-4 w-4" /> Interests</span>
                    <span className="text-white/20">→</span>
                    <span className="flex items-center gap-1"><Brain className="h-4 w-4" /> AI Match</span>
                  </div>
                  <button
                    onClick={goNext}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-black shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 hover:shadow-emerald-500/40"
                  >
                    Start the Quiz
                    <Sparkles className="h-5 w-5" />
                  </button>
                </div>
              )}

              {/* STEP: Name */}
              {step === "name" && (
                <div className="py-4">
                  <div className="mb-2 text-xs font-medium uppercase tracking-widest text-emerald-400/60">Step 1 of 4</div>
                  <div className="mb-6 flex items-center gap-3">
                    <User className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-xl font-bold text-white">What&apos;s your name?</h3>
                  </div>
                  <input
                    type="text"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="mb-6 w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-lg text-white placeholder-white/40 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && name.trim()) goNext();
                    }}
                  />
                  {name.trim() && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 text-emerald-300"
                    >
                      Nice to meet you, {name.trim().split(" ")[0]}! 👋
                    </motion.p>
                  )}
                  <div className="flex justify-between">
                    <button onClick={goBack} className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <button
                      onClick={goNext}
                      disabled={!name.trim()}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black transition-all hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Next <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP: Region */}
              {step === "region" && (
                <div className="py-4">
                  <div className="mb-2 text-xs font-medium uppercase tracking-widest text-emerald-400/60">Step 2 of 4</div>
                  <div className="mb-6 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-xl font-bold text-white">Where are you from?</h3>
                  </div>
                  <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {REGIONS.map((r) => {
                      const selected = region === r.id;
                      return (
                        <button
                          key={r.id}
                          onClick={() => setRegion(r.id)}
                          className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-sm font-medium transition-all duration-200 ${
                            selected
                              ? "border-emerald-400 bg-emerald-500/15 text-emerald-200 shadow-lg shadow-emerald-500/10 scale-105"
                              : "border-white/10 bg-white/5 text-gray-300 hover:border-white/25 hover:bg-white/10"
                          }`}
                        >
                          <r.icon className={`h-5 w-5 transition-colors ${selected ? "text-emerald-400" : "text-gray-500"}`} />
                          {r.label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    <button onClick={goBack} className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <button
                      onClick={goNext}
                      disabled={!region}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black transition-all hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Next <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP: Interests */}
              {step === "interests" && (
                <div className="py-4">
                  <div className="mb-2 text-xs font-medium uppercase tracking-widest text-emerald-400/60">Step 3 of 4</div>
                  <div className="mb-6 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-xl font-bold text-white">What excites you?</h3>
                  </div>
                  <p className="mb-4 text-sm text-gray-400">Pick as many as you like</p>
                  <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {INTERESTS.map((item) => {
                      const selected = interests.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => toggleInterest(item.id)}
                          className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-sm font-medium transition-all duration-200 ${
                            selected
                              ? "border-emerald-400 bg-emerald-500/15 text-emerald-200 shadow-lg shadow-emerald-500/10 scale-105"
                              : "border-white/10 bg-white/5 text-gray-300 hover:border-white/25 hover:bg-white/10"
                          }`}
                        >
                          <item.icon className={`h-5 w-5 transition-colors ${selected ? "text-emerald-400" : "text-gray-500"}`} />
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    <button onClick={goBack} className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <button
                      onClick={goNext}
                      disabled={interests.length === 0}
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-black transition-all hover:from-emerald-400 hover:to-teal-400 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Brain className="h-4 w-4" /> Find My Trek
                    </button>
                  </div>
                </div>
              )}

              {/* STEP: AI Analyzing, slot reel */}
              {step === "analyzing" && (
                <SlotReel tours={results} onDone={onAnalysisDone} />
              )}

              {/* STEP: Result */}
              {step === "result" && (
                <div className="py-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 text-center"
                  >
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      🎉 Hey {name.trim().split(" ")[0]}, we think you&apos;ll love...
                    </h3>
                    <p className="text-gray-400">Based on your interests, here are our top picks</p>
                  </motion.div>

                  <div className="mb-6 space-y-4">
                    {results.map((tour, i) => (
                      <motion.div
                        key={tour.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.2, duration: 0.4 }}
                      >
                        <Link
                          href={`/tours/${tour.slug}`}
                          className="group flex items-center gap-4 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-white/[0.08] to-white/[0.02] p-5 transition-all hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-[1.02]"
                        >
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-3xl">
                            {tour.emoji}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                                {tour.title}
                              </h4>
                              <span className="shrink-0 text-lg font-bold text-emerald-400">{tour.price}</span>
                            </div>
                            <p className="text-sm text-gray-400">{tour.tagline}</p>
                            <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                              <span>{tour.duration}</span>
                              <span className="inline-flex items-center gap-1 text-emerald-400 group-hover:gap-2 transition-all">
                                View Details <ArrowRight className="h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                    <button onClick={reset} className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                      <Loader2 className="h-4 w-4" /> Try Again
                    </button>
                    <Link
                      href="/tours"
                      className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 font-medium text-emerald-300 transition-all hover:bg-emerald-500/20"
                    >
                      Browse All Adventures <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
