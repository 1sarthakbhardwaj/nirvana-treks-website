import Link from "next/link";
import BlogHeroImage from "@/components/blog/blog-hero-image";
import BlogPhotoFigure from "@/components/blog/blog-photo-figure";

const PAGE_FAQ = [
  {
    question: "How long is the Kheerganga trek from Kasol?",
    answer:
      "The trek is about 12 km one way from Barshaini, the road head reached by a 22 km drive from Kasol. The climb takes 4 to 6 hours depending on pace and which trail you take.",
  },
  {
    question: "How difficult is the Kheerganga trek?",
    answer:
      "Easy to moderate. The trail is clear and follows the river for much of the way, with a steeper final section. Reasonably fit beginners manage it well, though it is longer than Triund.",
  },
  {
    question: "Can everyone use the Kheerganga hot springs?",
    answer:
      "There is a natural hot spring at the top with bathing areas, traditionally with separate sections for men and women. Facilities and access rules have changed over the years, so respect local arrangements and signage when you arrive.",
  },
  {
    question: "Can you camp at Kheerganga?",
    answer:
      "Yes, there are tented camps in the meadow area. Authorities have regulated camping near the top in the past, so go with an operator who uses a designated camping area and follows current rules.",
  },
  {
    question: "What is the best time for the Kheerganga trek?",
    answer:
      "April to June and September to November are best. Avoid peak monsoon in July and August, when the Parvati Valley is prone to landslides, and deep winter, when snow can block the upper trail.",
  },
];

export default function KheergangaTrekFromKasolArticle() {
  return (
    <>
      <p className="blog-eyebrow">Trek Guides · Parvati Valley</p>
      <h1>
        Kheerganga Trek From Kasol: Route, Hot Springs &amp; <em>Camping</em>
      </h1>

      <div className="blog-meta">
        <span>
          <strong>Nirvana Treks &amp; Tours</strong>
        </span>
        <span className="dot" aria-hidden="true" />
        <span>Updated 17 June 2026</span>
        <span className="dot" aria-hidden="true" />
        <span>11 min read</span>
      </div>

      <BlogHeroImage
        src="/blog/kheerganga.jpg"
        alt="The Kheerganga hot spring meadow with steam rising, pine forest and snow peaks of the Parvati Valley"
        priority
        caption={
          <>
            Climb a whole valley, then sink into a hot spring at the top.{" "}
            <span>Kheerganga earns its soak.</span>
          </>
        }
      />

      <div className="blog-body">
        <p className="blog-lead">
          Most treks reward you with a view. Kheerganga rewards you with a hot bath.
          You climb the Parvati Valley from Barshaini, past waterfalls and pine, to a
          high meadow with a natural sulphur hot spring steaming at the top. After a
          half-day climb, easing into hot water with snow peaks in front of you is hard
          to beat. This is the complete Kheerganga trek guide from Kasol: the route, the
          hot springs, camping, and everything else you need.
        </p>

        <div className="blog-facts">
          <div>
            <b>Base</b>
            <span>Kasol / Barshaini</span>
          </div>
          <div>
            <b>Top altitude</b>
            <span>~2,960 m</span>
          </div>
          <div>
            <b>Trek distance</b>
            <span>~12 km one way</span>
          </div>
          <div>
            <b>Difficulty</b>
            <span>Easy to moderate</span>
          </div>
          <div>
            <b>Duration</b>
            <span>2 days, 1 night</span>
          </div>
          <div>
            <b>Best season</b>
            <span>Apr–Jun, Sep–Nov</span>
          </div>
        </div>

        <nav className="blog-toc" aria-label="Table of contents">
          <h2>In this guide</h2>
          <ol>
            <li><a href="#overview">The trek in brief</a></li>
            <li><a href="#route">The route from Barshaini</a></li>
            <li><a href="#springs">The hot springs</a></li>
            <li><a href="#camp">Camping at Kheerganga</a></li>
            <li><a href="#difficulty">Difficulty and timing</a></li>
            <li><a href="#season">Best time to go</a></li>
            <li><a href="#cost">What it costs</a></li>
            <li><a href="#reach">How to reach</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ol>
        </nav>

        <h2 id="overview">The trek in brief</h2>
        <p>
          Kheerganga sits at the head of the{" "}
          <a href="https://en.wikipedia.org/wiki/Parvati_Valley" target="_blank" rel="noopener noreferrer">
            Parvati Valley
          </a>
          , at about 2,960 metres. The base for the trek is Kasol, from where you drive
          to the road head at Barshaini and start walking. Local legend ties the spot to
          Shiva and his son Kartikeya, said to have meditated here, and the hot spring
          has drawn pilgrims and trekkers for generations. The walk is a steady climb
          beside the river, which makes it one of the most rewarding easy-to-moderate
          treks in Himachal.
        </p>

        <BlogPhotoFigure
          src="/blog/kheerganga-2.jpg"
          alt="The Parvati Valley trail to Kheerganga, climbing past pine forest and waterfalls"
          caption="The climb up the Parvati Valley to the Kheerganga hot spring."
        />

        <h2 id="route">The route from Barshaini</h2>
        <p>
          The trek starts at Barshaini, the road head about 22 km from Kasol via
          Manikaran. From there, two trails climb to Kheerganga:
        </p>
        <div className="blog-step-row">
          <div className="n">A</div>
          <div>
            <h3>Via Nakthan and Rudra Nag (recommended)</h3>
            <p>
              The classic route. It follows the Parvati river through Nakthan village
              and pine forest, passing the Rudra Nag waterfall. Longer but gentler and
              more scenic, and the one we use.
            </p>
          </div>
        </div>
        <div className="blog-step-row">
          <div className="n">B</div>
          <div>
            <h3>Via Kalga</h3>
            <p>
              The shorter alternative through Kalga village. Steeper in places and less
              shaded. Some trekkers go up one way and down the other to see both.
            </p>
          </div>
        </div>
        <p>
          Whichever you choose, the final stretch is the steepest, a sustained climb up
          the valley before the trail opens into the Kheerganga meadow with its hot
          spring. The full climb is about 12 km one way and takes most groups 4 to 6
          hours.
        </p>

        <div className="blog-book">
          <div>
            <h3>Skip the planning</h3>
            <p>From Delhi, with the Kasol leg, camp and hot spring all sorted.</p>
          </div>
          <Link href="/tours/kasol-trip">See the Kheerganga package</Link>
        </div>

        <h2 id="springs">The hot springs at the top</h2>
        <p>
          The hot spring is the whole point. A natural sulphur spring feeds a bathing
          area at the top, and there is a small temple alongside. Traditionally there
          are separate sections for men and women. Soaking tired legs in hot water at
          nearly 3,000 metres, with the valley falling away below, is the kind of reward
          that makes the climb worth it twice over.
        </p>
        <div className="blog-note">
          <b>Respect local arrangements.</b> The facilities and access rules at the
          spring have changed over the years as authorities have regulated the area.
          Follow the signage and local arrangements when you arrive, keep the water
          clean, and treat the temple with respect.
        </div>

        <h2 id="camp">Camping at Kheerganga</h2>
        <p>
          You spend the night in the Kheerganga meadow, in tented camps with simple
          food, usually dal, rice and the inevitable maggi and chai. There is no road,
          no rush, and a sky full of stars once the day-trippers leave. Mornings here,
          with mist on the meadow and the spring steaming, are the part people remember
          most.
        </p>
        <p>
          Authorities have regulated camping near the very top in the past, so the safest
          approach is to go with an operator who uses a designated camping area and
          follows current rules, rather than pitching wherever. Check current advisories
          on the{" "}
          <a href="https://himachaltourism.gov.in/" target="_blank" rel="noopener noreferrer">
            Himachal Pradesh Tourism
          </a>{" "}
          site before you travel.
        </p>

        <h2 id="difficulty">Difficulty and timing</h2>
        <p>
          Kheerganga is rated <strong>easy to moderate</strong>. The trail is clear and
          follows the river for much of the way, so it is not technically hard, but it is
          longer than Triund and the final climb asks something of your legs. A
          reasonably fit beginner manages it well, especially as a step up after a first
          easy trek. Plan on 4 to 6 hours up and 3 to 4 hours down.
        </p>

        <h2 id="season">Best time to go</h2>
        <ul>
          <li>
            <strong>April to June:</strong> the main season. Pleasant days, the forest
            in full green, comfortable for camping.
          </li>
          <li>
            <strong>July to August:</strong> peak monsoon. The Parvati Valley is prone
            to landslides and the trail gets slippery. Best avoided.
          </li>
          <li>
            <strong>September to November:</strong> clear post-monsoon air and thinner
            crowds. Excellent for the trek.
          </li>
          <li>
            <strong>December to March:</strong> snow can block the upper trail and the
            spring area gets very cold. Only with the right gear and guidance.
          </li>
        </ul>

        <h2 id="cost">What the Kheerganga trek costs</h2>
        <p>Like most treks, it splits into doing it yourself or going guided:</p>
        <div className="blog-table-scroll">
          <table>
            <caption>
              Indicative Kheerganga cost components per person. Prices vary by season,
              group size and operator. See the package page for current pricing.
            </caption>
            <thead>
              <tr>
                <th scope="col">Cost</th>
                <th scope="col">Doing it yourself</th>
                <th scope="col">Guided weekend trip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delhi to Kasol transport</td>
                <td>Bus, charged separately</td>
                <td>Often a Volvo add-on</td>
              </tr>
              <tr>
                <td>Kasol to Barshaini</td>
                <td>Local bus or shared cab</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Tent and sleeping bag</td>
                <td>Rented or carried</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Meals on the trek</td>
                <td>Pay as you go at camps</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Trek captain</td>
                <td>None</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Planning and logistics</td>
                <td>All on you</td>
                <td>Zero</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Independently, Kheerganga is affordable if you are comfortable arranging the
          Kasol leg, the Barshaini connection and your own gear. A guided weekend trip
          bundles all of that from Delhi and back, which is why most weekend travellers
          prefer it. For all-in pricing, see our{" "}
          <Link href="/tours/kasol-trip">Kheerganga trek package</Link>.
        </p>

        <h2 id="reach">How to reach Kheerganga</h2>
        <p>
          The journey is Delhi to Kasol, then Kasol to Barshaini, then the trek. Kasol
          is about 520 km from Delhi, usually an overnight bus of 12 to 14 hours. From
          Kasol it is a short drive of about 22 km to Barshaini via Manikaran, where the
          walk begins.
        </p>
        <p>
          For the full transport breakdown, read{" "}
          <Link href="/blog/how-to-reach-kasol-from-delhi">how to reach Kasol from Delhi</Link>
          , and for the bus ride itself, our honest take on the{" "}
          <Link href="/blog/overnight-volvo-to-himachal">overnight Volvo to Himachal</Link>
          . If you are deciding between treks, the{" "}
          <Link href="/blog/best-weekend-treks-from-delhi">best weekend treks from Delhi</Link>{" "}
          puts Kheerganga in context.
        </p>
      </div>

      <div className="blog-cta">
        <svg className="cta-topo" aria-hidden="true" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#C2912E" strokeWidth="1">
            <path d="M0 80 C 120 40,240 110,360 70 S 560 30,600 90" />
            <path d="M0 150 C 130 110,260 180,380 140 S 580 100,600 160" />
            <path d="M0 220 C 120 180,250 250,370 210 S 580 170,600 230" />
          </g>
        </svg>
        <h2>Trek to the Kheerganga hot springs</h2>
        <p>
          Our weekend trip from Delhi sorts the Kasol leg, the Barshaini connection, the
          camp and a trek captain. You just climb and soak.
        </p>
        <Link href="/tours/kasol-trip">See dates and pricing</Link>
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
            <Link href="/blog/how-to-reach-kasol-from-delhi">
              How to reach Kasol from Delhi
            </Link>
            , the full transport guide to the Parvati Valley.
          </li>
          <li>
            <Link href="/blog/best-weekend-treks-from-delhi">
              Best weekend treks from Delhi
            </Link>
            , where Kheerganga sits among the options.
          </li>
          <li>
            <Link href="/blog/triund-trek-guide">Triund trek guide</Link>, the other
            classic weekend trek, compared.
          </li>
          <li>
            <Link href="/tours/kasol-trip">Kheerganga trek package</Link>, dates,
            inclusions and current pricing.
          </li>
        </ul>
      </section>
    </>
  );
}
