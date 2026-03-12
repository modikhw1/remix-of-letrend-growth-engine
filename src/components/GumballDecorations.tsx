import { cn } from "@/lib/utils";

// Import selected gumball illustrations
import foodCooking from "@/assets/gumball-1/Food & Cooking.svg";
import filmVideoA from "@/assets/gumball-1/Film & Video (A).svg";
import photography from "@/assets/gumball-1/Photography.svg";
import musicSound from "@/assets/gumball-1/Music & Sound Design.svg";

import launch from "@/assets/gumball-2/Launch.svg";
import dataChart from "@/assets/gumball-2/Data Chart.svg";
import thumbsUp from "@/assets/gumball-2/Thumbs Up.svg";
import clapping from "@/assets/gumball-2/Clapping.svg";
import waving from "@/assets/gumball-2/Waving.svg";
import flag from "@/assets/gumball-2/Flag.svg";
import audience from "@/assets/gumball-2/Audience.svg";
import priceTag from "@/assets/gumball-2/Price Tag.svg";

import newMono from "@/assets/gumball-3/New-Mono.svg";
import howToMono from "@/assets/gumball-3/HowTo-Mono.svg";
import growMono from "@/assets/gumball-3/Grow-Mono.svg";
import startMono from "@/assets/gumball-3/Start-Mono.svg";
import freshMono from "@/assets/gumball-3/Fresh-Mono.svg";

import logoMark from "@/assets/logo-mark.svg";

interface DecoItem {
  src: string;
  className: string;
  rotate?: number;
  delay?: string;
  /** Mark as logo/brand item that should be inverted on dark backgrounds */
  isLogo?: boolean;
}

interface GumballDecorationsProps {
  layout: string;
  /** Use on dark backgrounds — inverts logos and boosts gumball opacity */
  light?: boolean;
}

const L = logoMark;

const layouts: Record<string, DecoItem[]> = {
  "hero-home": [
    { src: photography, className: "absolute -left-8 top-16 h-28 w-28 md:h-40 md:w-40", rotate: -12 },
    { src: L, className: "absolute right-[5%] bottom-8 h-16 w-16 md:h-24 md:w-24", rotate: 10, delay: "1.5s", isLogo: true },
    { src: newMono, className: "absolute right-[12%] top-12 h-16 w-16 md:h-24 md:w-24", rotate: 15, delay: "3s" },
    { src: launch, className: "absolute left-[15%] bottom-12 h-14 w-14 md:h-20 md:w-20", rotate: -8, delay: "2s" },
  ],
  "hero-platform": [
    { src: dataChart, className: "absolute -left-6 top-20 h-24 w-24 md:h-36 md:w-36", rotate: -8 },
    { src: L, className: "absolute right-[8%] bottom-12 h-14 w-14 md:h-20 md:w-20", rotate: 12, delay: "2s", isLogo: true },
    { src: growMono, className: "absolute right-[15%] top-8 h-14 w-14 md:h-20 md:w-20", rotate: 6, delay: "1s" },
  ],
  "hero-cases": [
    { src: flag, className: "absolute -right-4 top-16 h-24 w-24 md:h-32 md:w-32", rotate: 10 },
    { src: L, className: "absolute left-[5%] bottom-8 h-16 w-16 md:h-24 md:w-24", rotate: -8, delay: "1s", isLogo: true },
  ],
  "hero-about": [
    { src: waving, className: "absolute -left-8 top-20 h-28 w-28 md:h-36 md:w-36", rotate: -10 },
    { src: L, className: "absolute right-[6%] bottom-12 h-16 w-16 md:h-24 md:w-24", rotate: 12, delay: "2s", isLogo: true },
  ],
  "hero-howit": [
    { src: startMono, className: "absolute right-[8%] top-16 h-20 w-20 md:h-28 md:w-28", rotate: 8 },
    { src: L, className: "absolute -left-6 bottom-12 h-16 w-16 md:h-20 md:w-20", rotate: -12, delay: "1.5s", isLogo: true },
  ],
  "ai-section": [
    { src: dataChart, className: "absolute -right-6 top-8 h-24 w-24 md:h-32 md:w-32", rotate: 10 },
    { src: L, className: "absolute left-[3%] bottom-6 h-14 w-14 md:h-20 md:w-20", rotate: -15, delay: "2s", isLogo: true },
    { src: freshMono, className: "absolute left-[20%] top-6 h-12 w-12 md:h-16 md:w-16", rotate: 8, delay: "3s" },
  ],
  "tiktok-section": [
    { src: filmVideoA, className: "absolute -left-4 top-12 h-20 w-20 md:h-28 md:w-28", rotate: -8 },
    { src: L, className: "absolute right-[4%] top-[20%] h-14 w-14 md:h-20 md:w-20", rotate: 15, delay: "2.5s", isLogo: true },
    { src: photography, className: "absolute right-[10%] bottom-8 h-16 w-16 md:h-24 md:w-24", rotate: -5, delay: "1s" },
  ],
  "cta-section": [
    { src: thumbsUp, className: "absolute -left-6 top-8 h-24 w-24 md:h-32 md:w-32", rotate: -15 },
    { src: L, className: "absolute -right-4 bottom-4 h-16 w-16 md:h-24 md:w-24", rotate: 20, delay: "2s", isLogo: true },
  ],
  "case-detail": [
    { src: audience, className: "absolute -right-6 top-12 h-24 w-24 md:h-32 md:w-32", rotate: 8 },
    { src: L, className: "absolute left-[4%] bottom-8 h-12 w-12 md:h-16 md:w-16", rotate: -10, delay: "1.5s", isLogo: true },
  ],
  "process-section": [
    { src: musicSound, className: "absolute -right-4 top-8 h-20 w-20 md:h-28 md:w-28", rotate: 12 },
    { src: L, className: "absolute left-[5%] bottom-10 h-12 w-12 md:h-16 md:w-16", rotate: -6, delay: "2s", isLogo: true },
  ],
  minimal: [
    { src: L, className: "absolute -right-4 top-12 h-16 w-16 md:h-24 md:w-24", rotate: 8, isLogo: true },
    { src: priceTag, className: "absolute left-[4%] bottom-10 h-14 w-14 md:h-20 md:w-20", rotate: -10, delay: "1.5s" },
  ],
};

const GumballDecorations = ({ layout, light }: GumballDecorationsProps) => {
  const items = layouts[layout] || layouts.minimal;

  return (
    <>
      {items.map((d, i) => {
        const animClass = i % 2 === 0 ? "animate-float" : "animate-float-reverse";

        // On dark backgrounds (light=true):
        // - Logos/brand marks: invert to white/light
        // - Gumballs: show with boosted opacity, warm tint
        // On light backgrounds:
        // - Everything renders directly with warm sepia tint
        const imgFilter = light
          ? d.isLogo
            ? "brightness-0 invert opacity-25"
            : "opacity-30 sepia-[0.3] hue-rotate-[340deg]"
          : d.isLogo
            ? "opacity-[0.12]"
            : "opacity-[0.35] sepia-[0.6] hue-rotate-[340deg] saturate-[0.7]";

        return (
          <div
            key={i}
            className={cn("pointer-events-none select-none", d.className)}
            style={{
              animationDelay: d.delay || "0s",
              transform: d.rotate ? `rotate(${d.rotate}deg)` : undefined,
            }}
          >
            <img
              src={d.src}
              alt=""
              className={cn(
                "h-full w-full object-contain",
                animClass,
                imgFilter
              )}
              style={{ animationDelay: d.delay || "0s" }}
            />
          </div>
        );
      })}
    </>
  );
};

export default GumballDecorations;
