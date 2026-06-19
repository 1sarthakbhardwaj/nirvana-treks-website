import Link from "next/link";
import BlogHeroImage from "@/components/blog/blog-hero-image";
import BlogPhotoFigure from "@/components/blog/blog-photo-figure";

const PAGE_FAQ = [
  {
    question: "How high is Churdhar peak?",
    answer:
      "Churdhar, also called Chur Chandni, is about 3,647 m (roughly 11,965 ft), the highest peak in the outer or lesser Himalayan range, in Sirmaur district of Himachal Pradesh.",
  },
  {
    question: "How difficult is the Churdhar trek?",
    answer:
      "Challenging. It is about 14 to 16 km one way from Nohradhar with over 1,700 m of height gain, usually done over two to three days. It suits experienced, fit trekkers rather than beginners.",
  },
  {
    question: "Do you need a permit for the Churdhar trek?",
    answer:
      "Churdhar lies within the Churdhar Wildlife Sanctuary, so entry permissions and forest-department rules can apply. Confirm current requirements before you go, or trek with an operator who arranges permits.",
  },
  {
    question: "What is the best time for the Churdhar trek?",
    answer:
      "April to June and September to November. The trek is closed or under heavy snow in deep winter, and monsoon brings slippery trails and leeches in the forest.",
  },
];

const ROUTE_STEPS = [
  {
    n: "1",
    title: "Base at Nohradhar",
    body: "The standard start is Nohradhar at about 1,900 m. Other approaches exist from Sarahan and Chopal, but Nohradhar is the most used.",
  },
  {
    n: "2",
    title: "Forest climb to Teesri",
    body: "A long, steady climb through thick sanctuary forest reaches the common halt at Teesri, where most groups camp on the first night.",
  },
  {
    n: "3",
    title: "Up to Jamnala",
    body: "Above the treeline the trail crosses meadows toward Jamnala, the high camp used for an early summit start.",
  },
  {
    n: "4",
    title: "Summit and the temple",
    body: "A final exposed push reaches the Churdhar summit at about 3,647 m and the Shirgul temple, with 360 degree views, before the long descent.",
  },
];

export default function ChurdharTrekGuideArticle() {
  return (
    <>
      <p className="blog-eyebrow">Trek Guides · Sirmaur</p>
      <h1>
        Churdhar Trek: <em>Highest Peak</em> in the Outer Himalayas
      </h1>

      <div className="blog-meta">
        <span>
          <strong>Nirvana Treks &amp; Tours</strong>
        </span>
        <span className="dot" aria-hidden="true" />
        <span>Updated 18 June 2026</span>
        <span className="dot" aria-hidden="true" />
        <span>11 min read</span>
      </div>

      <BlogHeroImage
        src="/blog/churdhar.webp"
        alt="Snow-capped Churdhar summit rising above green Himalayan ridges in Sirmaur district"
        priority
        caption={
          <>
            The highest peak in the outer Himalayas, with a temple at the top and
            views that run for hundreds of kilometres. <span>This is Churdhar.</span>
          </>
        }
      />

      <div className="blog-body">
        <p className="blog-lead">
          Most weekend treks give you a ridge. Churdhar gives you the whole horizon.
          At about 3,647 metres it is the highest peak in the outer Himalayan range,
          and from the top, on a clear day, the view runs from the plains near Shimla
          all the way to the snow giants of the greater Himalaya. This is the big one
          in our weekend list, a trek for legs that have earned it.
        </p>

        <div className="blog-facts">
          <div>
            <b>Region</b>
            <span>Sirmaur, Himachal</span>
          </div>
          <div>
            <b>Summit</b>
            <span>~3,647 m</span>
          </div>
          <div>
            <b>Distance</b>
            <span>~14–16 km one way</span>
          </div>
          <div>
            <b>Difficulty</b>
            <span>Challenging</span>
          </div>
          <div>
            <b>Duration</b>
            <span>2–3 days</span>
          </div>
          <div>
            <b>Best season</b>
            <span>Apr–Jun, Sep–Nov</span>
          </div>
        </div>

        <nav className="blog-toc" aria-label="Table of contents">
          <h2>In this guide</h2>
          <ol>
            <li><a href="#what">The highest of the outer Himalayas</a></li>
            <li><a href="#temple">The Shirgul temple at the top</a></li>
            <li><a href="#route">The route from Nohradhar</a></li>
            <li><a href="#hard">How hard is it</a></li>
            <li><a href="#season">Best season and permits</a></li>
            <li><a href="#cost">What it costs</a></li>
            <li><a href="#reach">How to reach Churdhar</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ol>
        </nav>

        <h2 id="what">The highest of the outer Himalayas</h2>
        <p>
          Churdhar, also known as Chur Chandni, the &quot;bangle of snow,&quot; stands
          in Sirmaur district of Himachal Pradesh, the high point of the outer or
          lesser Himalayan belt. Its summit sits inside the{" "}
          <strong>Churdhar Wildlife Sanctuary</strong>, home to monal pheasants and
          musk deer, and the climb passes through dense forest before breaking out onto
          open, windswept ridges. Because it stands apart from the higher ranges behind
          it, the summit view is enormous and uninterrupted, which is the whole reason
          people make the effort.
        </p>

        <p>
          The lower half of the climb is all forest: tall deodar and oak that keep the
          trail shaded and cool even in early summer, with the chance of spotting a
          monal pheasant breaking cover if you walk quietly. Higher up the trees thin
          out and the world opens, until you are on bare ridge with nothing between you
          and the wind. That contrast, deep forest to exposed summit in a single climb,
          is part of what makes Churdhar feel bigger than its altitude suggests.
        </p>

        <blockquote className="blog-pull">
          From the top, the plains, the Sutlej basin and the great Himalaya all line
          up at once. Few outer-range peaks give you that.
        </blockquote>

        <h2 id="temple">The Shirgul temple at the top</h2>
        <p>
          Near the summit stands a temple to Shirgul Maharaj, the local deity of the
          region, which draws pilgrims as well as trekkers through the season. The name
          Chur Chandni comes from the way snow rings the peak like a silver bangle.
          Reaching the temple after a long climb, with prayer flags snapping in the
          wind and the whole range laid out below, is the kind of summit moment that
          stays with you. Treat the shrine and the sanctuary with the respect they are
          due.
        </p>

        <BlogPhotoFigure
          src="/blog/churdhar-2.webp"
          alt="Prayer flags and the Shirgul temple near the Churdhar summit with the Himalaya beyond"
          caption="Prayer flags at the top, with the range laid out below."
        />

        <h2 id="route">The route from Nohradhar</h2>
        {ROUTE_STEPS.map((step) => (
          <div key={step.n} className="blog-step-row">
            <div className="n">{step.n}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
        <p>
          The full route climbs about 1,747 m over 16 km, from Nohradhar at 1,900 m
          through Teesri and Jamnala to the summit at 3,647 m.
        </p>

        <div className="blog-book">
          <div>
            <h3>Climb Churdhar with us</h3>
            <p>Camps, permits, meals and a captain who knows the route.</p>
          </div>
          <Link href="/tours/churdhar-trek">See the Churdhar package</Link>
        </div>

        <h2 id="hard">How hard is it</h2>
        <p>
          Be honest with yourself here: Churdhar is <strong>challenging</strong>. The
          climb is long, around 14 to 16 km one way, and the height gain from Nohradhar
          to the summit is well over 1,700 metres. It is best done over two to three
          days rather than rushed. There is nothing technical, but it demands real
          fitness, a head for long days, and some prior trekking under your belt. This
          is not a first trek. If you are still building up, our easier{" "}
          <Link href="/blog/best-weekend-treks-from-delhi">weekend treks from Delhi</Link>{" "}
          are the place to start.
        </p>

        <h2 id="season">Best season and permits</h2>
        <ul>
          <li>
            <strong>April to June:</strong> the main season, with patchy snow lingering
            high up early on. Clear, long days.
          </li>
          <li>
            <strong>July to August:</strong> monsoon. Slippery forest, leeches and
            clouded summits. Avoid.
          </li>
          <li>
            <strong>September to November:</strong> the clearest views of the year and
            stable weather, until the cold sets in.
          </li>
          <li>
            <strong>Deep winter:</strong> heavy snow closes the upper trek to all but
            experienced winter mountaineers.
          </li>
        </ul>
        <div className="blog-note">
          <b>Permits.</b> Churdhar lies within a wildlife sanctuary, so forest-department
          entry rules and permissions can apply. Confirm current requirements before you
          travel, or trek with an operator who handles permits. Check advisories on the{" "}
          <a href="https://himachaltourism.gov.in/" target="_blank" rel="noopener noreferrer">
            Himachal Pradesh Tourism
          </a>{" "}
          site.
        </div>

        <h2 id="cost">What it costs</h2>
        <p>
          As a longer, higher trek, Churdhar usually costs more than a one-night weekend
          climb, because it runs over two to three days with more camping, food and
          support. Independently it is affordable if you are experienced and
          self-sufficient, but the permits, the distance and the exposure make a guided
          trip the safer call here. For dates, inclusions and pricing, see our{" "}
          <Link href="/tours/churdhar-trek">Churdhar trek package</Link>.
        </p>

        <h2 id="reach">How to reach Churdhar</h2>
        <p>
          The base region around Nohradhar is roughly 400 km from Delhi, reached via
          Chandigarh and Solan toward Rajgarh, or via Shimla and Chopal. Most groups
          travel overnight and start the climb the next day. For the journey itself, our
          guide to the{" "}
          <Link href="/blog/overnight-volvo-to-himachal">overnight Volvo to Himachal</Link>{" "}
          covers the bus side, and the{" "}
          <Link href="/blog/best-weekend-treks-from-delhi">best weekend treks from Delhi</Link>{" "}
          shows where Churdhar sits among the harder options.
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
        <h2>Take on Churdhar with us</h2>
        <p>
          A guided climb to the highest peak in the outer Himalayas, with camps, permits
          and a captain who knows the route.
        </p>
        <Link href="/tours/churdhar-trek">See dates and pricing</Link>
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
            <Link href="/blog/best-weekend-treks-from-delhi">Best weekend treks from Delhi</Link>
            , where Churdhar ranks among the tougher options.
          </li>
          <li>
            <Link href="/blog/triund-trek-guide">Triund trek guide</Link>, an easier
            climb to train toward Churdhar.
          </li>
          <li>
            <Link href="/blog/kareri-lake-trek">Kareri Lake trek</Link>, a moderate step
            between easy and challenging.
          </li>
          <li>
            <Link href="/tours/churdhar-trek">Churdhar trek package</Link>, dates,
            inclusions and pricing.
          </li>
        </ul>
      </section>
    </>
  );
}
