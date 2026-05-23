import WeekendTrekBody from "@/components/themed-tour/weekend-trek-body";
import TriundHero from "./triund-hero";
import { triundPackage, triundTheme } from "./triund-data";

export default function TriundTour() {
  return (
    <main
      style={{
        background: triundTheme.bg,
        color: triundTheme.cream,
        fontFamily: "var(--font-figtree), system-ui, sans-serif",
      }}
    >
      <TriundHero />
      <WeekendTrekBody
        theme={triundTheme}
        headKicker="The weekend plan"
        headTitle={
          <>
            Up the ridge,{" "}
            <em className="italic text-[#ffb787]" style={{ fontStyle: "italic" }}>
              under the stars
            </em>
          </>
        }
        headSubtitle="A proper weekend: Friday night bus, Bhagsu and McLeodganj on arrival, a night camped on the Triund ridge, and back by Monday morning."
        pkg={triundPackage}
      />
    </main>
  );
}
