import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Users } from "lucide-react";

interface ReelClip {
  title: string;
  caption: string;
  likes: string;
  comments: string;
  shares: string;
  views: string;
  followerBurst: string;
  vibeClass: string;
}

const highMomentumClips: ReelClip[] = [
  {
    title: "Lunchrush pa 30 min",
    caption: "POV: ni hittar dagens special direkt",
    likes: "14.2K",
    comments: "892",
    shares: "311",
    views: "124K visningar",
    followerBurst: "+123 foljare",
    vibeClass: "from-sage/65 via-emerald-900/35 to-black",
  },
  {
    title: "Bakom kulisserna",
    caption: "Koket preppar innan servicestart",
    likes: "9.1K",
    comments: "537",
    shares: "205",
    views: "86K visningar",
    followerBurst: "+43 foljare",
    vibeClass: "from-teal-700/65 via-brand/45 to-black",
  },
  {
    title: "Hemlig meny testas",
    caption: "Snabb reaktion nar forsta bordet provar",
    likes: "17.4K",
    comments: "1.1K",
    shares: "428",
    views: "152K visningar",
    followerBurst: "+152 foljare",
    vibeClass: "from-gold/65 via-orange-950/45 to-black",
  },
];

const lowMomentumClip: ReelClip = {
  title: "Vanlig postning",
  caption: "Enkel uppdatering utan tydlig hook",
  likes: "412",
  comments: "47",
  shares: "16",
  views: "4.3K visningar",
  followerBurst: "+8 foljare",
  vibeClass: "from-zinc-500/45 via-zinc-800/45 to-black",
};

const HOLD_MS = 3000;
const SCROLL_MS = 420;

const Metric = ({
  icon,
  value,
  filled,
}: {
  icon: ReactNode;
  value: string;
  filled?: boolean;
}) => (
  <div className="flex flex-col items-center gap-1">
    <div className="rounded-full border-2 border-white/90 bg-black/35 p-1">
      <span className={cn("block text-white", filled && "[&_svg]:fill-white/45")}>{icon}</span>
    </div>
    <span className="text-[7px] font-semibold text-white/90">{value}</span>
  </div>
);

const ReelCard = ({ clip }: { clip: ReelClip }) => (
  <div className="relative h-1/2 px-2 pb-2">
    <div className={cn("relative h-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b", clip.vibeClass)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,.22),transparent_42%)]" />

      <div className="absolute left-2 right-2 top-2 z-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2 py-1 backdrop-blur-sm">
          <span className="inline-block h-3.5 w-3.5 rounded-full bg-white/85" />
          <span className="text-[7px] font-semibold text-white">@urbanslice</span>
        </div>
        <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[7px] font-bold text-white">Folj</span>
      </div>

      <div className="absolute left-2 right-2 top-8 z-20 inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 text-[7px] text-white/85 backdrop-blur-sm">
        <span className="font-semibold">Bio:</span>
        Mat, events och bakom kulisserna
      </div>

      <div className="absolute inset-x-2 bottom-2 z-20 rounded-lg bg-black/42 p-2 backdrop-blur-sm">
        <p className="text-[8px] font-semibold text-white">{clip.title}</p>
        <p className="mt-1 text-[7px] text-white/85">{clip.caption}</p>
        <div className="mt-1.5 flex items-center gap-2 text-[7px] text-white/75">
          <span>{clip.views}</span>
          <span>2:13 ljud</span>
        </div>
      </div>
    </div>
  </div>
);

const FeedPhone = ({
  className,
  paused,
}: {
  className?: string;
  paused?: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setTimeout(() => {
      if (isScrolling) {
        setActiveIndex((prev) => (prev + 1) % highMomentumClips.length);
        setIsScrolling(false);
        return;
      }
      setIsScrolling(true);
    }, isScrolling ? SCROLL_MS : HOLD_MS);

    return () => window.clearTimeout(timer);
  }, [isScrolling, paused]);

  const current = highMomentumClips[activeIndex];
  const next = highMomentumClips[(activeIndex + 1) % highMomentumClips.length];
  const shown = paused ? lowMomentumClip : current;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-[228px] rounded-[2rem] border-[3px] border-foreground bg-foreground p-1 shadow-hard">
        <div className="absolute left-1/2 top-1.5 z-30 h-4 w-14 -translate-x-1/2 rounded-full bg-foreground" />
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.7rem] bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/55" />

          <div className="relative z-30 flex items-center justify-center gap-4 pb-2 pt-8">
            <span className="text-[9px] font-medium text-white/55">Foljer</span>
            <span className="border-b border-white pb-0.5 text-[9px] font-bold text-white">For dig</span>
          </div>

          <div className="absolute inset-x-0 bottom-10 top-12 z-10 overflow-hidden">
            {paused ? (
              <div className="h-full">
                <ReelCard clip={shown} />
              </div>
            ) : (
              <div
                className={cn(
                  "h-[200%] transition-transform",
                  isScrolling ? "translate-y-[-50%]" : "translate-y-0",
                )}
                style={{
                  transitionTimingFunction: "cubic-bezier(.22,.73,.2,1)",
                  transitionDuration: isScrolling ? `${SCROLL_MS}ms` : "0ms",
                }}
              >
                <ReelCard clip={current} />
                <ReelCard clip={next} />
              </div>
            )}
          </div>

          <div className="absolute right-2 top-[5.05rem] z-30 flex flex-col items-center gap-2.5">
            <Metric icon={<Heart className="h-4 w-4" />} value={shown.likes} filled />
            <Metric icon={<MessageCircle className="h-4 w-4" />} value={shown.comments} />
            <Metric icon={<Share2 className="h-4 w-4" />} value={shown.shares} />
          </div>

          {!paused && !isScrolling && (
            <div
              key={`burst-${activeIndex}`}
              className="tiktok-follower-burst-once absolute left-3 top-16 z-30 inline-flex items-center gap-1 rounded-full border border-sage/35 bg-background/95 px-2 py-1 text-[8px] font-bold text-sage shadow-hard-sm"
            >
              <Users className="h-3 w-3" />
              {shown.followerBurst}
            </div>
          )}

          {paused && (
            <div className="absolute left-3 top-16 z-30 rounded-full border border-white/25 bg-black/55 px-2 py-1 text-[8px] font-semibold text-white">
              Hogermobil pausad
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-around bg-black/60 px-3 py-1.5">
            {["Hem", "Vanner", "+", "Inkorg", "Profil"].map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "text-[7px]",
                  i === 0 ? "font-bold text-white" : "text-white/50",
                  i === 2 && "rounded bg-white px-1.5 py-0.5 text-[8px] font-bold text-black",
                )}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-2 text-[11px] font-semibold text-foreground/75">
        {paused ? "@urbanslice - avvaktar testupplagg" : "@urbanslice - momentumflode"}
      </p>
    </div>
  );
};

const TikTokMomentumShowcase = ({ className }: { className?: string }) => (
  <div className={cn("flex justify-center gap-4 md:gap-5", className)}>
    <FeedPhone />
    <FeedPhone className="mt-8 hidden md:flex" paused />
  </div>
);

export default TikTokMomentumShowcase;
