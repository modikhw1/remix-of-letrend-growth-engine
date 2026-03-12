import { cn } from "@/lib/utils";
import { Grid3X3, Bookmark, Heart } from "lucide-react";

interface TikTokProfileMockupProps {
  username?: string;
  displayName?: string;
  bio?: string;
  followers?: string;
  following?: string;
  likes?: string;
  videoCount?: number;
  className?: string;
  profileColor?: string;
}

const TikTokProfileMockup = ({
  username = "@urbanslice",
  displayName = "Urban Slice 🍕",
  bio = "Stockholms bästa pizza. Punkt.",
  followers = "4.2K",
  following = "127",
  likes = "89.1K",
  videoCount = 6,
  className,
  profileColor = "bg-accent",
}: TikTokProfileMockupProps) => (
  <div className={cn("flex flex-col items-center", className)}>
    <div className="relative w-[220px] rounded-[2rem] border-[3px] border-foreground bg-foreground p-1 shadow-hard">
      {/* Notch */}
      <div className="absolute left-1/2 top-1.5 z-20 h-4 w-14 -translate-x-1/2 rounded-full bg-foreground" />
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[1.7rem] bg-white aspect-[9/16]">
        {/* Header */}
        <div className="flex items-center justify-center pt-7 pb-2">
          <span className="text-[9px] font-bold text-foreground">{username}</span>
        </div>

        {/* Profile section */}
        <div className="flex flex-col items-center px-3">
          <div className={`h-14 w-14 rounded-full border-2 border-foreground/20 ${profileColor}`} />
          <p className="mt-1.5 text-[9px] font-bold text-foreground">{displayName}</p>
          <p className="text-[7px] text-foreground/50">{username}</p>

          {/* Stats */}
          <div className="mt-2 flex gap-4">
            {[
              { val: following, label: "Följer" },
              { val: followers, label: "Följare" },
              { val: likes, label: "Gillar" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[9px] font-bold text-foreground">{s.val}</p>
                <p className="text-[6px] text-foreground/50">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <p className="mt-1.5 text-center text-[7px] text-foreground/70 leading-tight">{bio}</p>

          {/* Buttons */}
          <div className="mt-2 flex gap-1.5 w-full px-2">
            <div className="flex-1 rounded-md bg-rose-500 py-1 text-center">
              <span className="text-[7px] font-bold text-white">Följ</span>
            </div>
            <div className="rounded-md border border-foreground/20 px-2 py-1">
              <span className="text-[7px] text-foreground">Meddelande</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-2 flex border-b border-foreground/10">
          <div className="flex-1 flex items-center justify-center py-1.5 border-b border-foreground">
            <Grid3X3 className="h-3 w-3 text-foreground" />
          </div>
          <div className="flex-1 flex items-center justify-center py-1.5">
            <Bookmark className="h-3 w-3 text-foreground/30" />
          </div>
          <div className="flex-1 flex items-center justify-center py-1.5">
            <Heart className="h-3 w-3 text-foreground/30" />
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-3 gap-[1px]">
          {Array.from({ length: Math.min(videoCount, 9) }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-foreground/10 relative"
            >
              <div className="absolute bottom-0.5 left-0.5 flex items-center gap-0.5">
                <Heart className="h-1.5 w-1.5 text-white drop-shadow" />
                <span className="text-[5px] text-white drop-shadow font-medium">
                  {(Math.random() * 10 + 1).toFixed(1)}K
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TikTokProfileMockup;
