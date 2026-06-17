import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Fraunces,
  Instrument_Serif,
  Newsreader,
  Figtree,
  DM_Serif_Display,
  Manrope,
  Cormorant_Garamond,
  Mulish,
} from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import LenisProvider from "@/components/lenis-provider";
import SiteHeader from "@/components/site-header";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import StructuredData from "@/components/structured-data";
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
  absoluteUrl,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Himalayan Treks & Tours from Delhi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "himalayan treks",
    "himachal treks",
    "weekend trek from delhi",
    "triund trek",
    "kasol kheerganga",
    "bir billing",
    "kareri lake trek",
    "churdhar trek",
    "hampta pass",
    "adventure travel india",
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${instrumentSerif.variable} ${newsreader.variable} ${figtree.variable} ${dmSerif.variable} ${manrope.variable} ${cormorant.variable} ${mulish.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <StructuredData data={organizationJsonLd()} />
        <LenisProvider>
          <ThemeProvider>
            <SiteHeader />
            {children}
            <Footer />
            <Chatbot />
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
