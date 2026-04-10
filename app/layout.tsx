import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
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
  title: "Nirvana Treks & Tours | Authentic Himalayan Adventures & Cultural Tours",
  description: "Government authorized travel company specializing in bespoke treks, tours, and cultural journeys across the incredible Himalayan ranges. Expert guides, safe adventures, unforgettable experiences.",
  keywords: "himalayan treks, himalayan ranges, himachal treks, bir billing, hampta pass, triund trek, adventure travel, cultural tours, government authorized",
  openGraph: {
    title: "Nirvana Treks & Tours",
    description: "Authentic Adventures across the Incredible Himalayan Ranges",
    type: "website",
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
        <ThemeProvider>
          <SiteHeader />
          {children}
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
