import Link from "next/link";
import BlogDecisionHero from "@/components/blog/blog-decision-hero";
import BlogInteractivePicker from "@/components/blog/blog-interactive-picker";

const PAGE_FAQ = [
  {
    question: "What makes a Himachal trek moderate instead of easy?",
    answer:
      "Three things: distance, total ascent and altitude, plus how many hours a day you walk. An easy trek is roughly under 8 km a day with gentle climbing. A moderate one runs 10 to 16 km with a sustained climb or real height, near or above 3,000 m.",
  },
  {
    question: "I am not very fit. Which Himachal trek should I start with?",
    answer:
      "Start easy. Triund or a short weekend trek gives you Himalayan views without a punishing climb. Do one, see how your legs feel, then step up to a moderate trek like Kheerganga or Kareri Lake.",
  },
  {
    question: "Are easy treks boring compared to moderate ones?",
    answer:
      "No. Views are not tied to difficulty. Triund's ridge is as striking as much harder treks. Pick by what your legs can handle, not by which photo looks toughest.",
  },
  {
    question: "How do I train for a moderate trek?",
    answer:
      "Walk regularly, climb stairs without stopping, and build up your time on your feet. The best training is doing one easy trek first, then a moderate one.",
  },
];

const FITNESS_QUESTIONS = [
  {
    question: "1. Flights of stairs you can climb without stopping?",
    options: [
      { label: "Under 2", points: 0 },
      { label: "2 to 5", points: 1 },
      { label: "5 or more", points: 2 },
    ],
  },
  {
    question: "2. Have you trekked before?",
    options: [
      { label: "Never", points: 0 },
      { label: "Once or twice", points: 1 },
      { label: "Regularly", points: 2 },
    ],
  },
  {
    question: "3. How many days do you have?",
    options: [
      { label: "1 day", points: 0 },
      { label: "2 days", points: 1 },
      { label: "3 or more", points: 2 },
    ],
  },
];

export default function EasyVsModerateHimachalTreksArticle() {
  return (
    <>
      <p className="blog-eyebrow">Decision Guide · Fitness</p>
      <h1>
        Easy vs moderate Himachal treks: pick by <em>fitness</em>, not by photos
      </h1>

      <div className="blog-meta">
        <span>
          <strong>Nirvana Treks &amp; Tours</strong>
        </span>
        <span className="dot" aria-hidden="true" />
        <span>Updated 19 June 2026</span>
        <span className="dot" aria-hidden="true" />
        <span>7 min read</span>
      </div>

      <BlogDecisionHero variant="easy-vs-moderate" />

      <div className="blog-body">
        <div className="blog-verdict">
          <p className="blog-verdict-tag">Read this first</p>
          <p>
            A pretty reel does not tell you how a trek feels at hour five. An &quot;easy&quot; lake
            can still be a 13 km day. Choose by what your legs can actually do, not by how the photo
            looks.
          </p>
          <div className="blog-verdict-pills">
            <span className="blog-verdict-pill">
              <b>Easy:</b> short, gentle, beginner
            </span>
            <span className="blog-verdict-pill">
              <b>Moderate:</b> longer, real climb or altitude
            </span>
          </div>
        </div>

        <BlogInteractivePicker mode="fitness" questions={FITNESS_QUESTIONS} />

        <h2>What each tier actually demands</h2>
        <div className="blog-pickcards">
          <div className="blog-pickcard a">
            <h3>Easy treks</h3>
            <ul>
              <li>Under 8 km a day, gentle gradient</li>
              <li>Under ~600 m of climbing</li>
              <li>3 to 5 hours of walking</li>
              <li>No real altitude worries</li>
              <li>
                <b>Try:</b>{" "}
                <Link href="/blog/triund-trek-guide">Triund</Link>, short{" "}
                <Link href="/blog/best-weekend-treks-from-delhi">weekend treks</Link>,{" "}
                <Link href="/blog/2-day-treks-near-delhi-for-first-timers">first-timer routes</Link>
              </li>
            </ul>
          </div>
          <div className="blog-pickcard b">
            <h3>Moderate treks</h3>
            <ul>
              <li>10 to 16 km, sustained climbing</li>
              <li>600 to 1,500 m of ascent</li>
              <li>5 to 8 hours of walking</li>
              <li>Altitude near or above 3,000 m</li>
              <li>
                <b>Try:</b>{" "}
                <Link href="/blog/kheerganga-trek-from-kasol">Kheerganga</Link>,{" "}
                <Link href="/blog/kareri-lake-trek">Kareri Lake</Link>,{" "}
                <Link href="/blog/yulla-kanda-trek">Yulla Kanda</Link>
              </li>
            </ul>
          </div>
        </div>

        <h2>Same region, very different days</h2>
        <p>
          Here is how a classic easy trek and a moderate one compare on the things that actually
          tire you out.
        </p>
        <div className="blog-metrics">
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
              <b>Kareri Lake</b>
              <div className="blog-bar-track">
                <i style={{ width: "75%" }} />
              </div>
              <span>~13 km</span>
            </div>
          </div>
          <div className="blog-metric">
            <div className="blog-metric-name">Total ascent</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "48%" }} />
              </div>
              <span>~770 m</span>
            </div>
            <div className="blog-bar b">
              <b>Kareri Lake</b>
              <div className="blog-bar-track">
                <i style={{ width: "66%" }} />
              </div>
              <span>~950 m</span>
            </div>
          </div>
          <div className="blog-metric">
            <div className="blog-metric-name">Hours walking up</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "55%" }} />
              </div>
              <span>3–4 hrs</span>
            </div>
            <div className="blog-bar b">
              <b>Kareri Lake</b>
              <div className="blog-bar-track">
                <i style={{ width: "80%" }} />
              </div>
              <span>5–7 hrs</span>
            </div>
          </div>
          <div className="blog-metric">
            <div className="blog-metric-name">Altitude</div>
            <div className="blog-bar a">
              <b>Triund</b>
              <div className="blog-bar-track">
                <i style={{ width: "72%" }} />
              </div>
              <span>~2,850 m</span>
            </div>
            <div className="blog-bar b">
              <b>Kareri Lake</b>
              <div className="blog-bar-track">
                <i style={{ width: "75%" }} />
              </div>
              <span>~2,934 m</span>
            </div>
          </div>
        </div>

        <div className="blog-note">
          <b>The reality check.</b> Difficulty is distance plus ascent plus altitude plus hours on
          your feet. It has nothing to do with how dramatic the view is. Some of the easiest treks
          have the best skylines.
        </div>

        <div className="blog-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col" className="col-a">Easy</th>
                <th scope="col" className="col-b">Moderate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Distance per day</td>
                <td>Under ~8 km</td>
                <td>10 to 16 km</td>
              </tr>
              <tr>
                <td>Total ascent</td>
                <td>Under ~600 m</td>
                <td>600 to 1,500 m</td>
              </tr>
              <tr>
                <td>Hours walking</td>
                <td>3 to 5</td>
                <td>5 to 8</td>
              </tr>
              <tr>
                <td>Altitude</td>
                <td>Usually under 3,000 m</td>
                <td>Near or above 3,000 m</td>
              </tr>
              <tr>
                <td>Who it suits</td>
                <td>First-timers, light fitness</td>
                <td>One trek done, decent fitness</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Triund, weekend treks</td>
                <td>Kheerganga, Kareri, Yulla Kanda</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Our take</h2>
        <p>
          If you are unsure, go one tier below your ego. Do an easy trek well, enjoy it, and you
          will know exactly what your body is ready for next. Trekking is a ladder, not a leap.
          Build up and every trek stays fun instead of becoming a slog.
        </p>
      </div>

      <div className="blog-cta">
        <h2>Tell us your fitness, we will match the trek</h2>
        <p>
          Not sure where you land? Message us and we will suggest the right trek for your legs and
          your weekend.
        </p>
        <Link href="/tours">Browse treks by difficulty</Link>
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
            <Link href="/blog/2-day-treks-near-delhi-for-first-timers">2-day treks for first-timers</Link>
            , where to begin.
          </li>
          <li>
            <Link href="/blog/triund-vs-kheerganga">Triund vs Kheerganga</Link>, an easy vs
            moderate face-off.
          </li>
          <li>
            <Link href="/blog/best-weekend-treks-from-delhi">Best weekend treks from Delhi</Link>,
            sorted options.
          </li>
          <li>
            <Link href="/blog/kareri-lake-trek">Kareri Lake trek</Link>, a solid first moderate.
          </li>
        </ul>
      </section>
    </>
  );
}
