type Variant = "triund-vs-kheerganga" | "bir-billing" | "easy-vs-moderate";

type Props = {
  variant: Variant;
};

export default function BlogDecisionHero({ variant }: Props) {
  if (variant === "triund-vs-kheerganga") {
    return (
      <div className="blog-duel-hero" aria-label="Triund versus Kheerganga comparison">
        <div className="blog-duel-side a">
          <span className="blog-duel-tag">Easier start</span>
          <svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="ts" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8FC1DA" />
                <stop offset="1" stopColor="#DCEDE6" />
              </linearGradient>
              <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6F8B7F" />
                <stop offset="1" stopColor="#43655A" />
              </linearGradient>
            </defs>
            <rect width="500" height="320" fill="url(#ts)" />
            <path d="M0 150 L70 95 L130 140 L210 90 L300 145 L380 95 L460 145 L500 120 L500 200 L0 200 Z" fill="#C5D7D1" opacity="0.8" />
            <path d="M150 86 L40 205 L280 205 Z" fill="url(#rock)" />
            <path d="M0 196 Q120 180 250 196 Q380 210 500 194 L500 250 L0 250 Z" fill="#357A4E" />
            <path d="M0 232 Q150 220 320 234 Q420 242 500 234 L500 320 L0 320 Z" fill="#143A28" />
            <g transform="translate(150 206)">
              <path d="M0 22 L14 0 L28 22 Z" fill="#C0633A" />
            </g>
            <g transform="translate(235 206)">
              <path d="M0 22 L14 0 L28 22 Z" fill="#C0633A" />
            </g>
          </svg>
          <span className="blog-duel-name">Triund</span>
        </div>
        <div className="blog-duel-side b">
          <span className="blog-duel-tag">Hot spring</span>
          <svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="ks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8FC1DA" />
                <stop offset="1" stopColor="#DCEDE6" />
              </linearGradient>
              <linearGradient id="rock2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6F8B7F" />
                <stop offset="1" stopColor="#43655A" />
              </linearGradient>
              <linearGradient id="pool" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#79B5B0" />
                <stop offset="1" stopColor="#3E7E78" />
              </linearGradient>
            </defs>
            <rect width="500" height="320" fill="url(#ks)" />
            <path d="M240 76 L120 205 L420 205 Z" fill="url(#rock2)" />
            <path d="M0 196 Q120 182 250 196 Q380 210 500 194 L500 250 L0 250 Z" fill="#357A4E" />
            <path d="M0 244 Q150 232 320 246 Q420 254 500 246 L500 320 L0 320 Z" fill="#143A28" />
            <ellipse cx="250" cy="250" rx="120" ry="20" fill="url(#pool)" />
            <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.55">
              <path d="M210 240 q-8 -16 4 -30 q8 -12 0 -26" />
              <path d="M255 238 q-8 -16 4 -30 q8 -12 0 -26" />
              <path d="M300 240 q-8 -16 4 -30 q8 -12 0 -26" />
            </g>
          </svg>
          <span className="blog-duel-name">Kheerganga</span>
        </div>
        <div className="blog-duel-vs" aria-hidden="true">VS</div>
      </div>
    );
  }

  if (variant === "bir-billing") {
    return (
      <div className="blog-wide-hero" aria-label="Bir Billing hills with a paraglider in the sky">
        <svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="bs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#84BBD8" />
              <stop offset="0.6" stopColor="#BEDEE2" />
              <stop offset="1" stopColor="#E6F1EC" />
            </linearGradient>
          </defs>
          <rect width="1000" height="360" fill="url(#bs)" />
          <circle cx="150" cy="80" r="40" fill="#FCFFFE" opacity="0.85" />
          <path d="M0 188 Q200 168 420 186 Q650 206 850 184 Q930 176 1000 186 L1000 250 L0 250 Z" fill="#4E9E6B" />
          <path d="M0 226 Q220 206 460 224 Q700 244 920 222 Q970 218 1000 224 L1000 300 L0 300 Z" fill="#357A4E" />
          <g transform="translate(760 196)">
            <rect x="-14" y="14" width="28" height="10" fill="#F4FAF3" />
            <path d="M-16 14 Q0 -10 16 14 Z" fill="#F4FAF3" />
            <rect x="-4" y="-6" width="8" height="10" fill="#C0633A" />
          </g>
          <path d="M0 300 Q200 288 420 302 Q680 318 1000 300 L1000 360 L0 360 Z" fill="#143A28" />
          <g transform="translate(0 60)">
            <g className="blog-glider-drift">
              <g className="blog-glider-bob">
                <path d="M-34 0 Q0 -20 34 0 Q0 -8 -34 0 Z" fill="#C0633A" />
                <g stroke="#16241C" strokeWidth="1">
                  <line x1="-30" y1="1" x2="-2" y2="26" />
                  <line x1="30" y1="1" x2="2" y2="26" />
                </g>
                <circle cx="0" cy="29" r="4.5" fill="#16241C" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="blog-wide-hero" aria-label="A trail forking into easy and moderate paths">
      <svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="fs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#84BBD8" />
            <stop offset="0.6" stopColor="#BEDEE2" />
            <stop offset="1" stopColor="#E7F2EC" />
          </linearGradient>
        </defs>
        <rect width="1000" height="360" fill="url(#fs)" />
        <path d="M0 250 Q160 224 360 240 Q520 254 640 250 L640 360 L0 360 Z" fill="#357A4E" />
        <path d="M520 360 L760 150 L1000 250 L1000 360 Z" fill="#235C3E" />
        <path d="M120 348 Q260 318 360 300 Q470 282 560 250" fill="none" stroke="#7FE0A0" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="2 10" />
        <path d="M560 250 Q640 230 700 200 Q740 178 760 158" fill="none" stroke="#E89A6F" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="2 10" />
        <circle cx="560" cy="250" r="8" fill="#16241C" stroke="#fff" strokeWidth="2.5" />
        <g transform="translate(560 250)">
          <line x1="0" y1="0" x2="0" y2="-44" stroke="#5A4632" strokeWidth="4" />
          <g transform="translate(2 -42)">
            <path d="M0 0 L70 0 L78 9 L70 18 L0 18 Z" fill="#2E7D4F" />
            <text x="12" y="13" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">EASY</text>
          </g>
          <g transform="translate(2 -20)">
            <path d="M0 0 L84 0 L92 9 L84 18 L0 18 Z" fill="#C0633A" />
            <text x="10" y="13" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">MODERATE</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
