"use client";

import Link from "next/link";
import Container from "@/components/ui/container";
import { Menu, X, Mountain } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 glass-effect luxury-shadow">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-foreground hover:text-green-400 transition-colors">
          <Mountain className="w-8 h-8 text-green-400 drop-shadow-lg animate-mountain-breeze" />
          <span className="hidden sm:block text-xl">Nirvana Treks & Tours</span>
          <span className="sm:hidden text-xl">Nirvana</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-lg font-medium text-gray-300 transition-all hover:text-green-400 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-gray-300 hover:text-green-400 transition-colors rounded-lg glass-effect"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800/50 glass-effect">
          <Container className="py-6">
            <nav className="flex flex-col space-y-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 transition-colors py-3 text-lg font-medium border-b border-gray-800/30 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center px-8 py-4 forest-gradient text-white font-bold rounded-xl luxury-shadow hover:scale-105 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan Your Journey
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}


