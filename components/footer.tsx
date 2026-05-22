"use client";

import Container from "@/components/ui/container";
import GoogleReviewsSection from "@/components/google-reviews-section";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const showReviews = pathname === "/";

  return (
    <footer className="border-t border-border">
      {showReviews ? <GoogleReviewsSection /> : null}

      <Container className="flex flex-col items-center justify-between gap-6 py-10 text-muted-foreground md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Nirvana Treks & Tours. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/tours" className="transition-colors hover:text-foreground">
            Tours
          </Link>
          <Link href="/refer" className="transition-colors hover:text-foreground">
            Refer & Earn
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
