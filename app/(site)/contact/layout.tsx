import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact & Book a Trek",
  description:
    "Plan your Himalayan adventure with Nirvana Treks. Call, WhatsApp, or email us to book Triund, Kasol, Bir Billing, Kareri, Churdhar, and more.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
