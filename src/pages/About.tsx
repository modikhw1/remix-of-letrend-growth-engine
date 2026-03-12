import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import GumballDecorations from "@/components/GumballDecorations";
import { images } from "@/data/images";
import { about as content, global } from "@/data/content";
import { Sparkles, Users, Heart } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden border-b-2 border-foreground bg-blush py-24 md:py-36">
      <GumballDecorations layout="hero-about" />
      <div className="container relative z-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-black leading-tight md:text-7xl">{content.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">{content.hero.body}</p>
        </FadeIn>
      </div>
    </section>

    {/* Vision */}
    <section className="border-b-2 border-foreground bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-5">
          <FadeIn className="md:col-span-3">
            <div className="h-full rounded-2xl border-thicker border-foreground bg-card p-8 md:p-10 shadow-hard">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-thicker border-foreground bg-gold shadow-hard-sm">
                  <Sparkles className="h-6 w-6 text-foreground" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-accent">{content.vision.kicker}</p>
              </div>
              <h2 className="text-3xl font-black md:text-4xl">{content.vision.heading}</h2>
              <p className="mt-4 text-muted-foreground">{content.vision.body1}</p>
              <p className="mt-3 text-muted-foreground">{content.vision.body2}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-2">
            <div className="h-full rounded-2xl border-thicker border-foreground bg-gold/40 p-8 flex flex-col justify-center text-center shadow-hard-sm">
              <Sparkles className="mx-auto mb-3 h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">{content.vision.sideHeading}</h3>
              <p className="mt-3 text-sm text-foreground/70">{content.vision.sideBody}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="relative border-b-2 border-foreground bg-foreground py-20 text-background md:py-28 overflow-hidden">
      <GumballDecorations layout="minimal" light />
      <div className="container relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-black md:text-5xl">{content.team.heading}</h2>
          <p className="mt-4 opacity-60">{content.team.subheading}</p>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-3">
          <FadeIn>
            <div className="rounded-2xl border-2 border-background/15 bg-background/5 p-6 flex items-center justify-center backdrop-blur-sm">
              <img src={images.illustTeam.src} alt={images.illustTeam.alt} className="h-44 w-auto object-contain drop-shadow-lg" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-background/15 bg-background/5 p-7 backdrop-blur-sm">
              <Heart className="mb-4 h-6 w-6 text-gold" />
              <h3 className="text-xl font-bold">{content.team.founders.title}</h3>
              <p className="mt-3 text-sm opacity-60">{content.team.founders.body}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="h-full rounded-2xl border-2 border-background/15 bg-background/5 p-7 backdrop-blur-sm">
              <Users className="mb-4 h-6 w-6 text-gold" />
              <h3 className="text-xl font-bold">{content.team.managers.title}</h3>
              <p className="mt-3 text-sm opacity-60">{content.team.managers.body}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gold py-20 text-center md:py-28">
      <div className="container mx-auto max-w-xl">
        <FadeIn>
          <h2 className="text-3xl font-black md:text-4xl">{content.cta.heading}</h2>
          <p className="mt-4 text-foreground/60">{content.cta.body}</p>
          <Button asChild size="lg" className="mt-8 rounded-full border-2 border-foreground bg-foreground text-background shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
            <Link to="/kom-igang">{global.cta.primary}</Link>
          </Button>
          <p className="mt-3 text-xs text-foreground/50">{content.cta.subtext}</p>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;
