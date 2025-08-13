"use client";

import Link from "next/link";
import Container from "@/components/ui/container";
import ThemeToggle from "@/components/theme-toggle";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-xl bg-background/80">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-foreground hover:text-emerald-500 transition-colors">
          <Mountain className="w-6 h-6 text-emerald-500" />
          <span className="hidden sm:block">Nirvana Treks & Tours</span>
          <span className="sm:hidden">Nirvana</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted-foreground transition-all hover:text-foreground group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-emerald-500 transition-colors py-2 border-b border-border last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-emerald-500 text-emerald-50 font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
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


