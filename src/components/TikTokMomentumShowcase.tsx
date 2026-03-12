import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, TrendingUp, Users } from "lucide-react";

interface FeedItem {
  hook: string;
  views: string;
  likes: string;
}

const highMomentumItems: FeedItem[] = [
  { hook: "POV: dagens forsta lunchrush", views: "124K visningar", likes: "14.2K" },
  { hook: "Koket bakom kulisserna", views: "86K visningar", likes: "9.1K" },
  { hook: "Nar gasten testar hemlig meny", views: "152K visningar", likes: "17.4K" },
];

const lowMomentumItems: FeedItem[] = [
  { hook: "Dagens meny", views: "4.3K visningar", likes: "412" },
  { hook: "Lunch pa gang", views: "3.8K visningar", likes: "367" },
  { hook: "Ny ratt i veckan", views: "5.1K visningar", likes: "489" },
];

const followerBursts = ["+123 foljare", "+43 foljare", "+152 foljare"];

const FeedPhone = ({
  className,
  highMomentum,
}: {
  className?: string;
  highMomentum?: boolean;
}) => {
  const items = highMomentum ? highMomentumItems : lowMomentumItems;
  const loopedItems = [...items, ...items];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-[220px] rounded-[2rem] border-[3px] border-foreground bg-foreground p-1 shadow-hard">
        <div className="absolute left-1/2 top-1.5 z-30 h-4 w-14 -translate-x-1/2 rounded-full bg-foreground" />
        <div
          className={cn(
            "relative overflow-hidden rounded-[1.7rem] aspect-[9/16]",
            highMomentum ? "bg-sage" : "bg-brand",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

          <div className="relative z-20 flex items-center justify-center gap-4 pb-2 pt-8">
            <span className="text-[9px] font-medium text-white/50">Foljer</span>
            <span className="border-b border-white pb-0.5 text-[9px] font-bold text-white">For dig</span>
          </div>

          <div className="absolute bottom-10 left-2 right-10 top-12 z-10 overflow-hidden">
            <div className={highMomentum ? "tiktok-feed-scroll-fast" : "tiktok-feed-scroll-slow"}>
              {loopedItems.map((item, idx) => (
                <div key={`${item.hook}-${idx}`} className="mb-2 rounded-xl border border-white/15 bg-black/35 p-2 backdrop-blur-[1px]">
                  <div
                    className={cn(
                      "mb-2 h-20 rounded-lg",
                      highMomentum
                        ? "bg-gradient-to-br from-gold/70 via-blush/50 to-sage/50"
                        : "bg-gradient-to-br from-muted/60 via-muted/45 to-muted/30",
                    )}
                  />
                  <p className="text-[8px] font-semibold leading-tight text-white">{item.hook}</p>
                  <div className="mt-1 flex items-center justify-between text-[7px] text-white/75">
                    <span>{item.views}</span>
                    <span>{item.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {highMomentum && (
            <>
              {followerBursts.map((burst, idx) => (
                <div
                  key={burst}
                  className="tiktok-follower-burst absolute left-3 z-30 inline-flex items-center gap-1 rounded-full border border-sage/30 bg-background/95 px-2 py-1 text-[8px] font-bold text-sage shadow-hard-sm"
                  style={{
                    top: `${56 + idx * 18}px`,
                    animationDelay: `${idx * 1.6}s`,
                  }}
                >
                  <Users className="h-3 w-3" />
                  {burst}
                </div>
              ))}
              <div className="absolute left-3 top-9 z-30 inline-flex items-center gap-1 rounded-full bg-background/95 px-2 py-0.5 text-[7px] font-bold text-sage">
                <TrendingUp className="h-2.5 w-2.5" />
                Momentum
              </div>
            </>
          )}

          <div className="absolute bottom-16 right-2 z-20 flex flex-col items-center gap-3">
            <div className="rounded-full border-2 border-white bg-white/20 p-1">
              <Heart className={cn("h-4 w-4", highMomentum ? "fill-white/40 text-white" : "fill-white/15 text-white")} />
            </div>
            <div className="rounded-full border-2 border-white bg-white/10 p-1">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div className="rounded-full border-2 border-white bg-white/10 p-1">
              <Share2 className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-around bg-black/55 px-3 py-1.5">
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
      <p className="mt-2 text-[11px] font-semibold text-foreground/70">
        {highMomentum ? "@urbanslice - snabb tillvaxt" : "@urbanslice - lag respons"}
      </p>
    </div>
  );
};

const TikTokMomentumShowcase = ({ className }: { className?: string }) => (
  <div className={cn("flex justify-center gap-4", className)}>
    <FeedPhone highMomentum />
    <FeedPhone className="mt-8 hidden md:flex" />
  </div>
);

export default TikTokMomentumShowcase;
