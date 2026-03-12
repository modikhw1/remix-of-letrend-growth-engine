import { useEffect, useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Heart, Home, MessageCircle, Plus, Search, Share2, UserRound, Users } from "lucide-react";

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

const clips: ReelClip[] = [
  {
    title: "Lunchrush pa 30 min",
    caption: "POV: ni hittar dagens special direkt",
    likes: "13.3K",
    comments: "96",
    shares: "254",
    views: "124K visningar",
    followerBurst: "+123 foljare",
    vibeClass: "from-blue-900/80 via-violet-900/55 to-black",
  },
  {
    title: "Bakom kulisserna",
    caption: "Koket preppar innan servicestart",
    likes: "25.4K",
    comments: "258",
    shares: "100",
    views: "86K visningar",
    followerBurst: "+43 foljare",
    vibeClass: "from-slate-500/75 via-slate-800/60 to-black",
  },
  {
    title: "Hemlig meny testas",
    caption: "Snabb reaktion nar forsta bordet provar",
    likes: "59.6K",
    comments: "184",
    shares: "136K",
    views: "152K visningar",
    followerBurst: "+152 foljare",
    vibeClass: "from-stone-300/70 via-zinc-700/45 to-black",
  },
];

const Metric = ({ icon, value, filled }: { icon: ReactNode; value: string; filled?: boolean }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="rounded-full bg-white/10 p-1 backdrop-blur-sm">
      <span className={cn("block text-white", filled && "[&_svg]:fill-white")}>{icon}</span>
    </div>
    <span className="text-[10px] font-semibold text-white">{value}</span>
  </div>
);

const ReelPanel = ({ clip }: { clip: ReelClip }) => (
  <div className={cn("relative h-full overflow-hidden bg-gradient-to-b", clip.vibeClass)}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,.22),transparent_42%)]" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-black/35" />

    <div className="absolute left-0 right-0 top-2 z-20 flex items-center justify-center px-3 text-[10px] font-semibold text-white/95">
      <div className="absolute left-3 inline-flex items-center gap-2 text-[9px] text-white/85">
        <span>LIVE</span>
        <span>STEM</span>
      </div>
      <div className="inline-flex items-center gap-3">
        <span className="text-white/70">Following</span>
        <span className="border-b border-white pb-0.5">Friends</span>
        <span className="text-white/70">LIVE</span>
      </div>
      <Search className="absolute right-3 h-3.5 w-3.5 text-white/90" />
    </div>

    <div className="absolute bottom-[66px] left-3 right-[52px] z-20 text-white">
      <p className="text-[8.5px] font-semibold">Dr Urban Slice</p>
      <p className="mt-0.5 text-[8px] leading-tight text-white/90">{clip.caption}</p>
      <p className="mt-1 text-[7.5px] text-white/70">{clip.views} · originalt ljud</p>
    </div>
  </div>
);

const FeedPhone = ({
  className,
  startIndex = 0,
  holdMs = 3000,
  scrollMs = 360,
  label = "@urbanslice",
}: {
  className?: string;
  startIndex?: number;
  holdMs?: number;
  scrollMs?: number;
  label?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(startIndex % clips.length);
  const [isScrolling, setIsScrolling] = useState(false);
  const [burstTick, setBurstTick] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (isScrolling) {
        setActiveIndex((prev) => (prev + 1) % clips.length);
        setIsScrolling(false);
        setBurstTick((prev) => prev + 1);
      } else {
        setIsScrolling(true);
      }
    }, isScrolling ? scrollMs : holdMs);

    return () => window.clearTimeout(timer);
  }, [isScrolling, holdMs, scrollMs]);

  const current = clips[activeIndex];
  const next = useMemo(() => clips[(activeIndex + 1) % clips.length], [activeIndex]);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-[236px] rounded-[1.8rem] border-[2.5px] border-white/30 bg-black p-1 shadow-hard">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.45rem] bg-black">
          <div className="absolute inset-x-[38%] top-1.5 z-40 h-1.5 rounded-full bg-white/80" />

          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className={cn("h-[200%] transition-transform", isScrolling ? "translate-y-[-50%]" : "translate-y-0")}
              style={{
                transitionTimingFunction: "cubic-bezier(.23,.66,.19,.99)",
                transitionDuration: isScrolling ? `${scrollMs}ms` : "0ms",
              }}
            >
              <div className="h-1/2">
                <ReelPanel clip={current} />
              </div>
              <div className="h-1/2">
                <ReelPanel clip={next} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-[92px] right-2 z-30 flex flex-col items-center gap-2.5">
            <div className="relative mb-0.5">
              <div className="h-9 w-9 rounded-full border border-white bg-white/75" />
              <span className="absolute -bottom-1 left-1/2 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">
                <Plus className="h-2.5 w-2.5" />
              </span>
            </div>
            <Metric icon={<Heart className="h-4 w-4" />} value={current.likes} filled />
            <Metric icon={<MessageCircle className="h-4 w-4" />} value={current.comments} />
            <Metric icon={<Share2 className="h-4 w-4" />} value={current.shares} />
          </div>

          {!isScrolling && (
            <div
              key={`burst-${activeIndex}-${burstTick}`}
              className="tiktok-follower-burst-once absolute left-3 top-14 z-30 inline-flex items-center gap-1 rounded-full border border-sage/35 bg-background/95 px-2 py-1 text-[8px] font-bold text-sage shadow-hard-sm"
            >
              <Users className="h-3 w-3" />
              {current.followerBurst}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black/92 px-2 py-2">
            <div className="flex items-center justify-between text-white/90">
              <div className="flex flex-col items-center gap-0.5">
                <Home className="h-3.5 w-3.5" />
                <span className="text-[8px]">Home</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Users className="h-3.5 w-3.5" />
                <span className="text-[8px]">Friends</span>
              </div>
              <div className="-mt-1 flex h-5.5 w-7 items-center justify-center rounded bg-white text-black">
                <Plus className="h-3.5 w-3.5" />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <MessageCircle className="h-3.5 w-3.5" />
                <span className="text-[8px]">Inbox</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <UserRound className="h-3.5 w-3.5" />
                <span className="text-[8px]">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 inline-flex items-center rounded-2xl bg-white px-3 py-1 text-base font-semibold leading-none text-black shadow-hard-sm">
        {label}
      </div>
    </div>
  );
};

const TikTokMomentumShowcase = ({ className }: { className?: string }) => (
  <div className={cn("flex justify-center gap-4 md:gap-8", className)}>
    <FeedPhone label="@oneminmicro" startIndex={0} holdMs={3000} scrollMs={360} />
    <FeedPhone className="hidden md:flex" label="@astrokirsten" startIndex={1} holdMs={3000} scrollMs={360} />
  </div>
);

export default TikTokMomentumShowcase;
