import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { pricing as content, global } from "@/data/content";

const Pricing = () => (
  <Layout>
    {/* Hero */}
    <section className="border-b-2 border-foreground bg-blush py-24 md:py-36">
      <div className="container">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">{content.hero.kicker}</p>
          <h1 className="text-4xl font-black md:text-5xl">{content.hero.heading}</h1>
          <p className="mt-4 text-foreground/60">{content.hero.body}</p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {content.plans.map((p) => (
            <FadeIn key={p.name}>
              <div className={`flex flex-col h-full rounded-2xl border-thicker border-foreground p-7 shadow-hard ${p.highlight ? "bg-gold ring-2 ring-foreground ring-offset-2 ring-offset-background relative" : "bg-card"}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-2 border-foreground bg-foreground px-4 py-1 text-xs font-bold text-background">
                    Populärast
                  </div>
                )}
                <h3 className="text-2xl font-black">{p.name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-black">{p.price}</span>
                  {p.unit && <span className="ml-1 text-sm text-foreground/50">{p.unit}</span>}
                </div>
                <p className="mt-2 text-sm text-foreground/60">{p.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`mt-8 w-full rounded-full border-2 border-foreground transition-all ${p.highlight ? "bg-foreground text-background shadow-hard-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px]" : "bg-background text-foreground hover:bg-foreground hover:text-background"}`}>
                  <Link to="/kom-igang">{p.name === "Custom" ? "Kontakta oss" : global.cta.primary}</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Always included */}
        <FadeIn>
          <div className="mx-auto mt-16 max-w-md text-center">
            <h3 className="text-xl font-black">Alltid ingår</h3>
            <ul className="mt-6 space-y-2 text-sm text-foreground/60">
              {content.alwaysIncluded.map((f) => (
                <li key={f} className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-sage" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* CTA — warm cocoa instead of full black */}
    <section className="bg-brand py-20 text-center text-brand-foreground">
      <div className="container mx-auto max-w-xl">
        <FadeIn>
          <h2 className="text-3xl font-black">{content.cta.heading}</h2>
          <p className="mt-4 opacity-60">{content.cta.body}</p>
          <Button asChild size="lg" className="mt-8 rounded-full border-2 border-brand-foreground bg-brand-foreground text-brand shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
            <Link to="/kom-igang">{global.cta.primary}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Pricing;
