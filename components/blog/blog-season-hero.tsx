type Variant = "year-round" | "snow" | "monsoon";

type Props = {
  variant: Variant;
};

export default function BlogSeasonHero({ variant }: Props) {
  if (variant === "year-round") {
    return (
      <div className="blog-wide-hero" aria-label="Mountain landscape shifting from spring to winter across the year">
        <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="ysky2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9CCBE0" />
              <stop offset="0.5" stopColor="#BBDEE0" />
              <stop offset="1" stopColor="#D7E6EC" />
            </linearGradient>
            <linearGradient id="rock-y" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#6F8B7F" />
              <stop offset="1" stopColor="#43655A" />
            </linearGradient>
            <linearGradient id="grnd" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#8b5e2b" />
              <stop offset="0.55" stopColor="#6e4a20" />
              <stop offset="0.78" stopColor="#9DBBA6" />
              <stop offset="1" stopColor="#EAF2EE" />
            </linearGradient>
          </defs>
          <rect width="1000" height="340" fill="url(#ysky2)" />
          <circle cx="160" cy="74" r="40" fill="#FCFFFE" opacity="0.85" />
          <path d="M0 200 L120 110 L210 165 L320 100 L430 168 L540 104 L650 168 L760 100 L880 165 L1000 110 L1000 230 L0 230 Z" fill="#C5D7D1" opacity="0.85" />
          <path d="M210 118 L90 236 L360 236 Z" fill="url(#rock-y)" />
          <path d="M540 100 L420 236 L690 236 Z" fill="url(#rock-y)" />
          <path d="M820 96 L690 236 L990 236 Z" fill="url(#rock-y)" />
          <path d="M0 206 Q150 190 320 204 Q500 220 680 204 Q840 190 1000 206 L1000 250 L0 250 Z" fill="#357A4E" />
          <rect x="700" y="196" width="300" height="60" fill="#EAF2EE" opacity="0.55" />
          <path d="M0 244 Q200 232 430 246 Q650 258 1000 244 L1000 340 L0 340 Z" fill="url(#grnd)" />
          <g fontFamily="var(--font-manrope), sans-serif" fontSize="12" fontWeight="700" letterSpacing="2" textAnchor="middle">
            <text x="125" y="318" fill="#EAF3EC">SPRING</text>
            <text x="375" y="318" fill="#EAF3EC">SUMMER</text>
            <text x="625" y="318" fill="#EAF3EC">AUTUMN</text>
            <text x="875" y="318" fill="#5E6B62">WINTER</text>
          </g>
        </svg>
      </div>
    );
  }

  if (variant === "snow") {
    return (
      <div className="blog-wide-hero" aria-label="Snow-covered peaks, snow-laden pines and a frozen lake under a pale winter sky">
        <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="snsky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#A9C9DC" />
              <stop offset="0.6" stopColor="#D2E2E8" />
              <stop offset="1" stopColor="#EEF4F4" />
            </linearGradient>
            <linearGradient id="ice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#CFE2EA" />
              <stop offset="1" stopColor="#A9C6D2" />
            </linearGradient>
          </defs>
          <rect width="1000" height="340" fill="url(#snsky)" />
          <circle cx="820" cy="70" r="44" fill="#FBFEFF" opacity="0.7" />
          <path d="M0 180 L120 95 L220 150 L340 90 L460 155 L580 92 L700 155 L820 100 L940 155 L1000 130 L1000 220 L0 220 Z" fill="#DCE8EC" opacity="0.9" />
          <path d="M200 110 L80 230 L360 230 Z" fill="#E9F1F2" />
          <path d="M520 80 L400 230 L700 230 Z" fill="#E9F1F2" />
          <path d="M800 120 L680 230 L940 230 Z" fill="#E9F1F2" />
          <path d="M0 206 Q150 192 320 204 Q500 220 680 204 Q840 192 1000 206 L1000 250 L0 250 Z" fill="#2C6044" />
          <g>
            <path d="M120 206 l11 -24 l11 24 Z" fill="#1B4733" />
            <path d="M118 190 l13 -8 l13 8 Z" fill="#EAF4F4" />
            <path d="M360 208 l10 -22 l10 22 Z" fill="#1B4733" />
            <path d="M640 206 l11 -24 l11 24 Z" fill="#1B4733" />
            <path d="M860 208 l10 -22 l10 22 Z" fill="#1B4733" />
          </g>
          <ellipse cx="430" cy="286" rx="300" ry="22" fill="url(#ice)" />
          <path d="M0 300 Q200 288 430 302 Q680 316 1000 300 L1000 340 L0 340 Z" fill="#E4EEEF" />
          <g className="blog-snowfall" fill="#FFFFFF" opacity="0.9">
            <circle cx="120" cy="60" r="2.4" />
            <circle cx="260" cy="40" r="2" />
            <circle cx="380" cy="90" r="2.6" />
            <circle cx="520" cy="55" r="2" />
            <circle cx="640" cy="30" r="2.4" />
            <circle cx="760" cy="80" r="2.2" />
            <circle cx="880" cy="50" r="2.6" />
            <circle cx="180" cy="120" r="2" />
            <circle cx="440" cy="140" r="2.4" />
            <circle cx="700" cy="120" r="2" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="blog-wide-hero" aria-label="Misty green hills under heavy clouds with rain falling">
      <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="msky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8A99A0" />
            <stop offset="0.6" stopColor="#AEC0BE" />
            <stop offset="1" stopColor="#CBD8D2" />
          </linearGradient>
        </defs>
        <rect width="1000" height="340" fill="url(#msky)" />
        <g fill="#6E7E82" opacity="0.85">
          <ellipse cx="250" cy="70" rx="150" ry="40" />
          <ellipse cx="420" cy="58" rx="130" ry="44" />
          <ellipse cx="640" cy="74" rx="160" ry="42" />
          <ellipse cx="850" cy="62" rx="140" ry="40" />
        </g>
        <path d="M0 200 Q150 170 320 196 Q520 224 720 194 Q860 174 1000 198 L1000 250 L0 250 Z" fill="#5E837A" opacity="0.7" />
        <path d="M0 232 Q170 206 360 228 Q560 252 760 226 Q880 212 1000 230 L1000 290 L0 290 Z" fill="#3E7A55" />
        <path d="M0 274 Q200 254 430 276 Q680 298 1000 272 L1000 340 L0 340 Z" fill="#1F5238" />
        <g className="blog-rain" stroke="#DCE6E4" strokeWidth="1.6" opacity="0.55" strokeLinecap="round">
          <line x1="120" y1="110" x2="110" y2="136" />
          <line x1="250" y1="100" x2="240" y2="126" />
          <line x1="400" y1="115" x2="390" y2="141" />
          <line x1="540" y1="105" x2="530" y2="131" />
          <line x1="680" y1="120" x2="670" y2="146" />
          <line x1="820" y1="108" x2="810" y2="134" />
          <line x1="360" y1="185" x2="350" y2="211" />
          <line x1="560" y1="180" x2="550" y2="206" />
          <line x1="760" y1="182" x2="750" y2="208" />
        </g>
      </svg>
    </div>
  );
}
