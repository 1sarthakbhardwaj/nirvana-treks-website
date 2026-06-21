"use client";

import Link from "next/link";
import Container from "@/components/ui/container";
import { Menu, X, Mountain } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LocalBroBanner from "@/components/local-bro-banner";

const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/refer", label: "Refer & Earn" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  return (
    <>
      <LocalBroBanner isBlog={isBlog} />
      <header
      className={
        isBlog
          ? "sticky top-0 z-50 w-full border-b border-[rgba(17,17,17,0.14)] bg-[#F4EDE2]/95 backdrop-blur-md shadow-sm"
          : "sticky top-0 z-50 w-full border-b border-gray-800/50 glass-effect luxury-shadow"
      }
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className={
            isBlog
              ? "flex items-center gap-3 text-xl font-bold tracking-tight text-[#111111] transition-colors hover:text-[#6E4A20]"
              : "flex items-center gap-3 font-bold tracking-tight text-foreground transition-colors hover:text-green-400"
          }
        >
          <Mountain
            className={
              isBlog
                ? "h-8 w-8 text-[#8B5E2B] animate-mountain-breeze"
                : "h-8 w-8 text-green-400 drop-shadow-lg animate-mountain-breeze"
            }
          />
          <span className="flex flex-col leading-tight">
            <span className="hidden sm:block text-xl">Nirvana Treks & Tours</span>
            <span className="sm:hidden text-xl">Nirvana</span>
            <span
              className={
                isBlog
                  ? "hidden text-[11px] font-medium uppercase tracking-wider text-[#8B5E2B]/80 sm:block"
                  : "hidden text-[11px] font-medium uppercase tracking-wider text-emerald-300/80 sm:block"
              }
            >
              Run by local Himachalis
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isBlog
                  ? "group relative text-lg font-semibold text-[#2A1D10] transition-all hover:text-[#6E4A20]"
                  : "group relative text-lg font-medium text-gray-300 transition-all hover:text-green-400"
              }
            >
              {item.label}
              <span
                className={
                  isBlog
                    ? "absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8B5E2B] transition-all group-hover:w-full"
                    : "absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-green-400 to-emerald-500 transition-all group-hover:w-full"
                }
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className={
              isBlog
                ? "rounded-lg p-3 text-[#2A1D10] transition-colors hover:text-[#6E4A20] md:hidden"
                : "rounded-lg p-3 text-gray-300 transition-colors hover:text-green-400 glass-effect md:hidden"
            }
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className={
            isBlog
              ? "border-t border-[rgba(17,17,17,0.14)] bg-[#FAF7F2] md:hidden"
              : "border-t border-gray-800/50 glass-effect md:hidden"
          }
        >
          <Container className="py-6">
            <nav className="flex flex-col space-y-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isBlog
                      ? "border-b border-[rgba(17,17,17,0.08)] py-3 text-lg font-semibold text-[#2A1D10] transition-colors last:border-b-0 hover:text-[#6E4A20]"
                      : "border-b border-gray-800/30 py-3 text-lg font-medium text-gray-300 transition-colors last:border-b-0 hover:text-green-400"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={
                  isBlog
                    ? "mt-6 inline-flex items-center justify-center rounded-xl bg-[#8B5E2B] px-8 py-4 font-bold text-[#FAF7F2] transition-all duration-300 hover:bg-[#6E4A20]"
                    : "mt-6 inline-flex items-center justify-center rounded-xl px-8 py-4 font-bold text-white forest-gradient luxury-shadow transition-all duration-300 hover:scale-105"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan Your Journey
              </Link>
            </nav>
          </Container>
        </div>
      )}
      </header>
    </>
  );
}


