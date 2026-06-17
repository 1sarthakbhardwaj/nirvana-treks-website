import Container from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight, Award, Globe2, Mountain, Users } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Government-authorized Himalayan travel company based in Manali. Founded in 2024, serving 1000+ travellers across India with expert guides and safe adventures.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400/90">Our story</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">About Nirvana Treks & Tours</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Nirvana Treks & Tours is a registered, government-authorized travel company, founded in{" "}
            <strong className="font-semibold text-white">2024</strong>. Since then we have served{" "}
            <strong className="font-semibold text-white">1,000+ clients successfully</strong> on treks and tours
            across India, with deep expertise in the{" "}
            <strong className="font-semibold text-emerald-300">Himalayan regions</strong>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            From Parvati Valley and Kangra to Kullu–Spiti and beyond, we design safe, well-planned journeys led by
            local guides who know the mountains. Whether it is a weekend ridge trek or a multi-day crossover pass,
            our focus stays the same: authentic experiences, small groups, and clear communication from booking to
            return.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "Registered 2024", desc: "Licensed operator under Govt. of India tourism guidelines" },
            { icon: Users, title: "1,000+ travellers", desc: "Successful batches across treks and curated tours" },
            { icon: Globe2, title: "All over India", desc: "Departures and custom trips beyond the Himalayas too" },
            { icon: Mountain, title: "Himalayan focus", desc: "Routes, seasons, and ground teams built for the mountains" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Our authorization</h3>
            <p className="mt-2 text-white/70">
              We operate with the licenses and compliance required for organized travel in India, so you can book
              with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Safety first</h3>
            <p className="mt-2 text-white/70">
              Experienced guides, verified routes, and practical protocols on every departure.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-semibold text-black shadow-lg transition hover:from-emerald-400 hover:to-emerald-500"
          >
            Explore tours
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </main>
  );
}
