import { cn } from "@/lib/utils";

/**
 * Decorative gumball illustrations scattered across sections.
 * Uses SVGs from src/assets/gumball-* folders.
 * 
 * RECOLOR GUIDE: The gumball SVGs use these original fills:
 *   #FF90E8 (pink), #90A8ED (blue), #FFC900 (yellow), #F1F333 (lime), #23A094 (teal), #E54326 (red)
 * 
 * Recommended warm palette replacements:
 *   #FF90E8 → #CBAD7A (gold/sand)      matches --gold
 *   #90A8ED → #587A64 (sage)            matches --sage  
 *   #FFC900 → #B27A42 (caramel)         matches --accent
 *   #F1F333 → #EDDDD0 (blush)           matches --blush
 *   #23A094 → #6B4A2E (cocoa)           matches --brand
 *   #E54326 → #8B6D4A (warm bronze)     warm mid-tone
 */

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

import newMono from "@/assets/gumball-3/New-Mono.svg";
import howToMono from "@/assets/gumball-3/HowTo-Mono.svg";
import growMono from "@/assets/gumball-3/Grow-Mono.svg";
import startMono from "@/assets/gumball-3/Start-Mono.svg";

interface DecoItem {
  src: string;
  className: string;
  rotate?: number;
  delay?: string;
}

interface GumballDecorationsProps {
  layout: string;
  light?: boolean;
}

const layouts: Record<string, DecoItem[]> = {
  "hero-home": [
    { src: foodCooking, className: "absolute -left-8 top-16 h-28 w-28 md:h-40 md:w-40", rotate: -12 },
    { src: launch, className: "absolute right-[5%] bottom-8 h-20 w-20 md:h-28 md:w-28", rotate: 10, delay: "1.5s" },
    { src: newMono, className: "absolute right-[12%] top-12 h-16 w-16 md:h-24 md:w-24", rotate: 15, delay: "3s" },
  ],
  "hero-platform": [
    { src: dataChart, className: "absolute -left-6 top-20 h-24 w-24 md:h-36 md:w-36", rotate: -8 },
    { src: growMono, className: "absolute right-[8%] bottom-12 h-16 w-16 md:h-24 md:w-24", rotate: 12, delay: "2s" },
  ],
  "hero-cases": [
    { src: flag, className: "absolute -right-4 top-16 h-24 w-24 md:h-32 md:w-32", rotate: 10 },
    { src: thumbsUp, className: "absolute left-[5%] bottom-8 h-20 w-20 md:h-28 md:w-28", rotate: -8, delay: "1s" },
  ],
  "hero-about": [
    { src: waving, className: "absolute -left-8 top-20 h-28 w-28 md:h-36 md:w-36", rotate: -10 },
    { src: clapping, className: "absolute right-[6%] bottom-12 h-20 w-20 md:h-28 md:w-28", rotate: 12, delay: "2s" },
  ],
  "hero-howit": [
    { src: startMono, className: "absolute right-[8%] top-16 h-20 w-20 md:h-28 md:w-28", rotate: 8 },
    { src: howToMono, className: "absolute -left-6 bottom-12 h-24 w-24 md:h-32 md:w-32", rotate: -12, delay: "1.5s" },
  ],
  "ai-section": [
    { src: dataChart, className: "absolute -right-6 top-8 h-24 w-24 md:h-32 md:w-32", rotate: 10 },
    { src: launch, className: "absolute left-[3%] bottom-6 h-20 w-20 md:h-28 md:w-28", rotate: -15, delay: "2s" },
  ],
  "tiktok-section": [
    { src: filmVideoA, className: "absolute -left-4 top-12 h-20 w-20 md:h-28 md:w-28", rotate: -8 },
    { src: photography, className: "absolute right-[4%] top-[20%] h-16 w-16 md:h-24 md:w-24", rotate: 15, delay: "2.5s" },
  ],
  "cta-section": [
    { src: thumbsUp, className: "absolute -left-6 top-8 h-24 w-24 md:h-32 md:w-32", rotate: -15 },
    { src: clapping, className: "absolute -right-4 bottom-4 h-20 w-20 md:h-28 md:w-28", rotate: 20, delay: "2s" },
  ],
  "case-detail": [
    { src: audience, className: "absolute -right-6 top-12 h-24 w-24 md:h-32 md:w-32", rotate: 8 },
  ],
  "process-section": [
    { src: musicSound, className: "absolute -right-4 top-8 h-20 w-20 md:h-28 md:w-28", rotate: 12 },
  ],
  minimal: [
    { src: flag, className: "absolute -right-4 top-12 h-20 w-20 md:h-28 md:w-28", rotate: 8 },
  ],
};

const GumballDecorations = ({ layout, light }: GumballDecorationsProps) => {
  const items = layouts[layout] || layouts.minimal;

  return (
    <>
      {items.map((d, i) => {
        const animClass = i % 2 === 0 ? "animate-float" : "animate-float-reverse";
        return (
          <img
            key={i}
            src={d.src}
            alt=""
            className={cn(
              "pointer-events-none select-none opacity-[0.12]",
              animClass,
              light && "brightness-0 invert opacity-[0.08]",
              d.className
            )}
            style={{
              animationDelay: d.delay || "0s",
              transform: d.rotate ? `rotate(${d.rotate}deg)` : undefined,
            }}
          />
        );
      })}
    </>
  );
};

export default GumballDecorations;
