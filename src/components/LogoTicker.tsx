import { cn } from "@/lib/utils";
import { global } from "@/data/content";

// Import logo placeholders — swap these for real logos
import logo1 from "@/assets/logos/placeholder-1.svg";
import logo2 from "@/assets/logos/placeholder-2.svg";
import logo3 from "@/assets/logos/placeholder-3.svg";
import logo4 from "@/assets/logos/placeholder-4.svg";
import logo5 from "@/assets/logos/placeholder-5.svg";
import logo6 from "@/assets/logos/placeholder-6.svg";
import logo7 from "@/assets/logos/placeholder-7.svg";
import logo8 from "@/assets/logos/placeholder-8.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

interface LogoTickerProps {
  className?: string;
}

const LogoTicker = ({ className }: LogoTickerProps) => (
  <section className={cn("border-b-2 border-foreground overflow-hidden py-5", className)}>
    <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
      {global.logoTicker.heading}
    </p>
    <div className="relative">
      <div className="flex animate-ticker whitespace-nowrap items-center">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={global.logoTicker.names[i % logos.length]}
            className="mx-8 h-8 w-auto shrink-0 opacity-40 grayscale select-none"
          />
        ))}
      </div>
    </div>
  </section>
);

export default LogoTicker;
