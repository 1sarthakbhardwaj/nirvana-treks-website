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
  metadataBase: new URL("https://nirvanatreks.com"),
  title: "Nirvana Treks & Tours | Authentic Himalayan Adventures & Cultural Tours",
  description: "Government authorized travel company specializing in bespoke treks, tours, and cultural journeys across the incredible Himalayan ranges. Expert guides, safe adventures, unforgettable experiences.",
  keywords: "himalayan treks, himalayan ranges, himachal treks, bir billing, hampta pass, triund trek, adventure travel, cultural tours, government authorized",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nirvana Treks & Tours",
    description: "Authentic Adventures across the Incredible Himalayan Ranges",
    type: "website",
    url: "https://nirvanatreks.com",
    siteName: "Nirvana Treks & Tours",
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
