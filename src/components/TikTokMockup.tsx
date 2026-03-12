import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Music, Plus } from "lucide-react";

interface TikTokMockupProps {
  username?: string;
  caption?: string;
  likes?: string;
  comments?: string;
  songName?: string;
  className?: string;
  bgColor?: string;
  profileColor?: string;
}

const TikTokMockup = ({
  username = "@urbanslice",
  caption = "POV: du beställer vår hemliga off-menu pizza 🍕🔥",
  likes = "14.2K",
  comments = "892",
  songName = "original sound",
  className,
  bgColor = "bg-foreground",
  profileColor = "bg-accent",
}: TikTokMockupProps) => (
  <div className={cn("flex flex-col items-center", className)}>
    <div className="relative w-[220px] rounded-[2rem] border-[3px] border-foreground bg-foreground p-1 shadow-hard">
      {/* Notch */}
      <div className="absolute left-1/2 top-1.5 z-20 h-4 w-14 -translate-x-1/2 rounded-full bg-foreground" />
      {/* Screen */}
      <div className={`relative overflow-hidden rounded-[1.7rem] ${bgColor} aspect-[9/16]`}>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Top bar — FYP / Following */}
        <div className="relative z-10 flex items-center justify-center gap-4 pt-8 pb-2">
          <span className="text-[9px] text-white/50 font-medium">Följer</span>
          <span className="text-[9px] text-white font-bold border-b border-white pb-0.5">För dig</span>
        </div>

        {/* Right side actions */}
        <div className="absolute right-2 bottom-20 z-10 flex flex-col items-center gap-3">
          {/* Profile */}
          <div className="relative">
            <div className={`h-8 w-8 rounded-full border-2 border-white ${profileColor}`} />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500">
              <Plus className="h-2 w-2 text-white" />
            </div>
          </div>
          {/* Heart */}
          <div className="flex flex-col items-center">
            <Heart className="h-5 w-5 text-white fill-white/20" />
            <span className="text-[7px] text-white mt-0.5">{likes}</span>
          </div>
          {/* Comment */}
          <div className="flex flex-col items-center">
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="text-[7px] text-white mt-0.5">{comments}</span>
          </div>
          {/* Share */}
          <div className="flex flex-col items-center">
            <Share2 className="h-5 w-5 text-white" />
            <span className="text-[7px] text-white mt-0.5">Dela</span>
          </div>
          {/* Spinning disc */}
          <div className="mt-1 h-6 w-6 animate-spin-slow rounded-full border border-white/30 bg-foreground/80 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white/60" />
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-3 left-2 right-12 z-10">
          <p className="text-[9px] font-bold text-white">{username}</p>
          <p className="mt-0.5 text-[8px] text-white/80 leading-tight line-clamp-2">{caption}</p>
          <div className="mt-1.5 flex items-center gap-1">
            <Music className="h-2.5 w-2.5 text-white/70" />
            <span className="text-[7px] text-white/60 truncate">{songName}</span>
          </div>
        </div>

        {/* Home bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-around bg-black/50 py-1.5 px-3">
          {["Hem", "Vänner", "+", "Inkorg", "Profil"].map((tab, i) => (
            <span
              key={tab}
              className={cn(
                "text-[7px]",
                i === 0 ? "text-white font-bold" : "text-white/50",
                i === 2 && "bg-white text-black rounded px-1.5 py-0.5 font-bold text-[8px]"
              )}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TikTokMockup;
