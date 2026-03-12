import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { images } from "@/data/images";
import { index as content, global } from "@/data/content";
import TikTokMockup from "@/components/TikTokMockup";
import GumballDecorations from "@/components/GumballDecorations";
import LogoTicker from "@/components/LogoTicker";
import {
  Lightbulb, Target, CalendarDays, Video, TrendingUp,
  ArrowRight, CheckCircle2, XCircle, Cpu, Users
} from "lucide-react";

const moduleIcons = [Lightbulb, Target, CalendarDays, Video, TrendingUp];
const aiIcons = [Cpu, TrendingUp, Users, Lightbulb];

const Index = () => {
  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-brand py-24 text-brand-foreground md:py-36">
        <GumballDecorations layout="hero-home" light />
        <div className="container relative z-10">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-gold">
              {content.hero.kicker}
            </p>
            <h1 className="text-5xl font-black leading-[1.05] md:text-7xl lg:text-[5.5rem]">
              {content.hero.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg opacity-80">
              {content.hero.body}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-full border-2 border-brand-foreground bg-brand-foreground text-brand shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
                <Link to="/hur-det-fungerar">{global.cta.secondary}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-thicker border-brand-foreground/50 bg-transparent text-brand-foreground px-8 hover:bg-brand-foreground/10 transition-all">
                <Link to="/kom-igang">{global.cta.primary}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ LOGO TICKER ═══ */}
      <LogoTicker />

      {/* ═══ FEATURE BENTO ═══ */}
      <section className="border-b-2 border-foreground py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            <FadeIn className="md:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-2xl border-thicker border-foreground bg-card p-8 shadow-hard md:flex-row md:items-center md:gap-8">
                <div className="flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">{content.featureBento.kicker}</p>
                  <h2 className="text-3xl font-bold md:text-4xl">{content.featureBento.heading}</h2>
                  <p className="mt-3 text-muted-foreground">{content.featureBento.body}</p>
                </div>
                <img src={images.illustFilming.src} alt={images.illustFilming.alt} className="mt-6 h-36 w-36 object-contain drop-shadow-md md:mt-0 md:h-44 md:w-44" />
              </div>
            </FadeIn>

            <div className="flex flex-col gap-5">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border-thicker border-foreground bg-sage/15 p-6 shadow-hard-sm">
                  <h3 className="text-xl font-bold">{content.featureBento.cards[0].title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{content.featureBento.cards[0].body}</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-2xl border-thicker border-foreground bg-gold/40 p-6 shadow-hard-sm">
                  <h3 className="text-xl font-bold">{content.featureBento.cards[1].title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{content.featureBento.cards[1].body}</p>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border-thicker border-foreground bg-blush p-6 shadow-hard-sm">
                <h3 className="text-xl font-bold">{content.featureBento.cards[2].title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{content.featureBento.cards[2].body}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-2">
              <div className="flex items-center justify-between rounded-2xl border-thicker border-foreground bg-foreground p-8 text-background shadow-hard-accent">
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">{content.featureBento.problemHeading}</h3>
                  <p className="mt-2 text-sm opacity-60">{content.featureBento.problemBody}</p>
                  <Link to="/hur-det-fungerar" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline">
                    Se hur <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="border-b-2 border-foreground bg-gold py-14">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            {content.stats.items.map((s) => (
              <AnimatedCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-foreground/50 max-w-lg mx-auto">
            {content.stats.disclaimer}
          </p>
        </div>
      </section>

      {/* ═══ POSITIONERING ═══ */}
      <section className="border-b-2 border-foreground py-20 md:py-28">
        <div className="container">
          <FadeIn className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-black md:text-5xl">{content.positioning.heading}</h2>
            <p className="mt-3 text-muted-foreground">{content.positioning.subheading}</p>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {content.positioning.columns.map((col, i) => (
              <FadeIn key={col.title} delay={i * 0.1}>
                <div className={`h-full rounded-2xl border-thicker border-foreground p-7 shadow-hard ${col.highlight ? "bg-gold ring-2 ring-foreground ring-offset-2 ring-offset-background" : "bg-card"}`}>
                  <h3 className={`text-xl font-bold mb-5 ${col.highlight ? "text-foreground" : "text-muted-foreground"}`}>{col.title}</h3>
                  <ul className="space-y-3 text-sm">
                    {col.items.map((item) => (
                      <li key={item} className={`flex items-start gap-2.5 ${col.highlight ? "" : "text-muted-foreground"}`}>
                        {col.highlight ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                        ) : (
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-foreground/20" />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIKTOK PREVIEW ═══ */}
      <section className="relative border-b-2 border-foreground bg-blush py-20 md:py-28 overflow-hidden">
        <GumballDecorations layout="tiktok-section" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn className="flex justify-center gap-4">
              <TikTokMockup username="@urbanslice" caption="POV: du beställer vår hemliga off-menu pizza 🍕🔥" likes="14.2K" comments="892" bgColor="bg-sage" />
              <TikTokMockup username="@vesperbar" caption="Fredagskväll ✨ Negroni sbagliato, med prosecco i den" likes="8.7K" comments="341" bgColor="bg-brand" className="hidden md:flex mt-8" profileColor="bg-gold" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">{content.tiktokPreview.kicker}</p>
              <h2 className="text-3xl font-black md:text-4xl">{content.tiktokPreview.heading}</h2>
              <p className="mt-4 text-foreground/70">{content.tiktokPreview.body}</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={images.illustCreator.src} alt={images.illustCreator.alt} className="h-20 w-20 object-contain drop-shadow-md" />
                <div className="inline-flex items-center gap-3 rounded-full border-thicker border-foreground bg-card px-5 py-2.5 shadow-hard-sm">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold">{content.tiktokPreview.badge}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ AI + HUMAN ═══ */}
      <section className="relative border-b-2 border-foreground bg-foreground py-20 text-background md:py-28 overflow-hidden">
        <GumballDecorations layout="ai-section" light />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gold">{content.aiHuman.kicker}</p>
              <h2 className="text-3xl font-black md:text-4xl">{content.aiHuman.heading}</h2>
              <p className="mt-4 opacity-60">{content.aiHuman.body}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {content.aiHuman.features.map((item, idx) => {
                  const Icon = aiIcons[idx];
                  return (
                    <div key={item.label} className="rounded-xl border-2 border-background/15 bg-background/5 p-4 backdrop-blur-sm">
                      <Icon className="mb-2 h-5 w-5 text-gold" />
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="mt-1 text-xs opacity-50">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
            <FadeIn delay={0.15} direction="right" className="flex justify-center">
              <img src={images.illustTeam.src} alt={images.illustTeam.alt} className="h-64 w-64 object-contain drop-shadow-xl md:h-80 md:w-80" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM PREVIEW ═══ */}
      <section className="border-b-2 border-foreground bg-card py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn className="order-2 md:order-1 flex justify-center">
              <img src={images.illustPlatform.src} alt={images.illustPlatform.alt} className="h-64 w-64 object-contain drop-shadow-xl md:h-80 md:w-80" />
            </FadeIn>
            <FadeIn delay={0.1} className="order-1 md:order-2">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">{content.platformPreview.kicker}</p>
              <h2 className="text-3xl font-black md:text-4xl">{content.platformPreview.heading}</h2>
              <div className="mt-8 space-y-3">
                {content.platformPreview.modules.map((m, idx) => {
                  const Icon = moduleIcons[idx];
                  return (
                    <div key={m.title} className="flex items-center gap-3 rounded-xl border-thicker border-foreground/20 bg-background px-4 py-3 transition-all hover:border-foreground hover:shadow-hard-sm">
                      <Icon className="h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <span className="text-sm font-semibold">{m.title}</span>
                        <span className="ml-2 text-xs text-muted-foreground">{m.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/plattformen" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                {content.platformPreview.linkText} <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="relative border-b-2 border-foreground bg-sage py-20 text-sage-foreground md:py-28 overflow-hidden">
        <GumballDecorations layout="process-section" light />
        <div className="container relative z-10">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl font-black md:text-5xl">{content.process.heading}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-4xl grid gap-4 md:grid-cols-5">
              {content.process.steps.map((s, idx) => (
                <div key={s.num} className="rounded-2xl border-thicker border-foreground/30 bg-white/10 p-5 text-center shadow-hard-sm backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5">
                  <p className="text-2xl font-black">{s.num}</p>
                  <p className="mt-2 text-sm font-semibold">{s.title}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full border-thicker border-sage-foreground/30 bg-transparent text-sage-foreground px-8 hover:bg-white/10 transition-all">
              <Link to="/hur-det-fungerar">{content.process.linkText}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ CASE CARDS ═══ */}
      <section className="border-b-2 border-foreground bg-background py-20 md:py-28">
        <div className="container">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">{content.cases.kicker}</p>
            <h2 className="text-3xl font-black md:text-4xl">{content.cases.heading}</h2>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {content.cases.items.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.1}>
                <Link to={`/kundcase/${c.slug}`} className="group block">
                  <div className="h-full rounded-2xl border-thicker border-foreground bg-card p-7 shadow-hard transition-all group-hover:shadow-hard-lg group-hover:-translate-y-1">
                    <span className="inline-block rounded-full border-2 border-foreground/20 px-3 py-0.5 text-xs font-medium text-muted-foreground">{c.type}</span>
                    <h3 className="mt-4 text-xl font-bold group-hover:text-accent transition-colors">{c.name}</h3>
                    <p className="mt-3 inline-block rounded-lg bg-sage/15 border border-sage/30 px-3 py-1.5 text-sm font-semibold text-sage">{c.stat}</p>
                    <p className="mt-4 flex items-center gap-1 text-xs font-bold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Läs case <ArrowRight className="h-3 w-3" />
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full border-thicker border-foreground px-8 shadow-hard-sm hover:shadow-hard transition-all">
              <Link to="/kundcase">{content.cases.linkText}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ PRICING TEASER ═══ */}
      <section className="border-b-2 border-foreground bg-gold/30 py-20 md:py-28">
        <div className="container">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">{content.pricingTeaser.kicker}</p>
            <h2 className="text-3xl font-black md:text-4xl">{content.pricingTeaser.heading}</h2>
            <p className="mt-4 text-foreground/60">{content.pricingTeaser.body}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto mt-10 grid max-w-lg gap-3">
              {content.pricingTeaser.bullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sage" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full border-2 border-foreground bg-foreground text-background shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
              <Link to="/kom-igang">{global.cta.primary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="border-b-2 border-foreground bg-card py-20 md:py-28">
        <div className="container">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">{content.faq.heading}</h2>
          </FadeIn>
          <div className="mx-auto mt-14 max-w-2xl">
            <Accordion type="single" collapsible className="space-y-3">
              {content.faq.items.map((item, i) => (
                <AccordionItem key={i} value={String(i)} className="rounded-xl border-thicker border-foreground px-6 bg-background shadow-hard-sm">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <span className="font-semibold">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative border-b-2 border-foreground bg-accent py-24 text-accent-foreground md:py-32 overflow-hidden">
        <GumballDecorations layout="cta-section" light />
        <div className="container relative z-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <img src={images.logoSvg.src} alt="" className="mx-auto mb-8 h-14 w-auto brightness-0 invert opacity-40" />
            <h2 className="text-4xl font-black md:text-5xl">{content.finalCta.heading}</h2>
            <p className="mt-4 opacity-80">{content.finalCta.body}</p>
            <Button asChild size="lg" className="mt-8 rounded-full border-2 border-accent-foreground bg-accent-foreground text-accent shadow-hard px-10 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
              <Link to="/kom-igang">{global.cta.primary}</Link>
            </Button>
            <p className="mt-3 text-xs opacity-60">{content.finalCta.subtext}</p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
