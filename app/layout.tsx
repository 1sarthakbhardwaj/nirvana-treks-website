import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://nirvanatreks.com"),
  title: "Nirvana Treks & Tours | Authentic Himalayan Adventures & Cultural Tours",
  description: "Government authorized travel company specializing in bespoke treks, tours, and cultural journeys across the incredible Himalayan ranges. Expert guides, safe adventures, unforgettable experiences.",
  keywords: "himalayan treks, himalayan ranges, himachal treks, bir billing, hampta pass, triund trek, adventure travel, cultural tours, government authorized",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}>
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
