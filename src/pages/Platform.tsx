import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import LaptopMockup from "@/components/LaptopMockup";
import FadeIn from "@/components/FadeIn";
import GumballDecorations from "@/components/GumballDecorations";
import { platform as content, global } from "@/data/content";
import { images } from "@/data/images";
import {
  Lightbulb,
  Target,
  CalendarDays,
  Video,
  TrendingUp,
  Search,
  Cpu,
  Users,
  Eye,
  Sparkles,
} from "lucide-react";

const moduleIcons = [Lightbulb, Target, CalendarDays, Video, TrendingUp, Search];
const techIcons = [Sparkles, Eye, Users, Cpu];
const moduleColors = ["bg-gold/30", "bg-blush", "bg-sage/10", "bg-gold/20", "bg-blush/60", "bg-card"];

// NOTE:
// Koncept and Smart sok were previously cross-mapped.
// Videoinstruktioner now has a dedicated transparent laptop thumbnail.
const moduleLaptopImages = [
  images.laptopSmartsok, // Koncept
  images.laptopGameplan,
  images.laptopFeedplanner,
  images.laptopInstruktioner, // Videoinstruktioner
  images.laptopInsights,
  images.laptopKoncept, // Smart sok
];

const Platform = () => (
  <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-brand py-24 text-brand-foreground md:py-36">
        <GumballDecorations layout="hero-platform" light />
        <div className="container relative z-10">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">{content.hero.kicker}</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">{content.hero.heading}</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg opacity-70">{content.hero.body}</p>
          </FadeIn>
        </div>
      </section>

      {/* Module deep dive */}
      {content.modules.map((m, i) => {
        const Icon = moduleIcons[i];
        const laptopImg = moduleLaptopImages[i];
        const textOrderClass = i % 2 === 0 ? "md:order-1" : "md:order-2";
        const imageOrderClass = i % 2 === 0 ? "md:order-2" : "md:order-1";

        return (
          <section key={m.title} className={`border-b-2 border-foreground py-14 md:py-20 ${moduleColors[i]}`}>
            <div className="container">
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
                <FadeIn className={`flex justify-center ${textOrderClass}`}>
                  <div className="w-full max-w-[30rem]">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-thicker border-foreground bg-card shadow-hard-sm">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h2 className="text-2xl font-black md:text-3xl">{m.title}</h2>
                    </div>
                    <p className="text-foreground/70">{m.desc}</p>
                    <p className="mt-3 text-sm text-foreground/50">{m.detail}</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.15} direction={i % 2 === 0 ? "right" : "left"} className={`flex justify-center ${imageOrderClass}`}>
                  <div className="w-full max-w-[36rem]">
                    <LaptopMockup
                      className="w-full"
                      imageSrc={laptopImg.src}
                      imageAlt={laptopImg.alt}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* Tech behind - warm cocoa instead of full black */}
      <section className="border-b-2 border-foreground bg-brand py-20 text-brand-foreground md:py-28">
        <div className="container">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">{content.techBehind.heading}</h2>
            <p className="mt-4 opacity-60">{content.techBehind.subheading}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
              {content.techBehind.items.map((item, idx) => {
                const Icon = techIcons[idx];
                return (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border-2 border-brand-foreground/15 bg-brand-foreground/5 p-6 backdrop-blur-sm">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm opacity-60">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20 text-center md:py-28">
        <div className="container mx-auto max-w-xl">
          <FadeIn>
            <h2 className="text-3xl font-black md:text-4xl">{content.cta.heading}</h2>
            <p className="mt-4 text-foreground/60">{content.cta.body}</p>
            <Button asChild size="lg" className="mt-8 rounded-full border-2 border-foreground bg-foreground px-8 text-background shadow-hard transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <Link to="/kom-igang">{global.cta.primary}</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
);

export default Platform;
