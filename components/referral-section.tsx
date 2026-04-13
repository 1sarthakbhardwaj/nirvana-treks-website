import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/container";
import { REFERRAL_PROGRAM } from "@/lib/promotions";

function referralWhatsAppHref(): string | null {
  const n = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  if (n.length < 10) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(REFERRAL_PROGRAM.whatsappPrefill)}`;
}

export default function ReferralSection() {
  const wa = referralWhatsAppHref();

  return (
    <section
      id="referral-program"
      className="relative overflow-hidden border-y border-emerald-500/15 bg-gradient-to-br from-emerald-950/40 via-background to-secondary/30 py-20"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{REFERRAL_PROGRAM.headline}</h2>
          <p className="mt-4 text-lg text-white/70">{REFERRAL_PROGRAM.sub}</p>
          <p className="mt-3 text-sm font-medium text-emerald-300/95">{REFERRAL_PROGRAM.discountSummary}</p>
        </div>
        <ul className="mx-auto mt-10 max-w-2xl list-inside list-disc space-y-2 text-white/75">
          {REFERRAL_PROGRAM.bullets.map((b) => (
            <li key={b} className="pl-1 marker:text-emerald-500">
              {b}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-white/50">
          Credits are applied manually after we verify both bookings. There is no automated tracking on this
          website. Message us if anything looks unclear; we keep it simple and transparent.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-semibold text-black shadow-lg transition hover:from-emerald-400 hover:to-emerald-500"
            >
              <MessageCircle className="h-5 w-5" />
              Apply via WhatsApp
            </a>
          ) : null}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Contact page
          </Link>
        </div>
      </Container>
    </section>
  );
}
