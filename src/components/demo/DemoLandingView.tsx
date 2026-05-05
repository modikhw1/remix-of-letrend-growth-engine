import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Handshake,
  MessageCircle,
  Mic,
  Scissors,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
} from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import { GamePlanDisplay } from '../gameplan/GamePlanDisplay';
import { CustomerPlannerGrid, type CustomerPlannerSlot } from './CustomerPlannerGrid';

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

const palette = {
  cream: '#FAF8F5',
  paper: '#FFFFFF',
  ink: '#1F1A14',
  brown: '#4A2F18',
  brownSoft: '#6B4423',
  gold: '#C9A961',
  goldDeep: '#8B6914',
  blush: '#F4E4D8',
  sage: '#DCE6D5',
  mint: '#E6EFE5',
  line: 'rgba(74,47,24,0.12)',
  lineStrong: 'rgba(74,47,24,0.22)',
  textMuted: '#7D6E5D',
};

const FONT_SANS = "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_SERIF = "Georgia, 'Times New Roman', serif";
const FONT_MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";

const sectionStyle = {
  borderBottom: `1px solid ${palette.lineStrong}`,
} satisfies CSSProperties;

export function DemoLandingView({ payload }: { payload: DemoPreviewPayload }) {
  const { demo, concepts } = payload;
  const slots = concepts;
  const greetingName = demo.contactName?.trim() || 'friend';
  const conceptsPerWeek = demo.proposedConceptsPerWeek ?? 2;
  const cmName = demo.contentManager?.name?.trim() || 'LeTrend';
  const mailSubject = encodeURIComponent(`Demo för ${demo.companyName}`);
  const mailBody = encodeURIComponent(
    `Hej LeTrend,\n\nVi tittade på demoförslaget för ${demo.companyName} och vill höra mer.\n\n`,
  );
  const priceLabel =
    typeof demo.proposedPriceOre === 'number'
      ? `${Math.round(demo.proposedPriceOre / 100).toLocaleString('sv-SE')} kr/mån`
      : 'Pris sätts efter scope';

  return (
    <main
      style={{
        minHeight: '100vh',
        background: palette.cream,
        color: palette.ink,
        fontFamily: FONT_SANS,
      }}
    >
      <section
        style={{
          ...sectionStyle,
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(145deg, ${palette.brown} 0%, #2D1B0F 72%)`,
          color: palette.cream,
          padding: '88px 0 92px',
        }}
      >
        <Atmosphere />
        <div style={containerStyle(920)}>
          <p style={eyebrowStyle(palette.gold)}>LeTrend · Demo för {demo.companyName}</p>
          <h1
            style={{
              margin: 0,
              maxWidth: 780,
              fontFamily: FONT_SERIF,
              fontSize: 'clamp(42px, 7vw, 76px)',
              lineHeight: 0.98,
              letterSpacing: '-0.045em',
            }}
          >
            En kort interaktiv demo.
          </h1>
          <div
            style={{
              marginTop: 28,
              maxWidth: 720,
              display: 'grid',
              gap: 14,
              color: 'rgba(250,248,245,0.86)',
              fontSize: 17,
              lineHeight: 1.68,
            }}
          >
            <p style={{ margin: 0 }}>
              Hej {greetingName}. LeTrend är en marknadsföringstjänst för TikTok som kombinerar
              mänsklig kurering, ett tydligt veckoflöde och en plattform där ni ser vad som ska
              spelas in.
            </p>
            <p style={{ margin: 0 }}>
              Nedan visar vi hur er feed kan byggas: befintliga TikTok-signaler, kommande
              LeTrend-koncept och rekommenderad takt. För {demo.companyName} föreslår vi{' '}
              <strong style={{ color: palette.gold }}>{conceptsPerWeek} koncept i veckan</strong>.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 }}>
            <StatChip label="Koncept / vecka" value={String(conceptsPerWeek)} />
            <StatChip label="Förslag" value={priceLabel} />
            <StatChip label="CM" value={cmName} />
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: palette.blush, padding: '72px 0' }}>
        <div style={containerStyle(1100)}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 5fr) minmax(320px, 7fr)',
              gap: 56,
              alignItems: 'center',
            }}
            className="demo-preview-two-col"
          >
            <div>
              <p style={eyebrowStyle(palette.goldDeep)}>Feedplan</p>
              <h2 style={sectionHeadingStyle}>Så här skulle er feed kunna se ut</h2>
              <div style={bodyCopyStackStyle}>
                <p>
                  LeTrend arbetar med kreativt bricolage: vi tar format, trender och bevis från
                  verkliga klipp och gör dem användbara för ert varumärke.
                </p>
                <p>
                  Feeden nedan hämtar innehåll från er Studio-plan. Historik och reconcilade
                  TikTok-klipp används som bevis, medan kommande LeTrend-koncept visar vad som bör
                  produceras härnäst.
                </p>
                <p>
                  Hovra över rutorna för rubrik, varför konceptet fungerar och TikTok-länken när
                  den finns kopplad.
                </p>
              </div>
              <ContentManagerCard demo={demo} />
            </div>

            <div
              style={{
                maxWidth: 440,
                width: '100%',
                margin: '0 auto',
                border: `1px solid ${palette.lineStrong}`,
                background: 'rgba(255,255,255,0.54)',
                borderRadius: 28,
                padding: 16,
                boxShadow: '0 28px 60px rgba(74,47,24,0.16)',
              }}
            >
              <CustomerPlannerGrid slots={slots} companyName={demo.companyName} />
            </div>
          </div>
        </div>
      </section>

      <GamePlanSection demo={demo} fontSerif={FONT_SERIF} fontMono={FONT_MONO} />

      <MetricsSection demo={demo} conceptCount={slots.length} fontSerif={FONT_SERIF} />

      <section style={{ ...sectionStyle, background: palette.paper, padding: '72px 0' }}>
        <div style={containerStyle(1000)}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 18,
            }}
            className="demo-preview-card-grid"
          >
            <ProofCard
              icon={<Sparkles size={20} />}
              title="Kurerat, inte slumpat"
              body="Koncepten väljs efter er ton, era resurser och vilka signaler som redan finns i er feed."
              fontSerif={FONT_SERIF}
            />
            <ProofCard
              icon={<TrendingUp size={20} />}
              title="Snabbare än byråtempo"
              body="När en idé börjar röra sig kan den omsättas till ett kundanpassat koncept utan produktionstung startsträcka."
              fontSerif={FONT_SERIF}
            />
            <ProofCard
              icon={<Calendar size={20} />}
              title="Planen styr veckan"
              body="Feed plannern gör det tydligt vad som är nu, vad som kommer sen och vad som redan har publicerats."
              fontSerif={FONT_SERIF}
            />
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: palette.sage, padding: '76px 0' }}>
        <div
          style={{
            ...containerStyle(980),
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 4fr) minmax(0, 5fr)',
            gap: 56,
            alignItems: 'center',
          }}
          className="demo-preview-two-col"
        >
          <PhoneMock />
          <div>
            <Pill>
              <Wand2 size={13} /> Kommer i abonnemanget
            </Pill>
            <h2 style={{ ...sectionHeadingStyle, marginTop: 16 }}>
              Spela in scenerna, vi klipper resten
            </h2>
            <div style={bodyCopyStackStyle}>
              <p>
                Mobilflödet är tänkt att guida er genom varje scen i ett koncept. Ni spelar in det
                som behövs, LeTrend hjälper med struktur, klippning och nästa steg.
              </p>
            </div>
            <FeatureList
              items={[
                { icon: <Smartphone size={16} />, text: 'Scenbaserad inspelning kopplad till feedplanen.' },
                { icon: <Scissors size={16} />, text: 'Tydligare produktion utan att köpa ett stort byråpaket.' },
                { icon: <Users size={16} />, text: 'Extra hjälp, UGC och samarbeten kan läggas till vid behov.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: 'rgba(201,169,97,0.22)', padding: '72px 0' }}>
        <div
          style={{
            ...containerStyle(980),
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 5fr) minmax(280px, 5fr)',
            gap: 42,
            alignItems: 'center',
          }}
          className="demo-preview-two-col"
        >
          <div>
            <Pill>
              <Handshake size={13} /> Byrå-tillägg
            </Pill>
            <h2 style={{ ...sectionHeadingStyle, marginTop: 16 }}>
              Samarbeten med UGC-kreatörer
            </h2>
            <div style={bodyCopyStackStyle}>
              <p>
                När er egen feed inte räcker kan LeTrend matcha er med kreatörer som passar tonen,
                branschen och budgeten.
              </p>
              <p>Ni godkänner samarbetet, vi hanterar brief, dialog, leverans och betalning.</p>
            </div>
          </div>
          <AgencyCard fontSerif={FONT_SERIF} />
        </div>
      </section>

      <section style={{ padding: '76px 0 64px', background: palette.brown, color: palette.cream }}>
        <div style={{ ...containerStyle(780), textAlign: 'center' }}>
          <h2
            style={{
              margin: 0,
              fontFamily: FONT_SERIF,
              fontSize: 'clamp(30px, 5vw, 48px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Vill ni se hur det här fungerar i praktiken?
          </h2>
          <p
            style={{
              margin: '18px auto 0',
              maxWidth: 560,
              color: 'rgba(250,248,245,0.76)',
              lineHeight: 1.65,
            }}
          >
            Boka ett kort samtal så går vi igenom planen för {demo.companyName} och visar hur
            Studio-flödet blir en konkret veckorutin.
          </p>
          <a
            href={`mailto:hej@letrend.se?subject=${mailSubject}&body=${mailBody}`}
            style={{
              marginTop: 30,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              borderRadius: 999,
              background: palette.cream,
              color: palette.brown,
              padding: '14px 22px',
              fontSize: 13,
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              boxShadow: '0 18px 35px rgba(0,0,0,0.22)',
            }}
          >
            <MessageCircle size={16} /> Boka samtal <ArrowRight size={16} />
          </a>
          <div
            style={{
              marginTop: 22,
              display: 'flex',
              justifyContent: 'center',
              gap: 18,
              flexWrap: 'wrap',
              color: 'rgba(250,248,245,0.72)',
              fontSize: 12,
            }}
          >
            <InlineCheck>30 minuter räcker</InlineCheck>
            <InlineCheck>Vi visar plattformen live</InlineCheck>
            <InlineCheck>Ingen bindning i samtalet</InlineCheck>
          </div>
        </div>
      </section>

      <footer style={{ padding: 26, textAlign: 'center', color: palette.textMuted, fontSize: 12 }}>
        © LeTrend · Demo förberedd för {demo.companyName}
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .demo-preview-two-col { grid-template-columns: 1fr !important; }
          .demo-preview-card-grid { grid-template-columns: 1fr !important; }
        }
        .demo-planner-cell:hover .demo-planner-details { opacity: 1 !important; pointer-events: auto !important; }
        .demo-planner-cell:hover .demo-planner-face { opacity: 0 !important; }
      `}</style>
    </main>
  );
}

function Atmosphere() {
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.16 }}>
      <div style={{ position: 'absolute', right: -90, top: -90, width: 330, height: 330, borderRadius: '50%', background: palette.gold }} />
      <div style={{ position: 'absolute', left: '8%', bottom: -130, width: 260, height: 260, borderRadius: '50%', background: palette.blush }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.24) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
    </div>
  );
}

function ContentManagerCard({ demo }: { demo: DemoPreviewPayload['demo'] }) {
  const cm = demo.contentManager;
  const initial = cm.name?.[0]?.toUpperCase() ?? 'L';
  return (
    <div
      style={{
        marginTop: 28,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        border: `1px solid ${palette.lineStrong}`,
        background: 'rgba(255,255,255,0.52)',
        borderRadius: 18,
        padding: 14,
      }}
    >
      {cm.avatarUrl ? (
        <img
          src={cm.avatarUrl}
          alt={`${cm.name}, content manager på LeTrend`}
          style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${palette.brown}` }}
        />
      ) : (
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            background: cm.color || palette.brown,
            color: palette.cream,
            border: `2px solid ${palette.brown}`,
            fontWeight: 900,
          }}
        >
          {initial}
        </div>
      )}
      <div style={{ fontSize: 14, color: 'rgba(31,26,20,0.82)', lineHeight: 1.45 }}>
        <strong style={{ color: palette.brown }}>{cm.name}</strong> är er content manager och
        ansvarar för att kurera feeden, justera koncepten och hålla planen levande.
        {cm.city ? <span style={{ color: palette.textMuted }}> · {cm.city}</span> : null}
      </div>
    </div>
  );
}

function GamePlanSection({ demo, fontSerif, fontMono }: { demo: DemoPreviewPayload['demo']; fontSerif: string; fontMono: string }) {
  const hasGamePlan = Boolean(demo.gamePlanHtml || demo.gamePlanText);
  return (
    <section style={{ ...sectionStyle, background: palette.mint, padding: '72px 0' }}>
      <div
        style={{
          ...containerStyle(1040),
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 5fr) minmax(320px, 7fr)',
          gap: 46,
          alignItems: 'stretch',
        }}
        className="demo-preview-two-col"
      >
        <div>
          <p style={eyebrowStyle(palette.goldDeep)}>Game Plan</p>
          <h2 style={sectionHeadingStyle}>Våra första spaningar</h2>
          <div style={bodyCopyStackStyle}>
            <p>
              Game Plan är arbetsdokumentet där er content manager samlar strategi, referenser,
              möjliga format och vad vi vill testa först.
            </p>
            <p>
              Previewn visar antingen ett demoanpassat AI-utkast, manuellt inskrivet material eller
              det game-plan-dokument som redan finns på kundprofilen.
            </p>
          </div>
        </div>
        <div
          style={{
            border: `1px solid ${palette.lineStrong}`,
            background: '#FDFCF7',
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 24px 50px rgba(74,47,24,0.12)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 12,
              borderBottom: `1px solid ${palette.line}`,
              padding: '12px 18px',
              color: palette.textMuted,
              fontFamily: fontMono,
              fontSize: 11,
            }}
          >
            <span>game-plan / {demo.companyName.toLowerCase().replace(/\s+/g, '-')}.md</span>
            <span>utkast</span>
          </div>
          <div style={{ padding: '24px 28px', minHeight: 300 }}>
            {hasGamePlan ? (
              demo.gamePlanHtml ? (
                <GamePlanDisplay html={demo.gamePlanHtml} />
              ) : (
                <div style={{ whiteSpace: 'pre-wrap', fontSize: 15, lineHeight: 1.75 }}>
                  {demo.gamePlanText}
                </div>
              )
            ) : (
              <div style={{ color: palette.textMuted, lineHeight: 1.7 }}>
                Game Plan fylls på av er content manager innan länken skickas vidare.
              </div>
            )}
            <div
              style={{
                marginTop: 22,
                borderTop: `1px dashed ${palette.lineStrong}`,
                paddingTop: 12,
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                color: palette.textMuted,
                fontFamily: fontMono,
                fontSize: 11,
              }}
            >
              <span style={{ display: 'inline-block', width: 2, height: 14, background: palette.brown }} />
              fortsätter skriva...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ demo, conceptCount, fontSerif }: { demo: DemoPreviewPayload['demo']; conceptCount: number; fontSerif: string }) {
  const metrics = demo.previewMetrics ?? {};
  const avgViews = readMetric(metrics['avg_views']) ?? readMetric(metrics['averageViews']);
  const followers = readMetric(metrics['followers']) ?? readMetric(metrics['current_followers']);
  const likeRate = readMetric(metrics['like_rate']) ?? readMetric(metrics['likeRate']);
  const engagement = readMetric(metrics['engagement_rate']) ?? readMetric(metrics['avg_engagement']);

  return (
    <section style={{ ...sectionStyle, background: 'rgba(244,228,216,0.55)', padding: '72px 0' }}>
      <div
        style={{
          ...containerStyle(1040),
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
          gap: 46,
          alignItems: 'center',
        }}
        className="demo-preview-two-col"
      >
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12 }} className="demo-preview-card-grid">
            <MetricCard label="Snittvisningar" value={avgViews ?? 'Live-data'} hint="TikTok / Studio" fontSerif={fontSerif} />
            <MetricCard label="Följare" value={followers ?? 'Synkas'} hint="senaste snapshot" fontSerif={fontSerif} />
            <MetricCard label="Koncept i plan" value={String(conceptCount)} hint="från feed planner" fontSerif={fontSerif} />
            <MetricCard label="Engagemang" value={likeRate ?? engagement ?? 'Signal'} hint="kvalitet före räckvidd" fontSerif={fontSerif} />
          </div>
        </div>
        <div>
          <p style={eyebrowStyle(palette.goldDeep)}>Datadrivet</p>
          <h2 style={sectionHeadingStyle}>Vi räknar på det som betyder något</h2>
          <div style={bodyCopyStackStyle}>
            <p>
              Bra snittvisningar är trevligt, men säger inte allt. Vi tittar på återkommande
              publicering, engagemang och vilka format som går att upprepa utan att tappa kvalitet.
            </p>
            <p>
              När {demo.companyName} går från demo till kund uppdateras de här signalerna löpande
              från Studio-flödet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function readMetric(value: unknown): string | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value.toLocaleString('sv-SE');
  if (typeof value === 'string' && value.trim()) return value.trim();
  return null;
}

function MetricCard({ label, value, hint, fontSerif }: { label: string; value: string; hint: string; fontSerif: string }) {
  return (
    <div style={{ border: `1px solid ${palette.lineStrong}`, background: palette.paper, borderRadius: 20, padding: 18, boxShadow: '0 14px 30px rgba(74,47,24,0.10)' }}>
      <p style={{ margin: 0, color: palette.textMuted, fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
      <p style={{ margin: '10px 0 0', color: palette.brown, fontFamily: fontSerif, fontSize: 28, fontWeight: 900, lineHeight: 1 }}>{value}</p>
      <p style={{ margin: '8px 0 0', color: palette.textMuted, fontSize: 11 }}>{hint}</p>
    </div>
  );
}

function ProofCard({ icon, title, body, fontSerif }: { icon: ReactNode; title: string; body: string; fontSerif: string }) {
  return (
    <div style={{ border: `1px solid ${palette.lineStrong}`, background: palette.paper, borderRadius: 22, padding: 24, boxShadow: '0 18px 42px rgba(74,47,24,0.08)' }}>
      <div style={{ width: 42, height: 42, borderRadius: 14, display: 'grid', placeItems: 'center', background: palette.brown, color: palette.cream }}>{icon}</div>
      <h3 style={{ margin: '18px 0 0', color: palette.brown, fontSize: 20, fontFamily: fontSerif }}>{title}</h3>
      <p style={{ margin: '8px 0 0', color: 'rgba(31,26,20,0.72)', fontSize: 14, lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

function PhoneMock() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src="/demo-auto-clip-phone.png"
        alt="LeTrend Auto-clip mobilflöde"
        style={{ width: 'min(100%, 360px)', height: 'auto', display: 'block', filter: 'drop-shadow(0 30px 55px rgba(31,26,20,0.24))' }}
      />
    </div>
  );
}

function FeatureList({ items }: { items: Array<{ icon: ReactNode; text: string }> }) {
  return (
    <ul style={{ display: 'grid', gap: 12, margin: '22px 0 0', padding: 0, listStyle: 'none' }}>
      {items.map((item) => (
        <li key={item.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'rgba(31,26,20,0.78)', fontSize: 14, lineHeight: 1.5 }}>
          <span style={{ color: palette.goldDeep, marginTop: 2 }}>{item.icon}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function AgencyCard({ fontSerif }: { fontSerif: string }) {
  const creators = [
    { initials: 'AK', color: '#C9A961' },
    { initials: 'ML', color: '#8B6914' },
    { initials: 'SR', color: '#4A2F18' },
  ];
  return (
    <div style={{ border: `1px solid ${palette.lineStrong}`, background: palette.paper, borderRadius: 24, padding: 22, boxShadow: '0 22px 48px rgba(74,47,24,0.14)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Pill><Sparkles size={13} /> Nytt samarbete</Pill>
        <div style={{ display: 'flex' }}>
          {creators.map((c) => (
            <div key={c.initials} style={{ width: 36, height: 36, borderRadius: '50%', background: c.color, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 900, border: '2px solid #fff', marginLeft: -8 }}>
              {c.initials}
            </div>
          ))}
        </div>
      </div>
      <h3 style={{ margin: '16px 0 6px', color: palette.brown, fontSize: 18, fontFamily: fontSerif }}>Kreatörer matchade till er bransch</h3>
      <div style={{ display: 'grid', gap: 8, marginTop: 14 }}>
        {[
          { label: 'Kategori', value: 'Lifestyle / Produkt' },
          { label: 'Format', value: 'UGC · Unboxing · Testimonial' },
          { label: 'Leveranstid', value: '5–10 arbetsdagar' },
        ].map((row) => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, borderBottom: `1px solid ${palette.line}`, paddingBottom: 6 }}>
            <span style={{ color: palette.textMuted }}>{row.label}</span>
            <span style={{ color: palette.brown, fontWeight: 700 }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 2, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 14, padding: '10px 16px' }}>
      <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(250,248,245,0.62)' }}>{label}</span>
      <span style={{ fontSize: 15, fontWeight: 900, color: palette.cream }}>{value}</span>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${palette.lineStrong}`, borderRadius: 999, padding: '6px 12px', fontSize: 12, fontWeight: 700, color: palette.brownSoft, background: 'rgba(255,255,255,0.72)' }}>
      {children}
    </span>
  );
}

function InlineCheck({ children }: { children: ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      <CheckCircle2 size={13} style={{ color: palette.gold }} />
      {children}
    </span>
  );
}

function containerStyle(maxWidth: number): CSSProperties {
  return { maxWidth, margin: '0 auto', padding: '0 24px', width: '100%' };
}

function eyebrowStyle(color: string): CSSProperties {
  return { margin: '0 0 14px', fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color };
}

const sectionHeadingStyle: CSSProperties = {
  margin: 0,
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: 'clamp(26px, 4vw, 38px)',
  lineHeight: 1.06,
  letterSpacing: '-0.03em',
  color: palette.brown,
};

const bodyCopyStackStyle: CSSProperties = {
  marginTop: 16,
  display: 'grid',
  gap: 12,
  color: 'rgba(31,26,20,0.72)',
  fontSize: 15,
  lineHeight: 1.68,
};
