"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Music,
  Gamepad2,
  Wind,
  Waves,
  Sun,
  Flame,
  Building2,
  Coffee,
  ShoppingBag,
  Gift,
  Tent,
  Mountain,
  Sparkles,
  Sunrise,
  Map,
  Check,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  birBillingPackages,
  birBillingIncluded,
  birBillingNotIncluded,
  type BirBillingDay,
  type BirBillingPackage,
} from "./bir-billing-data";

const easeOut = [0.22, 1, 0.36, 1] as const;
const display = { fontFamily: "var(--font-fraunces), Georgia, serif" };

const actIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("intro")) return <Users />;
  if (l.includes("playlist") || l.includes("music") || l.includes("antakshari"))
    return <Music />;
  if (l.includes("game") || l.includes("mafia") || l.includes("imposter"))
    return <Gamepad2 />;
  if (l.includes("paraglid")) return <Wind />;
  if (l.includes("waterfall") || l.includes("stream")) return <Waves />;
  if (l.includes("sunset") || l.includes("sunrise")) return <Sunrise />;
  if (l.includes("bonfire")) return <Flame />;
  if (l.includes("monaster") || l.includes("tibetan")) return <Building2 />;
  if (l.includes("café") || l.includes("cafe")) return <Coffee />;
  if (l.includes("shop") || l.includes("market")) return <ShoppingBag />;
  if (l.includes("gift") || l.includes("dish")) return <Gift />;
  if (l.includes("tent") || l.includes("camp")) return <Tent />;
  if (l.includes("trek") || l.includes("hike") || l.includes("view"))
    return <Mountain />;
  if (l.includes("star")) return <Sparkles />;
  if (l.includes("village") || l.includes("explore")) return <Map />;
  return <Sun />;
};

export default function BirBillingSwitcher() {
  const [activeId, setActiveId] = useState<BirBillingPackage["id"]>("weekend");
  const active = birBillingPackages.find((p) => p.id === activeId) ?? birBillingPackages[0];
  const reduce = useReducedMotion();

  return (
    <>
      <SwitcherSection
        activeId={activeId}
        setActiveId={setActiveId}
        active={active}
        reduce={reduce}
      />
      <DetailsSection active={active} reduce={reduce} />
    </>
  );
}

function SwitcherSection({
  activeId,
  setActiveId,
  active,
  reduce,
}: {
  activeId: BirBillingPackage["id"];
  setActiveId: (id: BirBillingPackage["id"]) => void;
  active: BirBillingPackage;
  reduce: boolean | null;
}) {
  return (
    <section className="bg-[#0c0e13] pt-16 pb-2 text-[#f5efe4]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#ff6a33]">
            Choose your trip
          </p>
          <h2
            className="mt-2 font-medium leading-tight tracking-[-0.01em] text-[#f5efe4]"
            style={{ ...display, fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Two ways to do Bir
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#a7a194]">
            Both start the same: an overnight ride and a day in the valley. The Extended goes
            deeper, into Rajgundha.
          </p>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex gap-1.5 rounded-full border border-white/10 bg-[#13161d] p-1.5">
            {birBillingPackages.map((pkg) => {
              const isActive = pkg.id === activeId;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setActiveId(pkg.id)}
                  className={`relative z-10 flex flex-col items-center gap-px rounded-full px-6 py-3 text-[15px] font-semibold leading-tight transition-colors duration-300 ${
                    isActive ? "text-[#0c0e13]" : "text-[#a7a194] hover:text-[#f5efe4]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bir-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#f9b24a,#ff6a33)",
                        boxShadow: "0 8px 24px rgba(255,106,51,.35)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span>{pkg.label}</span>
                  <span
                    className={`text-[11px] font-medium uppercase tracking-[0.08em] ${
                      isActive ? "text-[#0c0e13]/65" : "text-[#7e7a70]"
                    }`}
                  >
                    {pkg.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <MetaStrip pkg={active} />
            <Timeline pkg={active} reduce={reduce} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function MetaStrip({ pkg }: { pkg: BirBillingPackage }) {
  return (
    <div className="mt-8 mb-2 grid overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] sm:grid-cols-4 grid-cols-2">
      {pkg.meta.map((m, i) => (
        <div
          key={`${pkg.id}-${i}`}
          className="bg-[#13161d] p-5 sm:p-6"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff6a33]">
            {m.label}
          </p>
          <p
            className="mt-1.5 font-medium leading-none text-[#f5efe4]"
            style={{ ...display, fontSize: "26px" }}
          >
            {m.value}
          </p>
          <p className="mt-1.5 text-[12.5px] text-[#a7a194]">{m.sub}</p>
        </div>
      ))}
    </div>
  );
}

function Timeline({ pkg, reduce }: { pkg: BirBillingPackage; reduce: boolean | null }) {
  return (
    <div className="relative ml-2 pt-10">
      <span
        className="pointer-events-none absolute left-[23px] top-[64px] bottom-[64px] w-0.5"
        style={{
          background:
            "linear-gradient(180deg,#ff6a33,#f9b24a 40%,#8fc1e3 100%)",
          opacity: 0.5,
        }}
        aria-hidden
      />

      <ol className="list-none space-y-0">
        {pkg.days.map((day, idx) => (
          <DayBlock
            key={`${pkg.id}-day-${day.day}`}
            day={day}
            index={idx}
            reduce={reduce}
          />
        ))}
      </ol>
    </div>
  );
}

function DayBlock({
  day,
  index,
  reduce,
}: {
  day: BirBillingDay;
  index: number;
  reduce: boolean | null;
}) {
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: easeOut }}
      className="relative pb-10 pl-[60px] sm:pl-[74px] last:pb-0"
    >
      <div
        className={`absolute left-0 top-0.5 z-[2] flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 ${
          day.highlight
            ? "border-[#ff6a33] bg-[#1a1e27] text-[#f9b24a]"
            : "border-white/15 bg-[#1a1e27] text-[#f5efe4]"
        }`}
        style={{ ...display, fontSize: "16px", fontWeight: 600 }}
      >
        {String(day.day).padStart(2, "0")}
      </div>

      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#f9b24a]">
        {day.label}
      </p>

      <h3
        className="mt-1.5 font-medium leading-tight tracking-[-0.01em] text-[#f5efe4]"
        style={{ ...display, fontSize: "clamp(22px, 3vw, 30px)" }}
      >
        {day.title}
      </h3>

      <p className="mt-2 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[13px] text-[#a7a194]">
        {day.when.split(" · ").map((part, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            {part.match(/\d/) || part.toLowerCase().includes("stay") ? (
              <b className="font-semibold text-[#8fc1e3]">{part}</b>
            ) : (
              part
            )}
          </span>
        ))}
      </p>

      <p className="mt-3.5 max-w-[660px] text-[15.5px] leading-relaxed text-[#ded7c9]">
        {day.body}
      </p>

      {day.bullets && day.bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {day.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[14.5px] text-[#ded7c9]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f9b24a]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {day.splitPaths ? (
        <div className="mt-5 grid max-w-[660px] gap-3.5 sm:grid-cols-2">
          <PathCard
            title={day.splitPaths.a.title}
            body={day.splitPaths.a.body}
            tag={day.splitPaths.a.tag}
            accent="#ff6a33"
            icon={<Wind className="h-4.5 w-4.5" />}
          />
          <PathCard
            title={day.splitPaths.b.title}
            body={day.splitPaths.b.body}
            tag={day.splitPaths.b.tag}
            accent="#8fc1e3"
            icon={<Waves className="h-4.5 w-4.5" />}
          />
        </div>
      ) : null}

      {day.acts && day.acts.length > 0 ? (
        <div className="mt-4 flex max-w-[660px] flex-wrap gap-2.5">
          {day.acts.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/[0.09] bg-[#13161d] px-3.5 py-1.5 text-[13.5px] text-[#f5efe4]"
            >
              <span className="text-[#f9b24a] [&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:stroke-current">
                {actIcon(a)}
              </span>
              {a}
            </span>
          ))}
        </div>
      ) : null}

      {day.pivot ? (
        <p
          className="mt-4 max-w-[660px] rounded-xl border-l-[3px] border-[#8fc1e3] bg-[#8fc1e3]/[0.07] px-4 py-3.5 text-[14px] text-[#dfe7ee]"
          style={{ borderColor: "#8fc1e3", borderTopColor: "rgba(143,193,227,.2)", borderRightColor: "rgba(143,193,227,.2)", borderBottomColor: "rgba(143,193,227,.2)", borderWidth: "1px", borderLeftWidth: "3px" }}
        >
          {day.pivot}
        </p>
      ) : null}

      {day.staysAt ? (
        <span
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#8fb96b]/25 bg-[#8fb96b]/10 px-3 py-1.5 text-[12.5px] font-semibold tracking-wide text-[#a8cf80]"
        >
          <Tent className="h-3.5 w-3.5" />
          {day.staysAt}
        </span>
      ) : null}
    </motion.li>
  );
}

function PathCard({
  title,
  body,
  tag,
  accent,
  icon,
}: {
  title: string;
  body: string;
  tag: string;
  accent: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#13161d] p-4.5 sm:p-5">
      <span
        className="absolute inset-y-0 left-0 w-[3px]"
        style={{ background: accent }}
        aria-hidden
      />
      <div className="flex items-center gap-2.5 font-semibold text-[15px] text-[#f5efe4]">
        <span className="[&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:stroke-current" style={{ color: accent }}>
          {icon}
        </span>
        {title}
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-[#a7a194]">{body}</p>
      <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#f9b24a]">
        {tag}
      </p>
    </div>
  );
}

function DetailsSection({
  active,
  reduce,
}: {
  active: BirBillingPackage;
  reduce: boolean | null;
}) {
  return (
    <section className="bg-[#0c0e13] pt-16 pb-8 text-[#f5efe4]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#ff6a33]">
              The details
            </p>
            <h2
              className="mt-2 font-medium leading-tight tracking-[-0.01em] text-[#f5efe4]"
              style={{ ...display, fontSize: "clamp(26px, 3.4vw, 36px)" }}
            >
              What&apos;s included
            </h2>

            <ul className="mt-6 grid gap-3 gap-x-6 sm:grid-cols-2">
              {birBillingIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14.5px] text-[#ded7c9]"
                >
                  <Check className="mt-0.5 h-[17px] w-[17px] flex-shrink-0 stroke-[#8fb96b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[13.5px] leading-relaxed text-[#a7a194]">
              <b className="font-semibold text-[#f5efe4]">Not included:</b>{" "}
              {birBillingNotIncluded}
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#1a1e27] to-[#13161d] p-7 sm:p-8"
          >
            <span
              className="pointer-events-none absolute -right-[20%] -top-[40%] h-60 w-60 rounded-full"
              style={{
                background:
                  "radial-gradient(circle,rgba(255,106,51,.22),transparent 70%)",
              }}
              aria-hidden
            />

            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f9b24a]">
              {active.priceLabel}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {active.prices.map((p, i) => (
                  <div
                    key={p.name}
                    className={`flex items-baseline justify-between gap-4 py-4 ${
                      i < active.prices.length - 1 ? "border-b border-white/[0.09]" : ""
                    }`}
                  >
                    <p className="text-[14.5px] text-[#ded7c9]">{p.name}</p>
                    <p
                      className="font-semibold text-[#f5efe4]"
                      style={{ ...display, fontSize: "30px" }}
                    >
                      {p.price}{" "}
                      <small className="text-[13px] font-normal text-[#a7a194]" style={{ fontFamily: "inherit" }}>
                        /pp
                      </small>
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="mt-4 text-[12.5px] leading-relaxed text-[#a7a194]">
              Prices per person. 50% advance confirms your seat. Balance 7 days before
              departure.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/918920614215"
                target="_blank"
                rel="noopener"
                className="inline-flex flex-1 min-w-[150px] items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[15px] font-semibold text-[#1a0f06] transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#f9b24a,#ff6a33)",
                  boxShadow: "0 10px 28px rgba(255,106,51,.3)",
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex flex-1 min-w-[150px] items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-[15px] font-semibold text-[#f5efe4] transition-colors hover:border-[#f9b24a] hover:text-[#f9b24a]"
              >
                <Phone className="h-4 w-4" />
                Call us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
