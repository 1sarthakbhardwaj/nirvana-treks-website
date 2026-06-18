import Link from "next/link";

const PAGE_FAQ = [
  {
    question: "How long does the overnight Volvo from Delhi to Himachal take?",
    answer:
      "Most overnight Volvo routes take 12 to 16 hours. Dharamshala and Manali are usually 12 to 14 hours. You typically board in the evening and arrive the next morning, sleeping through the long highway stretch.",
  },
  {
    question: "Which seats are best on an overnight Volvo?",
    answer:
      "Seats in the front half are smoother and better if you get motion sick on winding roads. Avoid the very back row and seats directly over the wheels, which feel every bump. A window seat gives you something to lean against to sleep.",
  },
  {
    question: "Is the overnight Volvo cold?",
    answer:
      "Yes. The air conditioning runs cold through the night and blankets are not always provided or clean. Carry one warm layer in your day bag even in summer and you will sleep far better.",
  },
  {
    question: "Where do Volvo buses to Himachal leave from in Delhi?",
    answer:
      "Government buses leave from ISBT Kashmiri Gate, while many private Volvo operators board from Majnu ka Tila and other fixed pickup points. Always confirm your exact boarding point, not just the city, when you book.",
  },
];

const TRUTHS = [
  {
    title: "It gets genuinely cold",
    body: "The AC runs hard all night and blankets are not always there or clean. Carry one warm layer in your day bag, even in peak summer. This single thing fixes most bad bus nights.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M5 6l14 12M19 6L5 18" stroke="#8B5E2B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "The last stretch winds hard",
    body: "After Mandi the road is all curves. If you are prone to motion sickness, sit in the front half, take a tablet before boarding, and eat light at the dinner stop. A heavy meal plus hairpins is a bad mix.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 16c3 0 3-8 6-8s3 8 6 8 3-8 6-8" stroke="#8B5E2B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '"Volvo" doesn\'t always mean Volvo',
    body: 'The word has become shorthand for any AC coach. You might get a Volvo, a Scania, or a generic multi-axle bus. Comfort varies. Check the operator and bus type when you book, not the label.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="11" rx="2" stroke="#8B5E2B" strokeWidth="2" />
        <line x1="3" y1="11" x2="21" y2="11" stroke="#8B5E2B" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "You arrive very early",
    body: "Drop-offs are often 6 to 8 AM, well before hotel check-in. Plan a breakfast spot, a place to stash bags, or a trek that starts the same morning, so you are not stranded with luggage at dawn.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#8B5E2B" strokeWidth="2" />
        <path d="M12 7v5l3 2" stroke="#C2912E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Stops are few and quick",
    body: "Past the dinner halt, breaks are short and unpredictable, and clean toilets are not guaranteed. Carry water and snacks, and use the Murthal stop properly rather than waiting for a better one that may not come.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 21V8l7-5 7 5v13" stroke="#8B5E2B" strokeWidth="2" strokeLinejoin="round" />
        <rect x="10" y="13" width="4" height="8" stroke="#C2912E" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Delays are normal in season",
    body: "Weekend traffic, weather and the odd landslide can add hours, especially in monsoon. Build a buffer into your plans and never schedule a trek start with zero slack after a long bus night.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l9 16H3z" stroke="#8B5E2B" strokeWidth="2" strokeLinejoin="round" />
        <line x1="12" y1="10" x2="12" y2="14" stroke="#C2912E" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill="#C2912E" />
      </svg>
    ),
  },
];

export default function OvernightVolvoToHimachalArticle() {
  return (
    <>
      <p className="blog-eyebrow">Travel Guides · Getting There</p>
      <h1>
        Overnight Volvo to Himachal: <em>What the Trek Brochures Don&apos;t Tell You</em>
      </h1>

      <div className="blog-meta">
        <span>
          <strong>Nirvana Treks &amp; Tours</strong>
        </span>
        <span className="dot" aria-hidden="true" />
        <span>Updated 17 June 2026</span>
        <span className="dot" aria-hidden="true" />
        <span>9 min read</span>
      </div>

      <div className="blog-hero-scene" style={{ background: "#160F07" }}>
        <svg
          className="scene"
          viewBox="0 0 800 340"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Night illustration of an overnight Volvo bus climbing a winding mountain road towards Himachal, under a gold moon and pine silhouettes"
        >
          <defs>
            <linearGradient id="vol-night" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#140D06" />
              <stop offset="0.6" stopColor="#241810" />
              <stop offset="1" stopColor="#3A2A18" />
            </linearGradient>
            <linearGradient id="vol-beam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#F3D38A" stopOpacity="0.7" />
              <stop offset="1" stopColor="#F3D38A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="800" height="340" fill="url(#vol-night)" />
          <g fill="#F4EDE2">
            <circle cx="80" cy="40" r="1.6" opacity="0.8" />
            <circle cx="150" cy="70" r="1.2" opacity="0.6" />
            <circle cx="220" cy="34" r="1.4" opacity="0.7" />
            <circle cx="380" cy="30" r="1.6" opacity="0.8" />
            <circle cx="470" cy="56" r="1.2" opacity="0.6" />
          </g>
          <circle cx="640" cy="70" r="46" fill="#E9C078" opacity="0.25" />
          <circle cx="640" cy="70" r="28" fill="#EBCB7E" />
          <path d="M0 200 L120 150 L250 195 L380 145 L520 195 L660 150 L800 190 L800 340 L0 340 Z" fill="#1C140C" />
          <g fill="#15100A">
            <path d="M250 195 l8 -22 l8 22 Z" />
            <path d="M380 145 l8 -24 l8 24 Z" />
            <path d="M520 195 l8 -22 l8 22 Z" />
          </g>
          <path d="M0 250 L180 210 L360 252 L540 208 L720 252 L800 232 L800 340 L0 340 Z" fill="#150E07" />
          <path d="M360 340 L440 340 L360 250 L405 248 L470 340 Z" fill="#4A3A28" />
          <path d="M392 340 L408 340 L388 252 L398 252 Z" fill="#C2912E" opacity="0.75" />
          <g transform="translate(348 286)">
            <rect x="0" y="0" width="92" height="40" rx="8" fill="#8B5E2B" />
            <rect x="6" y="7" width="70" height="15" rx="3" fill="#E6C268" />
            <rect x="80" y="9" width="8" height="12" rx="2" fill="#3A2A18" />
            <circle cx="20" cy="42" r="6" fill="#241810" />
            <circle cx="72" cy="42" r="6" fill="#241810" />
            <path d="M92 18 L150 4 L150 40 L92 30 Z" fill="url(#vol-beam)" />
            <circle cx="90" cy="20" r="3" fill="#F3D38A" />
            <circle cx="90" cy="28" r="3" fill="#F3D38A" />
          </g>
        </svg>
        <div className="scrim" style={{ background: "linear-gradient(to top, rgba(10,7,3,.55), rgba(10,7,3,0) 55%)" }} />
        <p className="blog-hero-tag">
          Twelve hours, one cold night, and a sunrise you did not pay extra for.{" "}
          <span>Here is the honest version.</span>
        </p>
      </div>

      <div className="blog-body">
        <p className="blog-lead">
          The overnight Volvo is how most of Himachal gets reached. The brochure makes
          it sound like a detail: &quot;Volvo from Delhi, arrive next morning.&quot; What
          it leaves out is everything that decides whether you start your trek rested or
          wrecked. We have done this ride hundreds of times. Here is the honest version,
          so your first overnight bus is not your worst one.
        </p>

        <p>
          This applies to almost every Himachal route, whether you are heading to Manali,
          Dharamshala, or getting to the Parvati Valley. If Kasol is your destination,
          pair this with our guide on{" "}
          <Link href="/blog/how-to-reach-kasol-from-delhi">
            how to reach Kasol from Delhi
          </Link>
          .
        </p>

        <nav className="blog-toc" aria-label="Table of contents">
          <h2>In this guide</h2>
          <ol>
            <li><a href="#board">Where you actually board</a></li>
            <li><a href="#route">The route and real timeline</a></li>
            <li><a href="#truths">What brochures don&apos;t tell you</a></li>
            <li><a href="#seats">How to pick your seat</a></li>
            <li><a href="#sleep">How to actually sleep</a></li>
            <li><a href="#book">Booking it the smart way</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ol>
        </nav>

        <h2 id="board">Where you actually board</h2>
        <p>
          &quot;From Delhi&quot; hides a lot. Government buses leave from{" "}
          <strong>ISBT Kashmiri Gate</strong>. Many private Volvo operators board from{" "}
          <strong>Majnu ka Tila</strong> and a handful of other fixed pickup points
          scattered across the city, and some only do a roadside pickup at a marked spot
          with no counter.
        </p>
        <p>
          The mistake first-timers make is assuming a single station. Confirm your{" "}
          <strong>exact boarding point</strong> and reach it 20 to 30 minutes early. A
          missed Volvo at 6 PM means there is rarely another that night.
        </p>

        <h2 id="route">The route and the real timeline</h2>
        <p>
          The road climbs the whole way. You leave the plains, hit the highway, and
          somewhere after Mandi the smooth driving ends and the mountains begin. Here is
          roughly how a Manali-bound night plays out:
        </p>

        <figure className="blog-figure">
          <svg
            className="frame"
            viewBox="0 0 800 220"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Route map of the overnight Volvo from Delhi to Himachal, passing Murthal, Chandigarh, Bilaspur, Mandi and Bhuntar on the way to Manali"
          >
            <path
              d="M60 120 C 180 80, 280 160, 400 110 S 620 70, 740 120"
              fill="none"
              stroke="#8B5E2B"
              strokeWidth="3"
              strokeDasharray="2 9"
              strokeLinecap="round"
            />
            <circle cx="60" cy="120" r="7" fill="#6E4A20" />
            <circle cx="190" cy="104" r="5.5" fill="#C2912E" />
            <circle cx="320" cy="132" r="5.5" fill="#C2912E" />
            <circle cx="450" cy="104" r="5.5" fill="#C2912E" />
            <circle cx="580" cy="96" r="5.5" fill="#C2912E" />
            <circle cx="670" cy="108" r="5.5" fill="#C2912E" />
            <circle cx="740" cy="120" r="8" fill="#8B5E2B" />
            <path d="M726 120 l14 -22 l14 22 Z" fill="#6E4A20" />
            <g fill="#111111" fontSize="13" fontWeight="600" textAnchor="middle">
              <text x="60" y="150">Delhi</text>
              <text x="190" y="92">Murthal</text>
              <text x="320" y="156">Chandigarh</text>
              <text x="450" y="92">Bilaspur</text>
              <text x="580" y="84">Mandi</text>
              <text x="670" y="132">Bhuntar</text>
              <text x="742" y="150">Manali</text>
            </g>
            <g fill="#6B6B6B" fontSize="11" textAnchor="middle">
              <text x="60" y="166">~6 PM start</text>
              <text x="190" y="78">dinner stop</text>
              <text x="320" y="170">~midnight</text>
              <text x="580" y="70">roads narrow</text>
              <text x="742" y="166">~7 AM</text>
            </g>
          </svg>
          <figcaption>
            The overnight Volvo route from Delhi to Himachal. The smooth half ends around
            Mandi; the climb begins after.
          </figcaption>
        </figure>

        <ul>
          <li><strong>~6 PM, Delhi.</strong> Board and settle. The highway out is fast and flat.</li>
          <li><strong>~8 to 9 PM, Murthal.</strong> The one proper dinner stop on most routes. Eat here, because the next real break is hours away.</li>
          <li><strong>~Midnight, Chandigarh.</strong> Some buses pick up more passengers. You are still on good roads.</li>
          <li><strong>After Mandi.</strong> This is the turn. The road narrows, the curves stack up, and the last three to four hours are the ones that decide how you feel on arrival.</li>
          <li><strong>~6 to 8 AM, arrival.</strong> You are dropped early, often before any hotel will check you in.</li>
        </ul>

        <h2 id="truths">What the brochures don&apos;t tell you</h2>
        <div className="blog-truths">
          {TRUTHS.map((item) => (
            <div key={item.title} className="blog-truth">
              <div className="ic" aria-hidden="true">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 id="seats">How to pick your seat</h2>
        <p>
          Seat choice changes the whole night. The front half rides smoother, the back row
          and the seats over the wheels feel every bump, and a window gives you something
          to lean on. Here is the simple version:
        </p>

        <figure className="blog-figure center">
          <svg
            className="frame"
            viewBox="0 0 280 420"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Top-down seat map of a Volvo bus showing smoother front seats, average middle seats and bumpier rear and over-wheel seats"
          >
            <rect x="40" y="20" width="200" height="380" rx="40" fill="#FAF7F2" stroke="#6E4A20" strokeWidth="2" />
            <path d="M70 40 q 70 -22 140 0" fill="none" stroke="#6E4A20" strokeWidth="2" />
            <rect x="170" y="46" width="34" height="22" rx="4" fill="#3A2A18" />
            <line x1="140" y1="90" x2="140" y2="380" stroke="#ECE3D3" strokeWidth="2" strokeDasharray="3 6" />
            <g fill="#C2912E">
              <rect x="56" y="96" width="34" height="26" rx="6" />
              <rect x="96" y="96" width="34" height="26" rx="6" />
              <rect x="150" y="96" width="34" height="26" rx="6" />
              <rect x="190" y="96" width="34" height="26" rx="6" />
              <rect x="56" y="130" width="34" height="26" rx="6" />
              <rect x="96" y="130" width="34" height="26" rx="6" />
              <rect x="150" y="130" width="34" height="26" rx="6" />
              <rect x="190" y="130" width="34" height="26" rx="6" />
            </g>
            <g fill="#C9B89A">
              <rect x="56" y="178" width="34" height="26" rx="6" />
              <rect x="96" y="178" width="34" height="26" rx="6" />
              <rect x="150" y="178" width="34" height="26" rx="6" />
              <rect x="190" y="178" width="34" height="26" rx="6" />
              <rect x="56" y="212" width="34" height="26" rx="6" />
              <rect x="96" y="212" width="34" height="26" rx="6" />
              <rect x="150" y="212" width="34" height="26" rx="6" />
              <rect x="190" y="212" width="34" height="26" rx="6" />
            </g>
            <g fill="#8B5E2B">
              <rect x="56" y="262" width="34" height="26" rx="6" />
              <rect x="96" y="262" width="34" height="26" rx="6" />
              <rect x="150" y="262" width="34" height="26" rx="6" />
              <rect x="190" y="262" width="34" height="26" rx="6" />
              <rect x="56" y="312" width="34" height="26" rx="6" />
              <rect x="96" y="312" width="34" height="26" rx="6" />
              <rect x="150" y="312" width="34" height="26" rx="6" />
              <rect x="190" y="312" width="34" height="26" rx="6" />
              <rect x="56" y="348" width="168" height="26" rx="6" />
            </g>
            <circle cx="34" cy="275" r="6" fill="#241810" />
            <circle cx="246" cy="275" r="6" fill="#241810" />
          </svg>
          <figcaption>
            Rough seat guide. Gold = smoother front seats, tan = average, rust = bumpier
            over-wheel and back rows.
          </figcaption>
        </figure>

        <ul>
          <li><strong>Best:</strong> front half, window seat. Smoothest ride, something to lean on.</li>
          <li><strong>Fine:</strong> the middle rows. A reasonable balance of ride and recline.</li>
          <li><strong>Avoid:</strong> the very back row and seats right over the rear wheels. They bounce the most on the winding stretch.</li>
        </ul>

        <h2 id="sleep">How to actually sleep on the bus</h2>
        <p>Sleep is the whole point of the overnight. Get it right and you arrive ready to trek:</p>
        <ul>
          <li>Carry a warm layer and use your day bag or a small neck pillow for support.</li>
          <li>Eat light at Murthal. A full stomach plus mountain curves keeps you awake.</li>
          <li>Take a motion-sickness tablet before boarding if you are prone to it; many also make you drowsy, which helps.</li>
          <li>Charge your phone and power bank fully. Not every seat has a working socket.</li>
          <li>Earplugs and an eye mask do more than you would expect against horns and headlights.</li>
        </ul>

        <h2 id="book">Booking it the smart way</h2>
        <p>
          Book early, especially for weekends in season, and lock your return before you
          leave so you are not stranded on a Sunday evening. Your main options:
        </p>
        <ul>
          <li>
            <strong>Government services</strong> via the official{" "}
            <a href="https://online.hrtchp.com/" target="_blank" rel="noopener noreferrer">
              HRTC online portal
            </a>
            , including the AC Himsuta Volvo coaches.
          </li>
          <li>
            <strong>HPTDC luxury coaches</strong> on the state tourism site,{" "}
            <a href="https://hptdc.in/" target="_blank" rel="noopener noreferrer">
              HPTDC
            </a>
            , which runs its own Volvo and Deluxe fleet.
          </li>
          <li>
            <strong>Private operators</strong> compared on a platform like{" "}
            <a href="https://www.redbus.in/" target="_blank" rel="noopener noreferrer">
              redBus
            </a>
            , where you can see the bus type and reviews before paying.
          </li>
        </ul>
        <div className="blog-note">
          <b>The easiest route of all.</b> On a guided Nirvana trip we handle the bus,
          the boarding point and the timing for you, so the first thing you think about is
          the trail, not the logistics. See our{" "}
          <Link href="/tours">weekend treks from Delhi</Link> for trips with transport
          sorted.
        </div>
      </div>

      <div className="blog-cta">
        <svg className="cta-topo" aria-hidden="true" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#C2912E" strokeWidth="1">
            <path d="M0 80 C 120 40,240 110,360 70 S 560 30,600 90" />
            <path d="M0 150 C 130 110,260 180,380 140 S 580 100,600 160" />
            <path d="M0 220 C 120 180,250 250,370 210 S 580 170,600 230" />
          </g>
        </svg>
        <h2>Let us handle the bus</h2>
        <p>
          Our weekend treks from Delhi include the overnight transport, the right boarding
          point and the timing dialled in, so you arrive ready to walk.
        </p>
        <Link href="/tours">See trips with transport</Link>
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
            , the Parvati Valley version of this journey.
          </li>
          <li>
            <Link href="/blog/best-weekend-treks-from-delhi">
              Best weekend treks from Delhi
            </Link>
            , where the overnight bus can actually take you.
          </li>
          <li>
            <Link href="/blog/2-day-treks-near-delhi-for-first-timers">
              2-day treks for first-timers
            </Link>
            , the easiest trails to start with.
          </li>
          <li>
            <Link href="/contact">Plan a trip with transport sorted</Link>, we handle the
            bus end to end.
          </li>
        </ul>
      </section>

      <div className="blog-endcap">
        <div className="ava" aria-hidden="true">N</div>
        <div>
          <b>Nirvana Treks &amp; Tours</b>
          <p>
            We run small group treks across Himachal Pradesh for travellers from Delhi
            NCR. Real captains, light footprints, no rushing.
          </p>
        </div>
      </div>
    </>
  );
}
