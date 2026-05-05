import { useState } from "react";
import { ArrowDown, ArrowUp, ExternalLink, RotateCcw } from "lucide-react";

export type CustomerPlannerSlot = {
  feedOrder: number;
  title: string;
  source?: "letrend" | "tiktok" | "imported_history";
  tag?: string | null;
  thumbnailUrl?: string | null;
  publishedAt?: string | null;
  views?: number | null;
  headline?: string | null;
  whyWorks?: string | null;
  whyFits?: string | null;
  originalUrl?: string | null;
};

const CURRENT_SLOT_INDEX = 4;
const TOTAL_SLOTS = 9;
const WINDOW_STEP = 3;
const MAX_WINDOW_OFFSET = 12;
const MIN_WINDOW_OFFSET = -12;

type GridCell = {
  slotIndex: number;
  feedOrder: number;
  slot: CustomerPlannerSlot | null;
};

function buildSlotMap(slots: CustomerPlannerSlot[], windowOffset: number): GridCell[] {
  return Array.from({ length: TOTAL_SLOTS }, (_, slotIndex) => {
    const feedOrder = CURRENT_SLOT_INDEX - slotIndex + windowOffset;
    return {
      slotIndex,
      feedOrder,
      slot: slots.find((s) => s.feedOrder === feedOrder) ?? null,
    };
  });
}

function formatCompactViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(".0", "")}k`;
  return String(n);
}

export function CustomerPlannerGrid({
  slots,
  companyName,
}: {
  slots: CustomerPlannerSlot[];
  companyName?: string;
}) {
  const [windowOffset, setWindowOffset] = useState(0);
  const cellMap = buildSlotMap(slots, windowOffset);

  const hasNearbyUpcoming = slots.some((s) => s.feedOrder > 0);
  const canGoForward = windowOffset < MAX_WINDOW_OFFSET;
  const canGoBack = windowOffset > MIN_WINDOW_OFFSET;
  const isOffCenter = windowOffset !== 0;

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-3 gap-2 select-none md:gap-2.5">
        {cellMap.map((cell) => (
          <PlannerCell
            key={cell.slotIndex}
            cell={cell}
            hasNearbyUpcoming={hasNearbyUpcoming}
            companyName={companyName}
          />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setWindowOffset((o) => Math.min(o + WINDOW_STEP, MAX_WINDOW_OFFSET))}
          disabled={!canGoForward}
          className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-hard-sm transition-all hover:translate-y-[1px] hover:shadow-none disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:shadow-hard-sm"
        >
          <ArrowUp className="h-3 w-3" /> Framåt
        </button>

        {isOffCenter && (
          <button
            type="button"
            onClick={() => setWindowOffset(0)}
            className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-foreground/40 bg-transparent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="h-3 w-3" /> Nu
          </button>
        )}

        <button
          type="button"
          onClick={() => setWindowOffset((o) => Math.max(o - WINDOW_STEP, MIN_WINDOW_OFFSET))}
          disabled={!canGoBack}
          className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-hard-sm transition-all hover:translate-y-[1px] hover:shadow-none disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:shadow-hard-sm"
        >
          Bakåt <ArrowDown className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

function PlannerCell({
  cell,
  hasNearbyUpcoming,
  companyName,
}: {
  cell: GridCell;
  hasNearbyUpcoming: boolean;
  companyName?: string;
}) {
  const { feedOrder, slot } = cell;
  const isNow = feedOrder === 0;
  const isPast = feedOrder < 0;
  const depth = isPast ? Math.abs(feedOrder) : 0;
  const thumbnailUrl = slot?.thumbnailUrl ?? null;
  const hasThumbnail = Boolean(thumbnailUrl);
  const opacity = isPast ? Math.max(0.5, 1 - depth * 0.13) : 1;

  const baseClasses =
    "group relative flex aspect-[9/16] flex-col justify-between overflow-hidden rounded-xl p-3 transition-all box-border";

  let stateClasses = "";
  if (hasThumbnail) {
    stateClasses = isNow ? "border-2 border-accent shadow-hard-sm" : "border-2 border-foreground/80";
  } else if (isNow && slot) {
    stateClasses = "bg-blush border-2 border-accent shadow-hard-sm";
  } else if (isNow) {
    stateClasses = "bg-blush/60 border-2 border-dashed border-accent/60";
  } else if (isPast) {
    stateClasses = "bg-muted/60 border-2 border-foreground/30";
  } else {
    stateClasses = "bg-card border-2 border-foreground/80";
  }

  const interactive = Boolean(slot && (slot.headline || slot.whyWorks || slot.whyFits || slot.title));

  return (
    <div
      className={`${baseClasses} ${stateClasses} ${interactive ? "cursor-pointer hover:shadow-hard-sm" : ""}`}
      style={{
        opacity,
        backgroundImage: hasThumbnail
          ? `linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.62) 100%), url(${thumbnailUrl})`
          : undefined,
        backgroundSize: hasThumbnail ? "cover" : undefined,
        backgroundPosition: hasThumbnail ? "center" : undefined,
      }}
    >
      {slot ? (
        <>
          <FilledCell slot={slot} isNow={isNow} hasThumbnail={hasThumbnail} />
          {interactive && <ConceptHoverDetails slot={slot} companyName={companyName} />}
        </>
      ) : (
        <EmptyCell feedOrder={feedOrder} isNow={isNow} hasNearbyUpcoming={hasNearbyUpcoming} />
      )}
    </div>
  );
}

function FilledCell({
  slot,
  isNow,
  hasThumbnail,
}: {
  slot: CustomerPlannerSlot;
  isNow: boolean;
  hasThumbnail: boolean;
}) {
  const isImported = slot.source === "tiktok" || slot.source === "imported_history";
  const badgeText = isNow ? "NU" : isImported ? "TT" : "LeT";

  const badgeClass = hasThumbnail
    ? "bg-black/45 text-white border border-white/20"
    : isNow
      ? "bg-accent text-accent-foreground"
      : isImported
        ? "bg-secondary text-secondary-foreground"
        : "bg-foreground text-background";

  const titleClass = hasThumbnail
    ? "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]"
    : "text-foreground";

  const metaClass = hasThumbnail ? "text-white/70" : "text-muted-foreground";

  return (
    <div className="relative z-0 flex h-full flex-col justify-between transition-opacity group-hover:opacity-0">
      <div>
        <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}>
          {badgeText}
        </span>
      </div>

      <div
        className={`text-xs font-semibold leading-snug md:text-sm ${titleClass} overflow-hidden`}
        style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}
      >
        {slot.title}
      </div>

      <div className={`text-[10px] leading-tight md:text-xs ${metaClass}`}>
        {isImported && slot.publishedAt && (
          <div>
            {new Date(slot.publishedAt).toLocaleDateString("sv-SE", { month: "short", year: "numeric" })}
          </div>
        )}
        {isImported && typeof slot.views === "number" && <div>{formatCompactViews(slot.views)} visn</div>}
        {!isImported && slot.tag && !hasThumbnail && <div className="truncate">#{slot.tag}</div>}
      </div>
    </div>
  );
}

function ConceptHoverDetails({
  slot,
  companyName,
}: {
  slot: CustomerPlannerSlot;
  companyName?: string;
}) {
  const headline = slot.headline ?? slot.title;
  const whyFitsLabel = companyName ? `Varför det passar ${companyName}` : "Varför det passar er";

  return (
    <div className="absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto rounded-[10px] bg-card/[0.98] p-3 text-left text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100 md:p-4">
      <h4 className="text-sm font-bold leading-snug md:text-base">{headline}</h4>

      {slot.whyWorks && (
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-accent">Varför det fungerar</p>
          <p className="mt-0.5 text-[11px] leading-snug text-foreground/85 md:text-xs">{slot.whyWorks}</p>
        </div>
      )}

      {slot.whyFits && (
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-accent">{whyFitsLabel}</p>
          <p className="mt-0.5 text-[11px] leading-snug text-foreground/85 md:text-xs">{slot.whyFits}</p>
        </div>
      )}

      {slot.originalUrl && (
        <a
          href={slot.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-auto inline-flex items-center gap-1.5 self-start rounded-full border border-foreground/70 bg-background px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Originalklipp <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

function EmptyCell({
  feedOrder,
  isNow,
  hasNearbyUpcoming,
}: {
  feedOrder: number;
  isNow: boolean;
  hasNearbyUpcoming: boolean;
}) {
  if (isNow) {
    return (
      <div className="flex flex-1 items-center justify-center px-2 text-center">
        <div className="text-xs font-medium leading-snug text-accent">
          {hasNearbyUpcoming ? "Nästa steg är klart i din plan" : "Nästa steg förbereds av din CM"}
        </div>
      </div>
    );
  }

  if (feedOrder < 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="h-px w-4 bg-border" />
      </div>
    );
  }

  return <div className="flex-1" />;
}
