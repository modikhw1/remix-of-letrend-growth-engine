import { cn } from "@/lib/utils";
import { global } from "@/data/content";

interface LogoTickerProps {
  className?: string;
}

const LogoTicker = ({ className }: LogoTickerProps) => (
  <section className={cn("border-b-2 border-foreground overflow-hidden py-5", className)}>
    <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
      {global.logoTicker.heading}
    </p>
    <div className="relative">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...global.logoTicker.names, ...global.logoTicker.names].map((name, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center text-lg font-bold text-foreground/30 select-none shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default LogoTicker;
