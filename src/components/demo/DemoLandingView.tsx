import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Handshake,
  MessageCircle,
  Scissors,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";
import type { ReactNode } from "react";
import { GamePlanDisplay } from "../gameplan/GamePlanDisplay";
import { CustomerPlannerGrid, type CustomerPlannerSlot } from "./CustomerPlannerGrid";

export type DemoPreviewPayload = {
  demo: {
    id: string;
    companyName: string;
    contactName: string | null;
    contactEmail: string | null;
    tiktokHandle: string | null;
    tiktokProfilePicUrl: string | null;
    proposedConceptsPerWeek: number | null;
    proposedPriceOre: number | null;
    status: string;
    shareToken: string;
    customerId: string | null;
    logoUrl: string | null;
    previewNotes: string | null;
    previewSettings: Record<string, unknown>;
    previewMetrics: Record<string, unknown>;
    gamePlanText: string | null;
    gamePlanHtml: string | null;
    contentManager: {
      id: string | null;
      profileId: string | null;
      name: string;
      avatarUrl: string | null;
      color: string | null;
      city: string | null;
    };
  };
  concepts: CustomerPlannerSlot[];
};

export function DemoLandingView({ payload }: { payload: DemoPreviewPayload }) {
  const { demo, concepts } = payload;
  const greetingName = demo.contactName?.trim() || "friend";
  const conceptsPerWeek = demo.proposedConceptsPerWeek ?? 2;
  const cmName = demo.contentManager?.name?.trim() || "LeTrend";
  const mailSubject = encodeURIComponent(`Demo för ${demo.companyName}`);
  const mailBody = encodeURIComponent(
    `Hej LeTrend,\n\nVi tittade på demoförslaget för ${demo.companyName} och vill höra mer.\n\n`,
  );
  const priceLabel =
    typeof demo.proposedPriceOre === "number"
      ? `${Math.round(demo.proposedPriceOre / 100).toLocaleString("sv-SE")} kr/mån`
      : "Pris sätts efter scope";

  const metrics = demo.previewMetrics ?? {};
  const avgViews = readMetric(metrics["avg_views"]) ?? readMetric(metrics["averageViews"]);
  const followers = readMetric(metrics["followers"]) ?? readMetric(metrics["current_followers"]);
  const likeRate = readMetric(metrics["like_rate"]) ?? readMetric(metrics["likeRate"]);
  const engagement = readMetric(metrics["engagement_rate"]) ?? readMetric(metrics["avg_engagement"]);
  const hasGamePlan = Boolean(demo.gamePlanHtml || demo.gamePlanText);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-brand py-24 text-brand-foreground md:py-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold" />
          <div className="absolute bottom-[-8rem] left-[8%] h-60 w-60 rounded-full bg-blush" />
        </div>
        <div className="container relative z-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-gold">
            LeTrend · Demo för {demo.companyName}
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">En kort interaktiv demo.</h1>
          <div className="mt-6 max-w-2xl space-y-3 text-lg leading-relaxed opacity-80">
            <p>
              Hej {greetingName}. LeTrend är en marknadsföringstjänst för TikTok som kombinerar mänsklig kurering, ett
              tydligt veckoflöde och en plattform där ni ser vad som ska spelas in.
            </p>
            <p>
              Nedan visar vi hur er feed kan byggas: befintliga TikTok-signaler, kommande LeTrend-koncept och
              rekommenderad takt. För {demo.companyName} föreslår vi{" "}
              <strong className="text-gold">{conceptsPerWeek} koncept i veckan</strong>.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <StatChip label="Koncept / vecka" value={String(conceptsPerWeek)} />
            <StatChip label="Förslag" value={priceLabel} />
            <StatChip label="CM" value={cmName} />
          </div>
        </div>
      </section>

      {/* ═══ FEEDPLAN ═══ */}
      <section className="border-b-2 border-foreground bg-blush py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">Feedplan</p>
              <h2 className="text-3xl font-black md:text-4xl">Så här skulle er feed kunna se ut</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-foreground/70">
                <p>
                  LeTrend arbetar med kreativt bricolage: vi tar format, trender och bevis från verkliga klipp och gör
                  dem användbara för ert varumärke.
                </p>
                <p>
                  Feeden nedan hämtar innehåll från er Studio-plan. Historik och reconcilade TikTok-klipp används som
                  bevis, medan kommande LeTrend-koncept visar vad som bör produceras härnäst.
                </p>
                <p>Hovra över rutorna för rubrik, varför konceptet fungerar och TikTok-länken när den finns kopplad.</p>
              </div>
              <ContentManagerCard demo={demo} />
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border-thicker border-foreground bg-card/60 p-4 shadow-hard backdrop-blur-sm">
                <CustomerPlannerGrid slots={concepts} companyName={demo.companyName} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GAME PLAN ═══ */}
      <section className="border-b-2 border-foreground bg-mint/40 py-20 md:py-28">
        <div className="container">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">Game Plan</p>
              <h2 className="text-3xl font-black md:text-4xl">Våra första spaningar</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-foreground/70">
                <p>
                  Game Plan är arbetsdokumentet där er content manager samlar strategi, referenser, möjliga format och
                  vad vi vill testa först.
                </p>
                <p>
                  Previewn visar antingen ett demoanpassat AI-utkast, manuellt inskrivet material eller det
                  game-plan-dokument som redan finns på kundprofilen.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border-thicker border-foreground bg-card shadow-hard">
              <div className="flex items-center justify-between border-b-2 border-foreground/10 bg-muted/50 px-5 py-3">
                <span className="font-mono text-xs text-muted-foreground">
                  game-plan / {demo.companyName.toLowerCase().replace(/\s+/g, "-")}.md
                </span>
                <span className="font-mono text-xs text-muted-foreground">utkast</span>
              </div>
              <div className="min-h-[280px] p-6">
                {hasGamePlan ? (
                  demo.gamePlanHtml ? (
                    <GamePlanDisplay html={demo.gamePlanHtml} />
                  ) : (
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed">{demo.gamePlanText}</pre>
                  )
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Game Plan fylls på av er content manager innan länken skickas vidare.
                  </p>
                )}
                <div className="mt-5 flex items-center gap-2 border-t border-dashed border-foreground/20 pt-3">
                  <span className="inline-block h-3.5 w-0.5 bg-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">fortsätter skriva...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section className="border-b-2 border-foreground bg-gold/30 py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <MetricCard label="Snittvisningar" value={avgViews ?? "Live-data"} hint="TikTok / Studio" />
              <MetricCard label="Följare" value={followers ?? "Synkas"} hint="senaste snapshot" />
              <MetricCard label="Koncept i plan" value={String(concepts.length)} hint="från feed planner" />
              <MetricCard label="Engagemang" value={likeRate ?? engagement ?? "Signal"} hint="kvalitet före räckvidd" />
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">Datadrivet</p>
              <h2 className="text-3xl font-black md:text-4xl">Vi räknar på det som betyder något</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-foreground/70">
                <p>
                  Bra snittvisningar är trevligt, men säger inte allt. Vi tittar på återkommande publicering, engagemang
                  och vilka format som går att upprepa utan att tappa kvalitet.
                </p>
                <p>
                  När {demo.companyName} går från demo till kund uppdateras de här signalerna löpande från
                  Studio-flödet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROOF CARDS ═══ */}
      <section className="border-b-2 border-foreground bg-background py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            <ProofCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Kurerat, inte slumpat"
              body="Koncepten väljs efter er ton, era resurser och vilka signaler som redan finns i er feed."
            />
            <ProofCard
              icon={<TrendingUp className="h-5 w-5" />}
              title="Snabbare än byråtempo"
              body="När en idé börjar röra sig kan den omsättas till ett kundanpassat koncept utan produktionstung startsträcka."
            />
            <ProofCard
              icon={<Calendar className="h-5 w-5" />}
              title="Planen styr veckan"
              body="Feed plannern gör det tydligt vad som är nu, vad som kommer sen och vad som redan har publicerats."
            />
          </div>
        </div>
      </section>

      {/* ═══ MOBILE / AUTO-CLIP ═══ */}
      <section className="border-b-2 border-foreground bg-sage py-20 text-sage-foreground md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="/demo-auto-clip-phone.png"
                alt="LeTrend Auto-clip mobilflöde"
                className="w-full max-w-xs object-contain drop-shadow-2xl"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-sage-foreground/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Wand2 className="h-3 w-3" /> Kommer i abonnemanget
              </span>
              <h2 className="mt-5 text-3xl font-black md:text-4xl">Spela in scenerna, vi klipper resten</h2>
              <div className="mt-4 space-y-3 leading-relaxed opacity-80">
                <p>
                  Mobilflödet är tänkt att guida er genom varje scen i ett koncept. Ni spelar in det som behövs, LeTrend
                  hjälper med struktur, klippning och nästa steg.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: <Smartphone className="h-4 w-4" />, text: "Scenbaserad inspelning kopplad till feedplanen." },
                  {
                    icon: <Scissors className="h-4 w-4" />,
                    text: "Tydligare produktion utan att köpa ett stort byråpaket.",
                  },
                  {
                    icon: <Users className="h-4 w-4" />,
                    text: "Extra hjälp, UGC och samarbeten kan läggas till vid behov.",
                  },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm opacity-90">
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ UGC / AGENCY ═══ */}
      <section className="border-b-2 border-foreground bg-gold/20 py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-thicker border-foreground bg-card px-4 py-2 text-xs font-bold shadow-hard-sm">
                <Handshake className="h-3 w-3" /> Byrå-tillägg
              </span>
              <h2 className="mt-5 text-3xl font-black md:text-4xl">Samarbeten med UGC-kreatörer</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-foreground/70">
                <p>
                  När er egen feed inte räcker kan LeTrend matcha er med kreatörer som passar tonen, branschen och
                  budgeten.
                </p>
                <p>Ni godkänner samarbetet, vi hanterar brief, dialog, leverans och betalning.</p>
              </div>
            </div>
            <AgencyCard />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-brand py-20 text-brand-foreground md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-gold" />
          <div className="absolute bottom-[-6rem] right-[10%] h-56 w-56 rounded-full bg-blush" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-black md:text-4xl">
            Vill ni se hur det här fungerar i praktiken?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed opacity-70">
            Boka ett kort samtal så går vi igenom planen för {demo.companyName} och visar hur Studio-flödet blir en
            konkret veckorutin.
          </p>
          <a
            href={`mailto:hej@letrend.se?subject=${mailSubject}&body=${mailBody}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-brand-foreground bg-brand-foreground px-8 py-4 text-sm font-black uppercase tracking-widest text-brand shadow-hard transition-all hover:opacity-90 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <MessageCircle className="h-4 w-4" /> Boka samtal <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm opacity-60">
            <InlineCheck>30 minuter räcker</InlineCheck>
            <InlineCheck>Vi visar plattformen live</InlineCheck>
            <InlineCheck>Ingen bindning i samtalet</InlineCheck>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-foreground py-6 text-center text-xs text-muted-foreground">
        © LeTrend · Demo förberedd för {demo.companyName}
      </footer>
    </div>
  );
}

function ContentManagerCard({ demo }: { demo: DemoPreviewPayload["demo"] }) {
  const cm = demo.contentManager;
  const initial = cm.name?.[0]?.toUpperCase() ?? "L";
  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl border-thicker border-foreground bg-card p-4 shadow-hard-sm">
      {cm.avatarUrl ? (
        <img
          src={cm.avatarUrl}
          alt={`${cm.name}, content manager på LeTrend`}
          className="h-14 w-14 shrink-0 rounded-full border-2 border-foreground object-cover"
        />
      ) : (
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-lg font-black text-white"
          style={{ background: cm.color || "hsl(var(--brand))" }}
        >
          {initial}
        </div>
      )}
      <p className="text-sm leading-relaxed text-foreground/80">
        <strong className="text-foreground">{cm.name}</strong> är er content manager och ansvarar för att kurera feeden,
        justera koncepten och hålla planen levande.
        {cm.city ? <span className="text-muted-foreground"> · {cm.city}</span> : null}
      </p>
    </div>
  );
}

function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border-thicker border-foreground bg-card p-5 shadow-hard-sm">
      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-black text-brand">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function ProofCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl border-thicker border-foreground bg-card p-7 shadow-hard">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground">{icon}</div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function AgencyCard() {
  const creators = [
    { initials: "AK", color: "hsl(var(--gold))" },
    { initials: "ML", color: "hsl(var(--accent))" },
    { initials: "SR", color: "hsl(var(--brand))" },
  ];
  return (
    <div className="rounded-2xl border-thicker border-foreground bg-card p-6 shadow-hard">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/20 bg-muted px-3 py-1.5 text-xs font-bold">
          <Sparkles className="h-3 w-3" /> Nytt samarbete
        </span>
        <div className="flex">
          {creators.map((c, i) => (
            <div
              key={c.initials}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-black text-white"
              style={{ background: c.color, marginLeft: i > 0 ? "-8px" : "0" }}
            >
              {c.initials}
            </div>
          ))}
        </div>
      </div>
      <h3 className="mt-5 text-xl font-bold">Kreatörer matchade till er bransch</h3>
      <div className="mt-4 space-y-2">
        {[
          { label: "Kategori", value: "Lifestyle / Produkt" },
          { label: "Format", value: "UGC · Unboxing · Testimonial" },
          { label: "Leveranstid", value: "5–10 arbetsdagar" },
        ].map((row) => (
          <div key={row.label} className="flex justify-between border-b border-foreground/10 pb-2 text-sm">
            <span className="text-muted-foreground">{row.label}</span>
            <span className="font-bold text-foreground">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-brand-foreground/25 bg-brand-foreground/10 px-4 py-2.5 backdrop-blur-sm">
      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-foreground/60">{label}</span>
      <span className="text-base font-black text-brand-foreground">{value}</span>
    </div>
  );
}

function InlineCheck({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
      {children}
    </span>
  );
}

function readMetric(value: unknown): string | null {
  if (typeof value === "number" && Number.isFinite(value)) return value.toLocaleString("sv-SE");
  if (typeof value === "string" && value.trim()) return value.trim();
  return null;
}
