import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import GumballDecorations from "@/components/GumballDecorations";
import { Quote, ArrowRight } from "lucide-react";
import { allCases } from "@/data/cases";
import { cases as content, global } from "@/data/content";

const Cases = () => {
  const [active, setActive] = useState("Alla");
  const filtered = active === "Alla" ? allCases : allCases.filter((c) => c.type === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-brand py-24 text-brand-foreground md:py-36">
        <GumballDecorations layout="hero-cases" light />
        <div className="container relative z-10">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">{content.hero.kicker}</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">{content.hero.heading}</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg opacity-70">{content.hero.body}</p>
          </FadeIn>
        </div>
      </section>

      {/* Featured quote */}
      <section className="border-b-2 border-foreground bg-gold py-16">
        <div className="container">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <Quote className="mx-auto mb-4 h-8 w-8 opacity-40" />
            <p className="text-xl font-bold italic md:text-2xl">&quot;{content.quote.text}&quot;</p>
            <p className="mt-4 text-sm opacity-60">{content.quote.author}</p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="border-b-2 border-foreground bg-background py-20 md:py-28">
        <div className="container">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {content.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border-thicker px-5 py-2 text-sm font-semibold transition-all ${
                  active === cat
                    ? "border-foreground bg-foreground text-background shadow-hard-sm"
                    : "border-foreground/30 text-foreground hover:border-foreground hover:shadow-hard-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.05}>
                <Link to={`/kundcase/${c.slug}`} className="group block">
                  <div className="flex h-full flex-col rounded-2xl border-thicker border-foreground bg-card shadow-hard transition-all group-hover:shadow-hard-lg group-hover:-translate-y-1 overflow-hidden">
                    {/* Case image */}
                    <div className="relative h-40 bg-blush/50 flex items-center justify-center overflow-hidden">
                      <img src={c.image.src} alt={c.image.alt} className="h-32 w-32 object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
                      <img src={c.sticker.src} alt={c.sticker.alt} className="absolute top-2 right-2 h-10 w-10 object-contain drop-shadow-sm rotate-12 opacity-70" />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block rounded-full border-2 border-foreground/20 px-3 py-0.5 text-xs font-medium text-muted-foreground">{c.type}</span>
                        <span className="text-xs text-muted-foreground">{c.location}</span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{c.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground flex-1">{c.challenge}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {c.stats.map((s) => (
                          <span key={s} className="rounded-lg bg-sage/15 border border-sage/30 px-2.5 py-1 text-xs font-semibold text-sage">{s}</span>
                        ))}
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent">
                        Läs hela caset <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20 text-center text-background">
        <div className="container mx-auto max-w-xl">
          <FadeIn>
            <h2 className="text-3xl font-black md:text-4xl">{content.cta.heading}</h2>
            <p className="mt-4 opacity-60">{content.cta.body}</p>
            <Button asChild size="lg" className="mt-8 rounded-full border-2 border-background bg-background text-foreground shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
              <Link to="/kom-igang">{global.cta.primary}</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
