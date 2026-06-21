import Link from "next/link";
import BlogPracticalHero from "@/components/blog/blog-practical-hero";
import BlogSeasonOutfit from "@/components/blog/blog-season-outfit";
import { WHAT_TO_WEAR_FAQ } from "@/lib/blog/faq-what-to-wear";
import { WHAT_TO_WEAR_SEASONS } from "@/lib/blog/what-to-wear-season-data";

export default function WhatToWearTrekkingHimachalArticle() {
  return (
    <>
      <p className="blog-eyebrow">Practical Guide · Clothing</p>
      <h1>
        What to wear trekking in Himachal, <em>across the seasons</em>
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

      <BlogPracticalHero variant="layers" />

      <div className="blog-body">
        <div className="blog-verdict">
          <p className="blog-verdict-tag">The one rule that matters</p>
          <p>
            Dress in <strong>layers</strong>, not in one big jacket. A base layer to move sweat, a mid
            layer for warmth, insulation for the cold, and a shell against wind and rain. You add and shed
            layers as the mountain changes through the day. And never, ever cotton.
          </p>
          <div className="blog-verdict-pills">
            <span className="blog-verdict-pill">
              <b>Base + Mid + Insulation + Shell</b>
            </span>
            <span className="blog-verdict-pill">
              <b>No cotton, no jeans</b>
            </span>
          </div>
        </div>

        <h2>The layering system, explained</h2>
        <p>
          Every layer has a job. Get the system right and you stay comfortable from a sweaty midday climb
          to a freezing night, with the same few items.
        </p>
        <ul>
          <li>
            <strong>Base layer.</strong> Sits on your skin and wicks sweat away so you do not get cold and
            clammy. Synthetic or merino wool, never cotton.
          </li>
          <li>
            <strong>Mid layer.</strong> A fleece that traps warmth. Your go-to for cool mornings and the
            climb.
          </li>
          <li>
            <strong>Insulation layer.</strong> A down or synthetic puffer for serious cold, mostly at camp
            and on summit pushes.
          </li>
          <li>
            <strong>Shell.</strong> A lightweight waterproof, windproof jacket that goes over everything
            when the weather turns.
          </li>
        </ul>
        <div className="blog-note">
          <b>Why cotton is the enemy.</b> Cotton soaks up sweat and rain and holds it against your skin,
          which chills you fast and causes blisters and chafing. Synthetics and merino move moisture away
          and dry quickly. This one swap matters more than any single piece of gear.
        </div>

        <h2>What to wear, season by season</h2>
        <p>Pick your season to see exactly what to wear walking, at camp, and on your feet.</p>
        <BlogSeasonOutfit seasons={WHAT_TO_WEAR_SEASONS} />
        <p>
          For monsoon treks, read our{" "}
          <Link href="/blog/monsoon-trekking-himachal">monsoon safety guide</Link> first. For winter
          routes, see our <Link href="/blog/snow-treks-himachal-winter">snow treks guide</Link>.
        </p>

        <h2>Footwear and socks, do not skimp</h2>
        <p>
          Your shoes are the one thing you should not improvise. Proper trekking shoes with a grippy sole
          and some ankle support keep you safe on loose ground and long descents. Pair them with wool or
          synthetic socks, never cotton, and carry spares, because dry feet are happy feet. Break new shoes
          in on a few walks before the trek, never on day one.
        </p>

        <h2>The mistakes to avoid</h2>
        <ul>
          <li>
            <strong>Jeans.</strong> Heavy, cold when wet, and restrictive. Trek pants instead.
          </li>
          <li>
            <strong>One thick jacket.</strong> It cannot adapt. Layers can handle both a hot climb and a
            freezing night.
          </li>
          <li>
            <strong>Cotton anything.</strong> T-shirts, socks, hoodies. All a problem once you sweat.
          </li>
          <li>
            <strong>Skipping the shell.</strong> A clear morning means nothing by afternoon. Always carry
            it.
          </li>
          <li>
            <strong>New shoes on trek day.</strong> Guaranteed blisters. Break them in first.
          </li>
        </ul>

        <div className="blog-cta">
          <h2>Dressed right, trekking is a joy</h2>
          <p>
            Not sure what your trek and season demand? Ask us, we will tell you exactly what to bring
            before you book.
          </p>
          <Link href="/tours">See our treks</Link>
        </div>

        <section className="blog-faq" aria-labelledby="wear-faq">
          <h2 id="wear-faq">Frequently asked questions</h2>
          {WHAT_TO_WEAR_FAQ.map((item) => (
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
              <Link href="/blog/first-trek-packing-list">First trek packing list</Link> — everything else
              to carry.
            </li>
            <li>
              <Link href="/blog/best-time-to-trek-himachal">Best time to trek in Himachal</Link> — plan
              your season.
            </li>
            <li>
              <Link href="/blog/snow-treks-himachal-winter">Snow treks in Himachal</Link> — dressing for
              winter.
            </li>
            <li>
              <Link href="/blog/how-to-get-trek-fit-3-weeks">Get trek-fit in 3 weeks</Link> — arrive
              ready.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
