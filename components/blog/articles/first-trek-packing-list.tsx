import Link from "next/link";
import BlogChecklist from "@/components/blog/blog-checklist";
import BlogPracticalHero from "@/components/blog/blog-practical-hero";
import { PACKING_CHECKLIST } from "@/lib/blog/packing-checklist-data";
import { FIRST_TREK_PACKING_FAQ } from "@/lib/blog/faq-first-trek-packing";

export default function FirstTrekPackingListArticle() {
  return (
    <>
      <p className="blog-eyebrow">Practical Guide · First Trek</p>
      <h1>
        Your first trek ever: a Delhi person&apos;s honest <em>packing list</em>
      </h1>

      <div className="blog-meta">
        <span>
          <strong>Nirvana Treks &amp; Tours</strong>
        </span>
        <span className="dot" aria-hidden="true" />
        <span>Updated 21 June 2026</span>
        <span className="dot" aria-hidden="true" />
        <span>10 min read</span>
      </div>

      <BlogPracticalHero variant="packing" />

      <div className="blog-body">
        <div className="blog-verdict">
          <p className="blog-verdict-tag">The honest rule</p>
          <p>
            Pack <strong>light</strong>, pack in <strong>layers</strong>, and do not buy everything. Most
            first-timers from the city carry twice what they need and still forget the one rain layer
            that matters. Use the checklist below, it ticks as you pack.
          </p>
          <div className="blog-verdict-pills">
            <span className="blog-verdict-pill">
              <b>Target:</b> under 8–10 kg
            </span>
            <span className="blog-verdict-pill">
              <b>Rule:</b> no cotton
            </span>
            <span className="blog-verdict-pill">
              <b>Buy:</b> shoes &amp; socks only
            </span>
          </div>
        </div>

        <h2>The checklist</h2>
        <p>
          Tap each item as it goes into your bag. Essentials are tagged, optional extras are marked so
          you can skip them on a simple weekend trek.
        </p>
        <BlogChecklist categories={PACKING_CHECKLIST} />

        <h2>What Delhi first-timers get wrong</h2>
        <p>A few patterns we see on every first trek, so you can skip the lesson:</p>
        <ul>
          <li>
            <strong>Wearing jeans and sneakers.</strong> Jeans get heavy and cold when wet, and sneakers
            slip. This is how ankles get rolled. Trek pants and grippy shoes, always.
          </li>
          <li>
            <strong>Packing cotton.</strong> Cotton t-shirts soak up sweat and stay cold against your
            skin. Go synthetic or merino.
          </li>
          <li>
            <strong>One big jacket instead of layers.</strong> A single thick jacket cannot adapt. Three
            thin layers can handle a hot climb and a freezing night.
          </li>
          <li>
            <strong>No rain layer.</strong> People skip it on a clear morning and regret it by
            afternoon. A light shell weighs nothing.
          </li>
          <li>
            <strong>Over-packing toiletries.</strong> You do not need the full bathroom shelf for two
            days. Travel-size, and only the basics.
          </li>
        </ul>

        <h2>Buy or rent? Keep it cheap</h2>
        <p>
          You do not need to spend a fortune to start. <strong>Buy</strong> the things that touch your
          body and affect your safety: trekking shoes and good socks. <strong>Rent or borrow</strong> the
          big-ticket items you might use once, a 50 litre backpack, a down jacket, trekking poles. On our
          treks, tents, sleeping bags and food are carried for you, so your personal pack stays light and
          your wallet stays intact.
        </p>
        <div className="blog-note">
          <b>Layers depend on the season.</b> The list above is the core. What you actually wear shifts a
          lot between June and January, so pair this with our guide on{" "}
          <Link href="/blog/what-to-wear-trekking-himachal">what to wear trekking in Himachal across seasons</Link>.
        </div>

        <h2>Before you go</h2>
        <p>
          Packing right is half the battle. The other half is arriving with legs that can enjoy the
          climb. If this is your first trek, read our{" "}
          <Link href="/blog/how-to-get-trek-fit-3-weeks">3-week trek-fit plan</Link>, then pick a gentle
          first route from the{" "}
          <Link href="/blog/2-day-treks-near-delhi-for-first-timers">2-day treks for first-timers</Link>.{" "}
          <Link href="/blog/triund-trek-guide">Triund</Link> is the classic place to start.
        </p>

        <div className="blog-cta">
          <h2>Your first trek, fully sorted</h2>
          <p>
            We handle tents, meals, transport and a captain, so you only carry a light personal pack. Come
            find out how easy a first trek can be.
          </p>
          <Link href="/tours">See beginner treks</Link>
        </div>

        <section className="blog-faq" aria-labelledby="packing-faq">
          <h2 id="packing-faq">Frequently asked questions</h2>
          {FIRST_TREK_PACKING_FAQ.map((item) => (
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
              <Link href="/blog/what-to-wear-trekking-himachal">What to wear trekking in Himachal</Link> —
              season by season.
            </li>
            <li>
              <Link href="/blog/how-to-get-trek-fit-3-weeks">Get trek-fit in 3 weeks</Link> — the
              desk-worker plan.
            </li>
            <li>
              <Link href="/blog/2-day-treks-near-delhi-for-first-timers">2-day treks for first-timers</Link>{" "}
              — where to start.
            </li>
            <li>
              <Link href="/blog/triund-trek-guide">Triund trek guide</Link> — the classic first trek.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
