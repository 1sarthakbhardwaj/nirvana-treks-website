type Variant = "packing" | "fitness" | "layers";

type Props = {
  variant: Variant;
};

export default function BlogPracticalHero({ variant }: Props) {
  if (variant === "packing") {
    return (
      <div
        className="blog-wide-hero"
        aria-label="A flat-lay of trekking gear: backpack, boots, jacket, water bottle, cap, sunglasses, headlamp and first-aid kit"
      >
        <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <rect width="1000" height="340" fill="#EAF1EA" />
          <g fill="none" stroke="#2E7D4F" strokeWidth="1.1" opacity="0.12">
            <path d="M0 90 C 160 50,320 130,480 90 S 800 40,1000 100" />
            <path d="M0 170 C 180 130,340 210,520 170 S 820 120,1000 180" />
            <path d="M0 250 C 160 210,360 290,540 250 S 840 200,1000 260" />
          </g>
          <g transform="translate(120 96)">
            <rect x="0" y="20" width="150" height="190" rx="26" fill="#2E7D4F" />
            <rect x="22" y="48" width="106" height="120" rx="16" fill="#256743" />
            <rect x="40" y="0" width="70" height="44" rx="18" fill="#215C3A" />
            <rect x="44" y="120" width="62" height="50" rx="10" fill="#6FB23F" />
            <path d="M14 30 q-22 70 6 168" fill="none" stroke="#C0633A" strokeWidth="11" strokeLinecap="round" />
            <path d="M136 30 q22 70 -6 168" fill="none" stroke="#C0633A" strokeWidth="11" strokeLinecap="round" />
          </g>
          <g transform="translate(720 60)">
            <path d="M0 40 L8 0 L40 0 L46 30 L92 44 L96 64 L0 64 Z" fill="#143A28" />
            <rect x="-2" y="62" width="100" height="12" rx="5" fill="#C0633A" />
            <g transform="translate(40 -8)">
              <path d="M0 48 L8 8 L40 8 L46 38 L92 52 L96 72 L0 72 Z" fill="#235C3E" />
              <rect x="-2" y="70" width="100" height="12" rx="5" fill="#C0633A" />
            </g>
          </g>
          <g transform="translate(800 170)">
            <path d="M30 0 L70 0 L100 24 L88 56 L74 46 L74 150 L26 150 L26 46 L12 56 L0 24 Z" fill="#6FB23F" />
            <path d="M50 0 L50 150" stroke="#3f7d24" strokeWidth="2.5" />
            <path d="M30 0 L50 18 L70 0" fill="#4d9130" />
          </g>
          <g transform="translate(470 120)">
            <rect x="0" y="20" width="48" height="120" rx="16" fill="#5B9BD0" />
            <rect x="12" y="4" width="24" height="22" rx="6" fill="#326a99" />
            <rect x="6" y="56" width="36" height="40" rx="8" fill="#86bcdc" opacity="0.7" />
          </g>
          <g transform="translate(540 250)">
            <path d="M0 24 Q40 -10 86 18 L92 30 Q44 14 6 34 Z" fill="#C0633A" />
            <path d="M0 24 Q-18 26 -30 36 L6 34 Z" fill="#9A4A2A" />
          </g>
          <g transform="translate(640 250)" fill="none" stroke="#143A28" strokeWidth="6">
            <rect x="0" y="0" width="34" height="22" rx="9" fill="#235C3E" />
            <rect x="46" y="0" width="34" height="22" rx="9" fill="#235C3E" />
            <path d="M34 8 L46 8" />
          </g>
          <g transform="translate(360 250)">
            <rect x="0" y="6" width="80" height="16" rx="8" fill="#16241C" />
            <rect x="30" y="0" width="26" height="28" rx="6" fill="#5E6B62" />
            <circle cx="43" cy="14" r="7" fill="#EAF3DC" />
          </g>
          <g transform="translate(250 250)">
            <rect x="0" y="0" width="56" height="44" rx="8" fill="#FAFCF8" stroke="#C0633A" strokeWidth="2.5" />
            <rect x="24" y="10" width="8" height="24" fill="#C0633A" />
            <rect x="16" y="18" width="24" height="8" fill="#C0633A" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === "fitness") {
    return (
      <div
        className="blog-wide-hero"
        aria-label="A dotted training path rising in three weekly steps up a mountain to a summit flag"
      >
        <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8FC1DA" />
              <stop offset="0.6" stopColor="#BEDEE2" />
              <stop offset="1" stopColor="#E6F1EC" />
            </linearGradient>
          </defs>
          <rect width="1000" height="340" fill="url(#fsky)" />
          <circle cx="170" cy="74" r="40" fill="#FCFFFE" opacity="0.85" />
          <path d="M0 160 L140 96 L240 150 L360 92 L480 152 L620 96 L760 152 L880 100 L1000 150 L1000 230 L0 230 Z" fill="#C5D7D1" opacity="0.8" />
          <path d="M120 340 L760 70 L1000 340 Z" fill="#357A4E" />
          <path d="M760 70 L1000 340 L840 340 Z" fill="#235C3E" />
          <path d="M700 110 L760 70 L824 116 L792 96 L760 120 L730 98 Z" fill="#FFFFFF" />
          <path
            d="M60 312 L260 286 L260 252 L470 230 L470 196 L660 168 L660 132 L758 78"
            fill="none"
            stroke="#C0633A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2 11"
          />
          <circle cx="160" cy="300" r="7" fill="#2E7D4F" stroke="#fff" strokeWidth="2.5" />
          <rect x="126" y="266" width="68" height="22" rx="11" fill="#143A28" />
          <text x="160" y="281" fontFamily="var(--font-manrope), sans-serif" fontSize="11" fontWeight="700" fill="#EAF3EC" textAnchor="middle">
            WEEK 1
          </text>
          <circle cx="370" cy="214" r="7" fill="#2E7D4F" stroke="#fff" strokeWidth="2.5" />
          <rect x="336" y="180" width="68" height="22" rx="11" fill="#143A28" />
          <text x="370" y="195" fontFamily="var(--font-manrope), sans-serif" fontSize="11" fontWeight="700" fill="#EAF3EC" textAnchor="middle">
            WEEK 2
          </text>
          <circle cx="560" cy="150" r="7" fill="#2E7D4F" stroke="#fff" strokeWidth="2.5" />
          <rect x="526" y="116" width="68" height="22" rx="11" fill="#143A28" />
          <text x="560" y="131" fontFamily="var(--font-manrope), sans-serif" fontSize="11" fontWeight="700" fill="#EAF3EC" textAnchor="middle">
            WEEK 3
          </text>
          <g transform="translate(758 78)">
            <line x1="0" y1="0" x2="0" y2="-30" stroke="#16241C" strokeWidth="3" />
            <path d="M0 -30 L26 -23 L0 -16 Z" fill="#C0633A" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div
      className="blog-wide-hero"
      aria-label="The trekking layering system shown as four garments: base layer, mid layer, insulation layer and waterproof shell"
    >
      <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="lsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9CCBE0" />
            <stop offset="1" stopColor="#E6F1EC" />
          </linearGradient>
        </defs>
        <rect width="1000" height="340" fill="url(#lsky)" />
        <path d="M0 210 L150 120 L260 185 L400 110 L540 190 L690 115 L820 190 L1000 130 L1000 280 L0 280 Z" fill="#C5D7D1" opacity="0.7" />
        <path d="M0 274 Q250 260 500 274 Q750 288 1000 274 L1000 340 L0 340 Z" fill="#2C6044" />
        <g transform="translate(110 78)">
          <path d="M26 0 L54 0 L80 18 L70 40 L58 32 L58 110 L22 110 L22 32 L10 40 L0 18 Z" fill="#6FB23F" />
        </g>
        <text x="150" y="234" fontFamily="var(--font-manrope), sans-serif" fontSize="14" fontWeight="700" fill="#143A28" textAnchor="middle">
          BASE
        </text>
        <text x="150" y="250" fontFamily="var(--font-manrope), sans-serif" fontSize="11.5" fill="#3a564a" textAnchor="middle">
          Wicks sweat
        </text>
        <g transform="translate(330 78)">
          <path d="M24 0 L56 0 L84 20 L72 46 L58 36 L58 120 L22 120 L22 36 L8 46 L-4 20 Z" fill="#2E7D4F" />
          <path d="M40 0 L40 120" stroke="#215C3A" strokeWidth="2.5" />
        </g>
        <text x="370" y="234" fontFamily="var(--font-manrope), sans-serif" fontSize="14" fontWeight="700" fill="#143A28" textAnchor="middle">
          MID
        </text>
        <text x="370" y="250" fontFamily="var(--font-manrope), sans-serif" fontSize="11.5" fill="#3a564a" textAnchor="middle">
          Warmth
        </text>
        <g transform="translate(550 78)">
          <path d="M22 0 L58 0 L88 22 L74 50 L58 38 L58 124 L22 124 L22 38 L6 50 L-8 22 Z" fill="#16241C" />
          <g stroke="#3a4a40" strokeWidth="2">
            <line x1="22" y1="28" x2="58" y2="28" />
            <line x1="22" y1="52" x2="58" y2="52" />
            <line x1="22" y1="76" x2="58" y2="76" />
            <line x1="22" y1="100" x2="58" y2="100" />
          </g>
        </g>
        <text x="590" y="234" fontFamily="var(--font-manrope), sans-serif" fontSize="14" fontWeight="700" fill="#143A28" textAnchor="middle">
          INSULATION
        </text>
        <text x="590" y="250" fontFamily="var(--font-manrope), sans-serif" fontSize="11.5" fill="#3a564a" textAnchor="middle">
          Big heat
        </text>
        <g transform="translate(770 78)">
          <path d="M20 0 L60 0 L92 24 L78 54 L58 40 L58 128 L22 128 L22 40 L2 54 L-12 24 Z" fill="#C0633A" />
          <path d="M40 0 L40 128" stroke="#9A4A2A" strokeWidth="2.5" />
          <path d="M30 -2 L40 14 L50 -2 Z" fill="#9A4A2A" />
        </g>
        <text x="810" y="234" fontFamily="var(--font-manrope), sans-serif" fontSize="14" fontWeight="700" fill="#143A28" textAnchor="middle">
          SHELL
        </text>
        <text x="810" y="250" fontFamily="var(--font-manrope), sans-serif" fontSize="11.5" fill="#3a564a" textAnchor="middle">
          Wind &amp; rain
        </text>
        <text x="250" y="150" fontFamily="var(--font-manrope), sans-serif" fontSize="30" fontWeight="400" fill="#5E6B62" textAnchor="middle">
          +
        </text>
        <text x="470" y="150" fontFamily="var(--font-manrope), sans-serif" fontSize="30" fontWeight="400" fill="#5E6B62" textAnchor="middle">
          +
        </text>
        <text x="690" y="150" fontFamily="var(--font-manrope), sans-serif" fontSize="30" fontWeight="400" fill="#5E6B62" textAnchor="middle">
          +
        </text>
      </svg>
    </div>
  );
}
