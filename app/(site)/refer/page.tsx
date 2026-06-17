import ReferralSection from "@/components/referral-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Refer & Earn",
  description:
    "Refer friends to Nirvana Treks and earn credit on your next Himalayan trek or tour.",
  path: "/refer",
});

export default function ReferPage() {
  return (
    <main>
      <ReferralSection />
    </main>
  );
}
