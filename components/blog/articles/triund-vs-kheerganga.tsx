import Link from "next/link";
import BlogDecisionHero from "@/components/blog/blog-decision-hero";
import BlogInteractivePicker from "@/components/blog/blog-interactive-picker";

const PAGE_FAQ = [
  {
    question: "Is Triund or Kheerganga better for beginners?",
    answer:
      "Triund. It is shorter at about 9 km one way, the climb is gentler, and access from McLeod Ganj is simple. Kheerganga is still beginner-friendly but longer and a touch harder.",
  },
  {
    question: "Which is harder, Triund or Kheerganga?",
    answer:
      "Kheerganga, slightly. It is about 12 km one way from Barshaini against Triund's 9 km, with a longer sustained climb. Neither is technical.",
  },
  {
    question: "Can I do both Triund and Kheerganga in one trip?",
    answer:
      "They sit in different valleys, Dhauladhar and Parvati, several hours apart, so most people do them as separate weekends rather than back to back.",
  },
  {
    question: "Which trek has the hot spring?",
    answer:
      "Kheerganga. The natural hot spring at the top is its signature reward. Triund's reward is the open ridge and sunset over the Dhauladhar.",
  },
];

const VS_CHIPS = [
  { label: "It is my first trek", side: "a" as const },
  { label: "I want a hot spring", side: "b" as const },
  { label: "Only a weekend, least effort", side: "a" as const },
  { label: "I do not mind a longer walk", side: "b" as const },
  { label: "Fewer crowds please", side: "b" as const },
  { label: "Biggest views, fast", side: "a" as const },
  { label: "Going via Kasol / Parvati", side: "b" as const },
  { label: "Easy McLeod Ganj access", side: "a" as const },
];

export default function TriundVsKheergangaArticle() {
  return (
    <>
      <p className="blog-eyebrow">Comparisons · Decision Guide</p>
      <h1>
        Triund vs Kheerganga: which trek should <em>you pick?</em>
      </h1>

      <div className="blog-meta">
        <span>
          <strong>Nirvana Treks &amp; Tours</strong>
        </span>
        <span className="dot" aria-hidden="true" />
        <span>Updated 19 June 2026</span>
        <span className="dot" aria-hidden="true" />
        <span>8 min read</span>
      </div>

      <BlogDecisionHero variant="triund-vs-kheerganga" />

      <div className="blog-body">
        <div className="blog-verdict">
          <p className="blog-verdict-tag">Short answer</p>
          <p>
            Pick <strong>Triund</strong> if it is your first trek and you want the biggest views
            for the least effort. Pick <strong>Kheerganga</strong> if you want a natural hot spring
            at the top and do not mind a longer walk.
          </p>
          <div className="blog-verdict-pills">
            <span className="blog-verdict-pill">
              <b>Triund:</b> easiest big-views weekend
            </span>
            <span className="blog-verdict-pill">
              <b>Kheerganga:</b> hot spring reward
            </span>
          </div>
        </div>

        <h2>How they compare</h2>
        <p>
          Both are two-day weekend treks from Delhi NCR, both end high with a view, and both are
          doable by a first-timer. The differences are in distance, crowds and the reward at the top.
        </p>

        <div className="blog-metrics">
          <div className="blog-metric">
            <div className="blog-metric-name">Difficulty</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "45%" }} />
              </div>
              <span>Easy–Mod</span>
            </div>
            <div className="blog-bar b">
              <b>Kheerganga</b>
              <div className="blog-bar-track">
                <i style={{ width: "62%" }} />
              </div>
              <span>Easy–Mod</span>
            </div>
          </div>
          <div className="blog-metric">
            <div className="blog-metric-name">Distance (one way)</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "50%" }} />
              </div>
              <span>~9 km</span>
            </div>
            <div className="blog-bar b">
              <b>Kheerganga</b>
              <div className="blog-bar-track">
                <i style={{ width: "72%" }} />
              </div>
              <span>~12 km</span>
            </div>
          </div>
          <div className="blog-metric">
            <div className="blog-metric-name">Crowds</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "92%" }} />
              </div>
              <span>Very busy</span>
            </div>
            <div className="blog-bar b">
              <b>Kheerganga</b>
              <div className="blog-bar-track">
                <i style={{ width: "70%" }} />
              </div>
              <span>Busy</span>
            </div>
          </div>
          <div className="blog-metric">
            <div className="blog-metric-name">Beginner-friendly</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "90%" }} />
              </div>
              <span>Excellent</span>
            </div>
            <div className="blog-bar b">
              <b>Kheerganga</b>
              <div className="blog-bar-track">
                <i style={{ width: "70%" }} />
              </div>
              <span>Good</span>
            </div>
          </div>
          <div className="blog-metric">
            <div className="blog-metric-name">The reward</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "75%" }} />
              </div>
              <span>Ridge sunset</span>
            </div>
            <div className="blog-bar b">
              <b>Kheerganga</b>
              <div className="blog-bar-track">
                <i style={{ width: "92%" }} />
              </div>
              <span>Hot spring</span>
            </div>
          </div>
        </div>

        <BlogInteractivePicker mode="vs" labelA="Triund" labelB="Kheerganga" chips={VS_CHIPS} />

        <div className="blog-pickcards">
          <div className="blog-pickcard a">
            <h3>Pick Triund if</h3>
            <ul>
              <li>This is your first proper trek</li>
              <li>You want the most view for the least climb</li>
              <li>You are short on time and energy</li>
              <li>You like the buzz of a popular trail</li>
            </ul>
          </div>
          <div className="blog-pickcard b">
            <h3>Pick Kheerganga if</h3>
            <ul>
              <li>You want to soak in a hot spring at the top</li>
              <li>You are happy walking a longer day</li>
              <li>You are already heading to Kasol or Parvati Valley</li>
              <li>You want a slightly quieter trail than Triund</li>
            </ul>
          </div>
        </div>

        <h2>Side by side</h2>
        <div className="blog-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col" className="col-a">Triund</th>
                <th scope="col" className="col-b">Kheerganga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Region</td>
                <td>Dhauladhar, Kangra</td>
                <td>Parvati Valley, Kullu</td>
              </tr>
              <tr>
                <td>Base</td>
                <td>McLeod Ganj</td>
                <td>Kasol → Barshaini</td>
              </tr>
              <tr>
                <td>Top altitude</td>
                <td>~2,850 m</td>
                <td>~2,960 m</td>
              </tr>
              <tr>
                <td>Distance (one way)</td>
                <td>~9 km</td>
                <td>~12 km</td>
              </tr>
              <tr>
                <td>Difficulty</td>
                <td>Easy to moderate</td>
                <td>Easy to moderate, longer</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>2 days, 1 night</td>
                <td>2 days, 1 night</td>
              </tr>
              <tr>
                <td>Highlight</td>
                <td>Ridge camp and sunset</td>
                <td>Natural hot spring</td>
              </tr>
              <tr>
                <td>Crowd level</td>
                <td>Very high</td>
                <td>High</td>
              </tr>
              <tr>
                <td>From Delhi</td>
                <td>~480 km</td>
                <td>~520 km</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Our take</h2>
        <p>
          If you have never trekked, do Triund first. It gives you a real Himalayan ridge, a night
          under the stars, and a confidence boost, without punishing your legs. Once you have one trek
          behind you, Kheerganga is the natural next step, and that hot spring at the end is hard to
          beat after a long climb. You cannot pick wrong here. You can only pick what fits this trip.
        </p>
        <p>
          Read the full guides before you book: the{" "}
          <Link href="/blog/triund-trek-guide">Triund trek guide</Link> and the{" "}
          <Link href="/blog/kheerganga-trek-from-kasol">Kheerganga trek guide</Link>. Still deciding
          by difficulty in general? See{" "}
          <Link href="/blog/easy-vs-moderate-himachal-treks">easy vs moderate Himachal treks</Link>.
        </p>
      </div>

      <div className="blog-cta">
        <h2>We run both, from Delhi</h2>
        <p>
          Small group weekend trips with transport, camping, meals and a captain sorted. Tell us
          which one calls you.
        </p>
        <Link href="/tours">See trek dates</Link>
      </div>

      <section className="blog-faq" id="faq" aria-labelledby="faq-h">
        <h2 id="faq-h">Frequently asked questions</h2>
        {PAGE_FAQ.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <section className="blog-related" aria-labelledby="rr">
        <h2 id="rr">Keep reading</h2>
        <ul>
          <li>
            <Link href="/blog/triund-trek-guide">Triund trek guide</Link>, the full breakdown.
          </li>
          <li>
            <Link href="/blog/kheerganga-trek-from-kasol">Kheerganga trek from Kasol</Link>, route,
            hot spring and tips.
          </li>
          <li>
            <Link href="/blog/best-weekend-treks-from-delhi">Best weekend treks from Delhi</Link>,
            where both rank.
          </li>
          <li>
            <Link href="/blog/easy-vs-moderate-himachal-treks">Easy vs moderate treks</Link>, pick
            by fitness.
          </li>
        </ul>
      </section>
    </>
  );
}
