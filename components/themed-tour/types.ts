export type ThemedTourDay = {
  node: string;
  label: string;
  title: string;
  when: string;
  body: string;
  acts?: string[];
  warmActs?: boolean[];
  highlight?: boolean;
};

export type ThemedTourTheme = {
  id: string;
  bg: string;
  cream: string;
  muted: string;
  accent: string;
  accentSoft: string;
  accentMuted: string;
  warm: string;
  green: string;
  ink2: string;
  ink3: string;
  line: string;
  gradientLine: string;
  priceGlow: string;
  btnGradient: string;
  btnShadow: string;
  btnText: string;
  displayFont: string;
  priceLabel: string;
};

export type ThemedTourPackage = {
  meta: { label: string; value: string; sub: string }[];
  prices: { name: string; price: string }[];
  days: ThemedTourDay[];
  included: string[];
  notIncluded: string;
};
