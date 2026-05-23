import WeekendTrekBody from "@/components/themed-tour/weekend-trek-body";
import KareriHero from "./kareri-hero";
import { kareriPackage, kareriTheme } from "./kareri-data";

export default function KareriTour() {
  return (
    <main
      style={{
        background: kareriTheme.bg,
        color: kareriTheme.cream,
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
      }}
    >
      <KareriHero />
      <WeekendTrekBody
        theme={kareriTheme}
        headKicker="The weekend plan"
        headTitle={
          <>
            Forest, meadow,{" "}
            <em className="italic text-[#9fe0e6]" style={{ fontStyle: "italic" }}>
              still water
            </em>
          </>
        }
        headSubtitle="A proper weekend: Friday night bus, a forest climb to a lakeside camp, the glacial lake at dawn, and back by Monday morning."
        pkg={kareriPackage}
      />
    </main>
  );
}
