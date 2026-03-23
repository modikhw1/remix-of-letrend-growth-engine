import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import GumballDecorations from "@/components/GumballDecorations";
import { getStarted as content, pricing, global } from "@/data/content";

const GetStarted = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero + Form */}
      <section className="relative border-b-2 border-foreground bg-blush py-24 md:py-36 overflow-hidden">
        <GumballDecorations layout="tiktok-section" />
        <div className="container relative z-10">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">{content.hero.kicker}</p>
              <h1 className="text-4xl font-black leading-tight md:text-5xl">{content.hero.heading}</h1>
              <p className="mt-6 text-lg text-foreground/60">{content.hero.body}</p>

              <div className="mt-10 rounded-2xl border-thicker border-foreground bg-gold p-7 shadow-hard">
                <h3 className="text-lg font-bold">{content.callInfo.heading}</h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                  {content.callInfo.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-foreground font-bold">→</span> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-sage" /> {global.trust.noObligation}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-sage" /> {global.trust.responseTime}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex h-full items-center justify-center rounded-2xl border-thicker border-foreground bg-gold/40 p-12 text-center shadow-hard">
                  <div>
                    <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-sage" />
                    <h2 className="text-2xl font-black">{content.form.thankYouHeading}</h2>
                    <p className="mt-3 text-foreground/70">{content.form.thankYouBody}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border-thicker border-foreground bg-card p-8 shadow-hard">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">{content.form.nameLabel}</Label>
                    <Input id="name" placeholder={content.form.namePlaceholder} required className="rounded-lg border-thicker" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business" className="font-semibold">{content.form.businessLabel}</Label>
                    <Input id="business" placeholder={content.form.businessPlaceholder} required className="rounded-lg border-thicker" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">{content.form.emailLabel}</Label>
                    <Input id="email" type="email" placeholder={content.form.emailPlaceholder} required className="rounded-lg border-thicker" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">{content.form.messageLabel}</Label>
                    <Textarea id="message" placeholder={content.form.messagePlaceholder} rows={4} className="rounded-lg border-thicker" />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full border-2 border-foreground bg-foreground text-background shadow-hard-sm transition-all active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                    {content.form.submitLabel}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">{content.form.submitSubtext}</p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-b-2 border-foreground bg-background py-20 md:py-28">
        <div className="container">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black">Flexibla nivåer</h2>
            <p className="mt-4 text-foreground/60">Priserna börjar från 2 000 kr/mån.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-3">
              {pricing.plans.map((p) => (
                <div key={p.name} className={`rounded-2xl border-thicker border-foreground p-7 shadow-hard ${p.highlight ? "bg-gold" : "bg-card"}`}>
                  <h3 className="text-xl font-bold text-center">{p.name}</h3>
                  <p className="mt-2 text-lg font-black text-center">{p.priceFormatted}</p>
                  <ul className="mt-4 space-y-2 text-xs text-foreground/70">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-sage" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
          <p className="mt-8 text-center text-sm text-foreground/50">
            Alla nivåer inkluderar plattform, manager och onboarding. {global.trust.noBindings}.
          </p>
        </div>
      </section>

      {/* FAQ mini */}
      <section className="border-b-2 border-foreground bg-card py-20 md:py-28">
        <div className="container">
          <FadeIn className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-black text-center mb-10">{content.faqMini.heading}</h2>
            <div className="space-y-4">
              {content.faqMini.items.map((item) => (
                <div key={item.q} className="rounded-xl border-thicker border-foreground bg-background p-5 shadow-hard-sm">
                  <h4 className="font-bold text-sm">{item.q}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
