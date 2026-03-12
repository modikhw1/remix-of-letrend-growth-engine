import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import LaptopMockup from "@/components/LaptopMockup";
import FadeIn from "@/components/FadeIn";
import FloatingDecorations from "@/components/FloatingDecorations";
import { platform as content, global } from "@/data/content";
import KonceptScreen from "@/components/platform/KonceptScreen";
import GamePlanScreen from "@/components/platform/GamePlanScreen";
import FeedPlannerScreen from "@/components/platform/FeedPlannerScreen";
import InstruktionerScreen from "@/components/platform/InstruktionerScreen";
import InsightsScreen from "@/components/platform/InsightsScreen";
import SmartSokScreen from "@/components/platform/SmartSokScreen";
import { ReactNode } from "react";
import {
  Lightbulb, Target, CalendarDays, Video, TrendingUp,
  Search, Cpu, Users, Eye, Sparkles
} from "lucide-react";

const moduleScreens: ReactNode[] = [
  <KonceptScreen />, <GamePlanScreen />, <FeedPlannerScreen />,
  <InstruktionerScreen />, <InsightsScreen />, <SmartSokScreen />,
];
const moduleIcons = [Lightbulb, Target, CalendarDays, Video, TrendingUp, Search];
const techIcons = [Sparkles, Eye, Users, Cpu];

const Platform = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden border-b-2 border-foreground bg-gold py-24 md:py-36">
      <FloatingDecorations layout="hero" />
      <div className="container relative z-10">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">{content.hero.kicker}</p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">{content.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg">{content.hero.body}</p>
        </FadeIn>
      </div>
    </section>

    {/* Module deep dive */}
    {content.modules.map((m, i) => {
      const Icon = moduleIcons[i];
      return (
        <section key={m.title} className={`border-b-2 border-foreground py-16 md:py-24 ${m.color}`}>
          <div className="container">
            <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
              <FadeIn className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-thicker border-foreground bg-card shadow-hard-sm">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-black md:text-3xl">{m.title}</h2>
                </div>
                <p className="text-foreground/70">{m.desc}</p>
                <p className="mt-3 text-sm text-foreground/60">{m.detail}</p>
              </FadeIn>
              <FadeIn delay={0.15} direction={i % 2 === 0 ? "right" : "left"} className={`flex justify-center ${i % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                <LaptopMockup label={m.title} flipped={i % 2 !== 0}>
                  {moduleScreens[i]}
                </LaptopMockup>
              </FadeIn>
            </div>
          </div>
        </section>
      );
    })}

    {/* Tech behind */}
    <section className="border-b-2 border-foreground bg-sage py-20 text-sage-foreground md:py-28">
      <div className="container">
        <FadeIn className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-black md:text-4xl">{content.techBehind.heading}</h2>
          <p className="mt-4 opacity-80">{content.techBehind.subheading}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
            {content.techBehind.items.map((item, idx) => {
              const Icon = techIcons[idx];
              return (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl border-2 border-white/30 bg-white/10 p-6 backdrop-blur-sm">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm opacity-80">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 text-center md:py-28">
      <div className="container mx-auto max-w-xl">
        <FadeIn>
          <h2 className="text-3xl font-black md:text-4xl">{content.cta.heading}</h2>
          <p className="mt-4 text-muted-foreground">{content.cta.body}</p>
          <Button asChild size="lg" className="mt-8 rounded-full border-2 border-foreground bg-foreground text-background shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
            <Link to="/kom-igang">{global.cta.primary}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Platform;
