import WeekendTrekBody from "@/components/themed-tour/weekend-trek-body";
import ChurdharHero from "./churdhar-hero";
import { churdharPackage, churdharTheme } from "./churdhar-data";

export default function ChurdharTour() {
  return (
    <main
      style={{
        background: churdharTheme.bg,
        color: churdharTheme.cream,
        fontFamily: "var(--font-mulish), system-ui, sans-serif",
      }}
    >
      <ChurdharHero />
      <WeekendTrekBody
        theme={churdharTheme}
        headKicker="The weekend plan"
        headTitle={
          <>
            To the{" "}
            <em className="italic text-[#e3b65a]" style={{ fontStyle: "italic" }}>
              roof
            </em>{" "}
            of the outer Himalayas
          </>
        }
        headSubtitle="A proper weekend: Friday night bus, a forest camp above Sarahan, the summit and Shirgul temple at first light, and back by Monday morning."
        pkg={churdharPackage}
      />
    </main>
  );
}
