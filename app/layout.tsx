import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import Footer from "@/components/footer";

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
  description: "Government authorized travel company specializing in bespoke treks, tours, and cultural journeys across the Himalayas and India. Expert guides, safe adventures, unforgettable experiences.",
  keywords: "himalayan treks, india tours, kashmir trek, spiti valley, kerala backwaters, adventure travel, cultural tours, government authorized",
  openGraph: {
    title: "Nirvana Treks & Tours",
    description: "Authentic Himalayan Adventures & Cultural Tours across India",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
