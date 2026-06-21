import { MapPin } from "lucide-react";

export default function LocalBroBanner({ isBlog = false }: { isBlog?: boolean }) {
  return (
    <div
      className={
        isBlog
          ? "w-full border-b border-[rgba(17,17,17,0.1)] bg-[#8B5E2B] text-[#FAF7F2]"
          : "w-full border-b border-emerald-500/20 bg-emerald-950/60 text-emerald-100 backdrop-blur-sm"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs font-medium sm:text-sm">
        <MapPin
          className={isBlog ? "h-3.5 w-3.5 text-[#FAF7F2]" : "h-3.5 w-3.5 text-emerald-300"}
          aria-hidden
        />
        <span>
          Run by local Himachalis. The bros who actually know the spot.
        </span>
      </div>
    </div>
  );
}
