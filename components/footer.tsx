import Container from "@/components/ui/container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-10 text-muted-foreground">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Nirvana Treks & Tours. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/tours" className="hover:text-foreground transition-colors">Tours</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </Container>
    </footer>
  );
}


