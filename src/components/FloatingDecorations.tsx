import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.svg";
import iconTiktok from "@/assets/icon-tiktok.svg";

/**
 * Centralized floating decoration system.
 * Edit this single file to change all floating elements site-wide.
 *
 * Each decoration has: type (logo | tiktok | phone), position, size, animation, rotation.
 * Swap assets here — every page updates automatically.
 */

type DecoType = "logo" | "tiktok" | "phone";

interface Decoration {
  type: DecoType;
  className: string;
  /** Extra rotation in degrees (applied to tiktok/phone only by default) */
  rotate?: number;
  /** Animation delay */
  delay?: string;
}

interface FloatingDecorationsProps {
  /** Predefined layout key — or pass custom decorations */
  layout?: "hero" | "section-a" | "section-b" | "minimal" | "cta";
  custom?: Decoration[];
  /** Light mode makes icons white/inverted for dark backgrounds */
  light?: boolean;
}

/* ─── Preset layouts ─── */
const presets: Record<string, Decoration[]> = {
  hero: [
    { type: "logo", className: "absolute -left-6 top-24 h-24 w-24 md:h-32 md:w-32", rotate: -12 },
    { type: "tiktok", className: "absolute right-[8%] bottom-10 h-14 w-14 md:h-20 md:w-20", rotate: 10, delay: "2s" },
  ],
  "section-a": [
    { type: "logo", className: "absolute -right-4 top-10 h-20 w-20 md:h-28 md:w-28", rotate: 10 },
  ],
  "section-b": [
    { type: "logo", className: "absolute -left-6 bottom-10 h-24 w-24 md:h-32 md:w-32", rotate: -10 },
    { type: "tiktok", className: "absolute right-[10%] top-8 h-14 w-14 md:h-20 md:w-20", rotate: 12, delay: "1.5s" },
  ],
  minimal: [
    { type: "logo", className: "absolute -right-4 top-12 h-20 w-20 md:h-28 md:w-28", rotate: 8 },
  ],
  cta: [
    { type: "logo", className: "absolute -left-8 top-8 h-24 w-24 md:h-32 md:w-32", rotate: -15 },
    { type: "logo", className: "absolute -right-4 bottom-4 h-20 w-20 md:h-28 md:w-28", rotate: 20, delay: "2s" },
  ],
};

/* ─── Phone SVG inline (simple flat iPhone silhouette) ─── */
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 56 100" fill="currentColor" className={className}>
    <rect x="0" y="0" width="56" height="100" rx="10" ry="10" />
    <rect x="3" y="12" width="50" height="72" rx="2" ry="2" fill="currentColor" opacity="0.3" />
    <circle cx="28" cy="92" r="4" opacity="0.3" />
    <rect x="20" y="5" width="16" height="3" rx="1.5" opacity="0.3" />
  </svg>
);

const assetMap: Record<DecoType, "img" | "phone"> = {
  logo: "img",
  tiktok: "img",
  phone: "phone",
};

const srcMap: Record<string, string> = {
  logo: logoMark,
  tiktok: iconTiktok,
};

const FloatingDecorations = ({ layout = "minimal", custom, light }: FloatingDecorationsProps) => {
  const items = custom || presets[layout] || presets.minimal;

  return (
    <>
      {items.map((d, i) => {
        const isImg = assetMap[d.type] === "img";
        const rotate = d.rotate ?? 0;
        const animClass = i % 2 === 0 ? "animate-float" : "animate-float-reverse";

        const sharedClass = cn(
          "pointer-events-none select-none drop-shadow-md opacity-[0.18]",
          animClass,
          light && "brightness-0 invert",
          d.className
        );

        const style: React.CSSProperties = {
          animationDelay: d.delay || "0s",
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
        };

        if (isImg) {
          return (
            <img
              key={i}
              src={srcMap[d.type]}
              alt=""
              className={sharedClass}
              style={style}
            />
          );
        }

        return (
          <div key={i} className={sharedClass} style={style}>
            <PhoneIcon className="h-full w-full" />
          </div>
        );
      })}
    </>
  );
};

export default FloatingDecorations;
