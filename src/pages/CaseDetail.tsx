import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import TikTokMockup from "@/components/TikTokMockup";
import TikTokProfileMockup from "@/components/TikTokProfileMockup";
import {
  ArrowLeft, Quote, CheckCircle2, Clock, MapPin, Tag,
  TrendingUp, Target, Lightbulb, Clapperboard, BarChart3,
  ArrowRight
} from "lucide-react";
import { allCases } from "@/data/cases";
import GumballDecorations from "@/components/GumballDecorations";

const iconMap: Record<string, typeof TrendingUp> = {
  Restaurang: Clapperboard,
  Bar: Lightbulb,
  Café: Target,
};

const tiktokDataMap: Record<string, { username: string; caption: string; likes: string; comments: string; followers: string; bio: string; bgColor: string }> = {
  "urban-slice": { username: "@urbanslice", caption: "POV: du beställer vår hemliga off-menu pizza 🍕🔥", likes: "14.2K", comments: "892", followers: "4.2K", bio: "Stockholms bästa pizza. Punkt. 🍕", bgColor: "bg-sage" },
  "vesper-social-bar": { username: "@vesperbar", caption: "Fredagskväll ✨ Negroni sbagliato, med prosecco i den", likes: "8.7K", comments: "341", followers: "3.1K", bio: "Cocktails & good vibes 🍸 Gbg", bgColor: "bg-brand" },
  "kvarterskafe-storstad": { username: "@kvarterskafe", caption: "Morgonrutinen ☕ Från bönor till kopp", likes: "5.1K", comments: "203", followers: "4.2K", bio: "Kaffe, böcker & lugn 📖☕ Malmö", bgColor: "bg-accent" },
  "trattoria-maggio": { username: "@trattoriamaggio", caption: "Så gör vi vår pasta från grunden 🇮🇹🍝", likes: "11.3K", comments: "567", followers: "2.8K", bio: "Äkta italienskt hantverk. Uppsala 🇮🇹", bgColor: "bg-sage" },
  "neon-nights": { username: "@neonnights", caption: "Cocktail of the week: Smoky Old Fashioned 🥃", likes: "6.4K", comments: "289", followers: "3.5K", bio: "Craft cocktails. Dark vibes. Malmö 🌙", bgColor: "bg-brand" },
  "bokcafeet": { username: "@bokcafeet", caption: "BookTok-rekommendationen denna vecka 📚✨", likes: "3.2K", comments: "156", followers: "1.9K", bio: "Böcker + kaffe = ❤️ Linköping", bgColor: "bg-brand" },
};

const CaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseData = allCases.find((c) => c.slug === slug);

  if (!caseData) return <Navigate to="/kundcase" replace />;

  const TypeIcon = iconMap[caseData.type] || Tag;
  const tiktok = tiktokDataMap[caseData.slug] || tiktokDataMap["urban-slice"];

  const sections = [
    { label: "Utgångsläge", title: "Utmaningen", text: caseData.challenge, icon: Target, color: "bg-background" },
    { label: "Mål", title: "Vad vi ville uppnå", text: caseData.goal, icon: Lightbulb, color: "bg-gold/30" },
    { label: "Kreativ riktning", title: "Strategin", text: caseData.direction, icon: Clapperboard, color: "bg-background" },
    { label: "Genomförande", title: "Hur vi arbetade", text: caseData.execution, icon: BarChart3, color: "bg-blush/40" },
  ];

  return (
    <Layout>
      {/* Back link */}
      <section className="border-b-2 border-foreground py-4">
        <div className="container">
          <Link
            to="/kundcase"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> Alla kundcase
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-brand py-20 md:py-32 text-brand-foreground">
        <GumballDecorations layout="case-detail" light />
        <div className="container relative z-10">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Kundcase
            </p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              {caseData.name}
            </h1>
            {caseData.quote && (
              <p className="mx-auto mt-6 max-w-xl text-lg opacity-60 italic">
                &quot;{caseData.quote.text}&quot;
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Meta info card */}
      <section className="border-b-2 border-foreground bg-gold/30 py-10">
        <div className="container">
          <FadeIn className="mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: TypeIcon, label: "Typ", value: caseData.type },
                { icon: MapPin, label: "Plats", value: caseData.location },
                { icon: Clock, label: "Tidsperiod", value: caseData.timeline },
                { icon: TrendingUp, label: "Effekt", value: caseData.stats[0], valueClass: "text-sage" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-thicker border-foreground bg-card shadow-hard-sm">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className={`font-bold text-sm leading-snug ${item.valueClass || ""}`}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case sections */}
      {sections.map((section, i) => (
        <section
          key={section.label}
          className={`border-b-2 border-foreground py-16 md:py-20 ${section.color}`}
        >
          <div className="container">
            <FadeIn className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border-thicker border-foreground bg-card shadow-hard-sm">
                  <section.icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {section.label}
                </p>
              </div>
              <h2 className="text-3xl font-black md:text-4xl">{section.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/70">
                {section.text}
              </p>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* TikTok presence — live mockups */}
      <section className="border-b-2 border-foreground bg-blush py-16 md:py-24">
        <div className="container">
          <FadeIn className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">TikTok-närvaro</p>
            <h2 className="text-3xl font-black md:text-4xl">Så ser det ut i praktiken</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-6">
              <TikTokMockup
                username={tiktok.username}
                caption={tiktok.caption}
                likes={tiktok.likes}
                comments={tiktok.comments}
                bgColor={tiktok.bgColor}
              />
              <TikTokProfileMockup
                username={tiktok.username}
                displayName={caseData.name}
                followers={tiktok.followers}
                bio={tiktok.bio}
                profileColor="bg-accent"
                className="hidden sm:flex"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Before / After — warm cocoa instead of black */}
      <section className="border-b-2 border-foreground bg-brand py-16 text-brand-foreground md:py-24">
        <div className="container">
          <FadeIn className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-black md:text-4xl">Före &amp; efter LeTrend</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mx-auto max-w-3xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-brand-foreground/20 bg-brand-foreground/8 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-foreground/10 px-3 py-1">
                  <div className="h-2 w-2 rounded-full bg-brand-foreground/40" />
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-foreground/60">Före</p>
                </div>
                <p className="text-brand-foreground/70 leading-relaxed">{caseData.challenge}</p>
              </div>
              <div className="rounded-2xl border-2 border-gold/40 bg-gold/10 p-6 backdrop-blur-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">Efter</p>
                </div>
                <p className="text-brand-foreground/80 leading-relaxed">{caseData.result}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseData.stats.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-sage/20 px-3 py-1 text-xs font-bold text-sage">
                      <CheckCircle2 className="h-3 w-3" /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Result stats */}
      <section className="border-b-2 border-foreground bg-gold py-16 md:py-20">
        <div className="container">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-foreground/50 mb-8">
              Resultat i siffror
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {caseData.stats.map((s) => (
                <div key={s} className="rounded-2xl border-thicker border-foreground bg-card p-6 text-center shadow-hard">
                  <p className="text-3xl font-black text-sage md:text-4xl">{s}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quote */}
      {caseData.quote && (
        <section className="relative overflow-hidden border-b-2 border-foreground bg-sage py-20 text-sage-foreground md:py-28">
          <GumballDecorations layout="minimal" light />
          <div className="container relative z-10">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <Quote className="mx-auto mb-6 h-10 w-10 opacity-40" />
              <p className="text-2xl font-black italic leading-snug md:text-3xl">
                &quot;{caseData.quote.text}&quot;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full border-thicker border-foreground bg-gold" />
                <div className="text-left">
                  <p className="font-bold">{caseData.quote.author}</p>
                  <p className="text-sm opacity-70">{caseData.quote.role}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-background py-20 text-center md:py-28">
        <div className="container mx-auto max-w-xl">
          <FadeIn>
            <h2 className="text-3xl font-black md:text-4xl">Vill ni se liknande resultat?</h2>
            <p className="mt-4 text-muted-foreground">
              Boka ett samtal så visar vi hur LeTrend kan fungera för just er verksamhet.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full border-2 border-foreground bg-foreground text-background shadow-hard px-8 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              <Link to="/kom-igang">
                Boka ett samtal <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default CaseDetail;
