import { cn } from "@/lib/utils";
import { global } from "@/data/content";

// Real logos
import logoFraseriet from "@/assets/logos/fraseriet.svg";
import logoElviras from "@/assets/logos/elviras.svg";
import logoAvli from "@/assets/logos/creperie-avli.svg";
import logoPlock from "@/assets/logos/restaurang-plock.svg";
import logoCornament from "@/assets/logos/cornament.svg";
import logoJohannesgrillen from "@/assets/logos/johannesgrillen.svg";
import logoCafePlaza from "@/assets/logos/cafe-plaza.svg";
import logoHornan from "@/assets/logos/hornan-snabblivs.svg";

const logos = [
  logoFraseriet,
  logoElviras,
  logoAvli,
  logoPlock,
  logoCornament,
  logoJohannesgrillen,
  logoCafePlaza,
  logoHornan,
];

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