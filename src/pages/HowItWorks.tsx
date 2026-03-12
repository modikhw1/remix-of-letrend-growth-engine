import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import GumballDecorations from "@/components/GumballDecorations";
import { images } from "@/data/images";
import { howItWorks as content, global } from "@/data/content";

const stepAccents = ["bg-gold", "bg-blush", "bg-sage/15", "bg-gold/40", "bg-blush/60"];

const HowItWorks = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden border-b-2 border-foreground bg-blush py-24 md:py-36">
      <GumballDecorations layout="hero-howit" />
      <div className="container relative z-10 mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">{content.hero.kicker}</p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">{content.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">{content.hero.body}</p>
        </FadeIn>
      </div>
    </section>

    {/* Role division */}
    <section className="border-b-2 border-foreground bg-background py-20 md:py-28">
      <div className="container">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-black md:text-4xl">{content.roleDivision.heading}</h2>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl border-thicker border-foreground bg-card p-8 shadow-hard">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold">{content.roleDivision.you.title}</h3>
                <img src={images.illustFilming.src} alt={images.illustFilming.alt} className="h-16 w-16 object-contain drop-shadow-md" />
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {content.roleDivision.you.items.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-accent font-bold text-lg">·</span> {item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border-thicker border-foreground bg-gold p-8 shadow-hard">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold">{content.roleDivision.we.title}</h3>
                <img src={images.illustBar.src} alt={images.illustBar.alt} className="h-16 w-16 object-contain drop-shadow-md" />
              </div>
              <ul className="space-y-3 text-foreground/70">
                {content.roleDivision.we.items.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-foreground font-bold text-lg">·</span> {item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* 5-step process — replaced full black with warm cocoa */}
    <section className="border-b-2 border-foreground bg-brand py-20 text-brand-foreground md:py-28">
      <div className="container">
        <FadeIn className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-black md:text-4xl">{content.steps.heading}</h2>
          <p className="mt-4 opacity-60">{content.steps.subheading}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-2xl space-y-4">
            {content.steps.items.map((s, idx) => (
              <div key={s.num} className="rounded-2xl border-2 border-brand-foreground/15 bg-brand-foreground/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-lg font-black text-gold">{s.num}</span>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                </div>
                <p className="mt-2 ml-14 text-sm opacity-60">{s.desc}</p>
              </div>
            ))}
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
          <Button asChild size="lg" className="mt-8 rounded-full border-2 border-foreground bg-foreground text-background shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
            <Link to="/kom-igang">{global.cta.primary}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
