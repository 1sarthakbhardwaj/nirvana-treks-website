import Link from "next/link";
import BlogChecklist from "@/components/blog/blog-checklist";
import BlogPracticalHero from "@/components/blog/blog-practical-hero";
import { TREK_FIT_FAQ } from "@/lib/blog/faq-trek-fit";
import { TREK_FIT_CHECKLIST } from "@/lib/blog/trek-fit-checklist-data";

const MOVES = [
  {
    name: "Squats.",
    detail:
      "The trek's bread and butter. Feet shoulder-width, sit back like into a chair, knees tracking over toes. Start with 2 sets of 10 to 12.",
  },
  {
    name: "Lunges.",
    detail:
      "Step forward, drop the back knee toward the floor, push back up. Builds the single-leg strength climbs and descents demand. 2 sets of 8 each leg.",
  },
  {
    name: "Step-ups.",
    detail:
      "Step onto a sturdy bench or stair, drive through the heel, step down with control. This is literally trekking. 2 sets of 10 each leg.",
  },
  {
    name: "Calf raises.",
    detail: "Rise onto your toes, lower slowly. Saves your calves on long climbs. 2 sets of 15.",
  },
  {
    name: "Planks.",
    detail:
      "A strong core keeps you stable under a pack. Hold 20 to 30 seconds, build up. 3 rounds.",
  },
  {
    name: "Stairs and incline walks.",
    detail:
      "The most trek-specific training there is. Take the stairs everywhere, and walk uphill whenever you can.",
  },
];

export default function HowToGetTrekFit3WeeksArticle() {
  return (
    <>
      <p className="blog-eyebrow">Practical Guide · Fitness</p>
      <h1>
        How to get trek-fit in 3 weeks if you <em>sit at a desk</em>
      </h1>

      <div className="blog-meta">
        <span>
          <strong>Nirvana Treks &amp; Tours</strong>
        </span>
        <span className="dot" aria-hidden="true" />
        <span>Updated 21 June 2026</span>
        <span className="dot" aria-hidden="true" />
        <span>9 min read</span>
      </div>

      <BlogPracticalHero variant="fitness" />

      <div className="blog-body">
        <div className="blog-verdict">
          <p className="blog-verdict-tag">The good news</p>
          <p>
            You do not need to be an athlete to enjoy a weekend trek. Three weeks of consistent walking,
            stairs and simple leg strength is enough to turn a hard slog into a good day out. Start where
            you are, build gradually, and rest properly.
          </p>
          <div className="blog-verdict-pills">
            <span className="blog-verdict-pill">
              <b>3 days a week minimum</b>
            </span>
            <span className="blog-verdict-pill">
              <b>Walk, stairs, legs</b>
            </span>
            <span className="blog-verdict-pill">
              <b>Rest matters</b>
            </span>
          </div>
        </div>

        <div className="blog-note">
          <b>A quick word on safety.</b> If you have a heart condition, joint problems, or any medical
          concern, check with a doctor before starting. Build up gradually rather than going all-out, and
          stop if you feel sharp pain. Soreness is normal, pain is a signal.
        </div>

        <h2>The 3-week plan</h2>
        <p>
          Three weeks, building from a base into real trek-specific work, then tapering so you arrive
          fresh. Tap each session as you do it and watch the bar fill.
        </p>
        <BlogChecklist
          categories={TREK_FIT_CHECKLIST}
          progressLabel="Tap each session as you finish it"
        />

        <h2>The moves that matter</h2>
        <p>You only need a handful of exercises. No gym required.</p>
        {MOVES.map((move) => (
          <div key={move.name} className="blog-move">
            <b>{move.name}</b> <span>{move.detail}</span>
          </div>
        ))}

        <h2>The backpack trick</h2>
        <p>
          In week two, start walking with a loaded backpack, 3 to 5 kg to begin. Your body needs to learn
          to carry weight uphill, and there is no better way to prepare than doing exactly that. By week
          three you will barely notice the pack on the real trek.
        </p>

        <h2>Recovery, the half people skip</h2>
        <p>
          Training breaks you down. Rest builds you back up. Sleep well, eat balanced meals across the
          day, and drink plenty of water. Stretch your legs after sessions, especially calves, quads and
          hamstrings. The rest days in the plan are not optional, they are where the fitness actually
          happens.
        </p>

        <h2>What not to do</h2>
        <ul>
          <li>
            <strong>Do not crash-train.</strong> Cramming a month of effort into the last week invites
            injury, not fitness.
          </li>
          <li>
            <strong>Do not skip rest.</strong> Overtraining a desk body backfires fast.
          </li>
          <li>
            <strong>Do not go hard the day before.</strong> Arrive fresh, not sore.
          </li>
          <li>
            <strong>Do not ignore pain.</strong> Adjust, rest, or seek advice. A trek is not worth an
            injury.
          </li>
        </ul>
        <div className="blog-note">
          <b>Match the trek to your level.</b> Three weeks gets you ready for an easy to moderate trek,
          not a hard high-altitude one. Use our guide on{" "}
          <Link href="/blog/easy-vs-moderate-himachal-treks">easy vs moderate treks</Link> to pick a route
          your legs can actually handle.
        </div>

        <div className="blog-cta">
          <h2>Train up, then come trek with us</h2>
          <p>
            Tell us your fitness and we will match you to the right first trek, gentle enough to enjoy,
            real enough to feel proud of.
          </p>
          <Link href="/tours">See beginner treks</Link>
        </div>

        <section className="blog-faq" aria-labelledby="trek-fit-faq">
          <h2 id="trek-fit-faq">Frequently asked questions</h2>
          {TREK_FIT_FAQ.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="blog-related">
          <h2>Keep reading</h2>
          <ul>
            <li>
              <Link href="/blog/easy-vs-moderate-himachal-treks">Easy vs moderate treks</Link> — pick by
              fitness.
            </li>
            <li>
              <Link href="/blog/first-trek-packing-list">First trek packing list</Link> — the honest
              version.
            </li>
            <li>
              <Link href="/blog/2-day-treks-near-delhi-for-first-timers">2-day treks for first-timers</Link>{" "}
              — gentle starts.
            </li>
            <li>
              <Link href="/blog/what-to-wear-trekking-himachal">What to wear trekking</Link> — dress for
              the climb.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
