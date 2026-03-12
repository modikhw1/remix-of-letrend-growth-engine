/**
 * Centraliserad content-fil för hela sajten.
 * Ändra text här → uppdateras på alla sidor automatiskt.
 */

// ─── GLOBALT ───
export const global = {
  cta: {
    primary: "Boka ett samtal",
    secondary: "Se hur det fungerar",
  },
  trust: {
    noObligation: "Ingen förpliktelse",
    responseTime: "Svar inom 24h",
    noBindings: "Inga bindningstider",
  },
  footer: {
    tagline: "TikTok-partner för restauranger, barer och caféer.",
    location: "Stockholm, Sverige",
    email: "hej@letrend.se",
  },
  logoTicker: {
    heading: "Verksamheter vi samarbetar med",
    names: [
      "Urban Slice",
      "Vesper Social Bar",
      "Kvarterskafé Storstad",
      "Trattoria Maggio",
      "Neon Nights",
      "Bokcaféet",
      "Café Rosendal",
      "Bistro Linden",
    ],
  },
};

// ─── STARTSIDAN (Index) ───
export const index = {
  hero: {
    kicker: "TikTok-partner för serviceverksamheter",
    heading: "Ni har berättelsen",
    body: "Problemet är sällan innehållet. Det är avsaknaden av ett system. LeTrend ger er partner, metod och plattform.",
  },
  featureBento: {
    kicker: "Varför TikTok?",
    heading: "Äkthet slår produktion",
    body: "En snabb video från köket når längre än en polerad reklamfilm. TikTok belönar det genuina.",
    cards: [
      { title: "Rytm > volym", body: "Det spelar roll om ni postar rätt — inte om ni postar mycket." },
      { title: "Timing avgör", body: "Rätt format i rätt ögonblick når tio gånger fler." },
      { title: "Relation är valutan", body: "Ni har redan berättelsen — ni behöver ett sätt att berätta den konsekvent." },
    ],
    problemHeading: "Sociala medier = \"när någon hinner\"",
    problemBody: "LeTrend gör TikTok genomförbart under verkliga förhållanden.",
  },
  stats: {
    items: [
      { end: 30, suffix: "+", label: "Verksamheter hjälpta" },
      { end: 140, suffix: "%", label: "Snittökning räckvidd" },
      { end: 6, suffix: " v", label: "Till första resultat" },
    ],
    disclaimer: "Räckviddsökningen mäts som genomsnittlig ökning i visningar per video jämfört med kontots egna baseline före samarbetet. Baserat på data från aktiva kunder Q4 2025.",
  },
  positioning: {
    heading: "Inte byrå. Inte verktyg.",
    subheading: "Ni behöver inte välja mellan dyrt och ensamt.",
    columns: [
      { title: "Produktionsbyrå", items: ["Hög produktionskvalitet", "Långsam iteration", "Kostsam per leverans", "Brief-process varje steg"] },
      { title: "LeTrend", items: ["Kreativ partner + plattform + manager", "Ni producerar — vi styr riktning", "Snabb iteration", "Affärsmål i centrum"], highlight: true },
      { title: "Verktyg / SaaS", items: ["Snabbt att börja", "Ingen mänsklig guidning", "Alla beslut på er", "Resultat = er kapacitet"] },
    ],
  },
  tiktokPreview: {
    kicker: "Så ser det ut",
    heading: "Riktigt innehåll. Riktiga resultat.",
    body: "Era managers är studenter och unga kreatörer som lever på plattformen varje dag. De kombinerar genuin känsla för TikTok-kultur med LeTrends beprövade metod och AI-stöd.",
    badge: "Manager + plattform + AI-stöd",
  },
  aiHuman: {
    kicker: "Teknologi + människa",
    heading: "AI hittar signalerna. Människor gör dem till era.",
    body: "Vi använder AI för trendspaning och signalanalys. Tonalitet, humor och kulturell träffsäkerhet — det avgörs alltid av personer.",
    features: [
      { label: "Trendspaning", desc: "Identifierar format innan de peakar" },
      { label: "Signalanalys", desc: "Vad som presterar relativt räckvidd" },
      { label: "Kurering", desc: "Manager granskar och anpassar" },
      { label: "Rekommendationer", desc: "Nästa steg baserat på data" },
    ],
  },
  platformPreview: {
    kicker: "Plattformen",
    heading: "Allt samlat. Inget krångel.",
    modules: [
      { title: "Koncept", desc: "Redigerbara idéer anpassade för er tonalitet" },
      { title: "Game Plan", desc: "Levande strategi, uppdaterad löpande" },
      { title: "Feed Planner", desc: "Publicerat, pågående, kommande" },
      { title: "Videoinstruktioner", desc: "Hook, handling, avslut" },
      { title: "Insights", desc: "Vad som fungerade, vad vi testar härnäst" },
    ],
    linkText: "Utforska plattformen",
  },
  process: {
    heading: "5 steg. Tydlig rytm.",
    steps: [
      { num: "01", title: "Kickoff" },
      { num: "02", title: "Spaning" },
      { num: "03", title: "Plan + manus" },
      { num: "04", title: "Publicera" },
      { num: "05", title: "Skala" },
    ],
    linkText: "Läs mer om processen",
  },
  cases: {
    kicker: "Bevis",
    heading: "Resultat från verkligheten",
    linkText: "Se alla kundcase",
    items: [
      { type: "Restaurang", name: "Urban Slice", stat: "+140% räckvidd", slug: "urban-slice" },
      { type: "Bar", name: "Vesper Social Bar", stat: "Fullt hus fredagar", slug: "vesper-social-bar" },
      { type: "Café", name: "Kvarterskafé Storstad", stat: "4 200 följare", slug: "kvarterskafe-storstad" },
    ],
  },
  pricingTeaser: {
    kicker: "Investering",
    heading: "Hög hävstång, inte lågpris",
    body: "Flexibla nivåer anpassade efter er ambition. Från ca 2 000 kr/mån.",
    bullets: [
      "Dedikerad manager och plattform ingår alltid",
      "Inga bindningstider",
      "Personlig onboarding",
      "Löpande support",
    ],
  },
  faq: {
    heading: "Vanliga frågor",
    items: [
      { q: "Behöver vi vara bra på TikTok redan?", a: "Nej. De flesta börjar från noll. Vår modell tar er från osäkerhet till konsekvent kvalitet." },
      { q: "Hur mycket tid behöver vi lägga?", a: "2–4 timmar per vecka för inspelning. Strategi, planering och uppföljning hanterar vi." },
      { q: "Vad kostar det?", a: "Från ca 2 000 kr/mån. Boka ett samtal så går vi igenom vad som passar." },
      { q: "Filmar ni åt oss?", a: "Nej — medvetet. TikTok belönar autentiskt innehåll. Ni filmar verkligheten, vi styr riktningen." },
      { q: "Hur skiljer ni er från en byrå?", a: "Vi är en kreativ partner med plattform och dedikerad manager. Snabbare iteration, lägre friktion." },
    ],
  },
  finalCta: {
    heading: "Redo att testa?",
    body: "Boka ett kortare samtal. Vi ger en konkret rekommendation — oavsett om ni väljer oss.",
    subtext: "Ingen förpliktelse · Svar inom 24h",
  },
};

// ─── HUR DET FUNGERAR ───
export const howItWorks = {
  hero: {
    kicker: "Process",
    heading: "Så fungerar samarbetet",
    body: "Ni behöver inte ett produktionsteam. Ni behöver rätt modell.",
  },
  roleDivision: {
    heading: "Er insats + vår insats = resultat",
    you: {
      title: "Ni bidrar med",
      items: [
        "Er miljö — köket, baren, caféet",
        "Era människor och berättelser",
        "2–4 timmar inspelning i veckan",
        "Energi och vilja att synas",
      ],
    },
    we: {
      title: "Vi bidrar med",
      items: [
        "Kreativ riktning och konceptkvalitet",
        "Dedikerad manager med TikTok-kunskap",
        "Plattform med plan, manus och insights",
        "AI-stödd trendspaning och optimering",
        "Löpande feedback och skalning",
      ],
    },
  },
  steps: {
    heading: "Processen i 5 steg",
    subheading: "En tydlig rytm som gör att ni vet exakt vad som händer härnäst.",
    items: [
      { num: "01", title: "Kickoff och målbild", desc: "Vi lär känna er verksamhet, era mål och er tonalitet. Tillsammans sätter vi en riktning som gör TikTok meningsfullt." },
      { num: "02", title: "Trend- och formatspaning", desc: "Vår plattform och manager identifierar relevanta trender, format och ämnen. Ni får konkreta förslag." },
      { num: "03", title: "Plan och manusstöd", desc: "Ni får en feed-plan med koncept, inspelningsinstruktioner och manus. Allt ni behöver för att filma med självförtroende." },
      { num: "04", title: "Publicering och feedbackloop", desc: "Ni publicerar. Vi följer upp resultat, ger feedback och justerar riktningen." },
      { num: "05", title: "Skalning av det som fungerar", desc: "Det som ger effekt förstärks. Det som inte fungerar byts ut. Systematisk förbättring." },
    ],
  },
  cta: {
    heading: "Redo att starta?",
    body: "Boka ett kort samtal och se om LeTrend passar er.",
  },
};

// ─── PLATTFORMEN ───
export const platform = {
  hero: {
    kicker: "Plattformen",
    heading: "Ert operativa nav",
    body: "Allt ni behöver för att planera, producera och förbättra ert innehåll — samlat i en plattform byggd för er vardag.",
  },
  modules: [
    { title: "Koncept", desc: "Redigerbara innehållsidéer med hook, handling och avslut.", detail: "Filtrera, redigera, spara favoriter. Nya koncept genereras löpande.", color: "bg-gold" },
    { title: "Game Plan", desc: "Er levande strategi. Mål, prioriteringar, anteckningar.", detail: "Utvecklas vecka för vecka baserat på resultat.", color: "bg-blush" },
    { title: "Feed Planner", desc: "Överblick över kommande, pågående och publicerat.", detail: "Planera publiceringsrytm. Allt synkat med er manager.", color: "bg-gold/40" },
    { title: "Videoinstruktioner", desc: "Konkreta inspelningsinstruktioner. Hook, handling, avslut.", detail: "Scenbeskrivning, manus, tips för ljus/ljud.", color: "bg-blush/60" },
    { title: "Insights", desc: "Vad som fungerade, vad vi testar härnäst.", detail: "Se trender i er data. Jämför format och publiceringstider.", color: "bg-accent/15" },
    { title: "Smart sök", desc: "Hitta tidigare koncept och idéer snabbt.", detail: "Ert innehållsbibliotek som växer.", color: "bg-card" },
  ],
  techBehind: {
    heading: "Tekniken bakom",
    subheading: "AI-stödd analys kombinerat med mänsklig kreativ ledning.",
    items: [
      { title: "Trendspaning", desc: "Identifierar format och ämnen innan de peakar." },
      { title: "Signalanalys", desc: "Vad som presterar relativt er målgrupp." },
      { title: "Mänsklig kurering", desc: "Varje rekommendation granskas av er manager." },
      { title: "Iterativ förbättring", desc: "Systemet lär sig av varje publicering." },
    ],
  },
  cta: {
    heading: "Vill ni se plattformen live?",
    body: "Boka ett samtal så visar vi hur det fungerar — med er verksamhet som utgångspunkt.",
  },
};

// ─── OM OSS ───
export const about = {
  hero: {
    heading: "Vi byggde det vi själva saknade",
    body: "LeTrend finns för att serviceverksamheter förtjänar en bättre väg till TikTok. Inte dyrare produktion. Inte fler verktyg. En partner som fungerar i vardagen.",
  },
  vision: {
    kicker: "Vår syn",
    heading: "TikTok belönar äkthet. Ni har den redan.",
    body1: "En restaurang som filmar sin kock, en bar som visar sin fredagskväll, ett kafé som delar sin morgonrutin — det är exakt det TikTok är byggt för.",
    body2: "Problemet har aldrig varit innehållet. Det har varit avsaknaden av struktur.",
    sideHeading: "Kreativitet = tajming + tonalitet",
    sideBody: "Det handlar inte om produktionsvärde. Det handlar om att säga rätt sak, på rätt sätt, i rätt ögonblick.",
  },
  team: {
    heading: "Teamet",
    subheading: "Ett litet team med en gemensam övertygelse: att serviceverksamheter förtjänar bättre verktyg.",
    founders: {
      title: "Grundarna",
      body: "Bakgrund i kreativ strategi och TikTok-kultur. Vi byggde LeTrend för att lösa ett problem vi sett hos hundratals verksamheter.",
    },
    managers: {
      title: "Managers",
      body: "Unga kreatörer med stark känsla för TikTok-kultur, kombinerat med strukturerad metod. Kreativa ledare, inte administratörer.",
    },
  },
  cta: {
    heading: "Nyfiken? Hör av er.",
    body: "Inget stort åtagande. Berätta om er verksamhet så tittar vi på möjligheterna.",
    subtext: "Svar inom 24h · Helt förutsättningslöst",
  },
};

// ─── KUNDCASE-SIDAN ───
export const cases = {
  hero: {
    kicker: "Kundcase",
    heading: "Resultat från verkligheten",
    body: "Inte snygga showcases — utan effektlogik. Utgångsläge, mål, riktning och resultat.",
  },
  quote: {
    text: "LeTrend gav oss en struktur vi inte visste att vi behövde.",
    author: "Maria L. · Ägare, Urban Slice, Stockholm",
  },
  categories: ["Alla", "Restaurang", "Bar", "Café"],
  cta: {
    heading: "Vill ni bli nästa case?",
    body: "Berätta om er verksamhet så visar vi vad som är möjligt.",
  },
};

// ─── KOM IGÅNG ───
export const getStarted = {
  hero: {
    kicker: "Kom igång",
    heading: "Boka en planeringssession",
    body: "Berätta kort om er verksamhet så hör vi av oss inom 24 timmar.",
  },
  callInfo: {
    heading: "Vad händer i samtalet?",
    items: [
      "Vi går igenom er TikTok-situation",
      "Vi identifierar er starkaste möjlighet",
      "Ni får en rekommendation — oavsett om ni väljer oss",
    ],
  },
  form: {
    nameLabel: "Namn",
    namePlaceholder: "Ert namn",
    businessLabel: "Verksamhet",
    businessPlaceholder: "Restaurang, bar, café…",
    emailLabel: "E-post",
    emailPlaceholder: "namn@verksamhet.se",
    messageLabel: "Berätta kort (valfritt)",
    messagePlaceholder: "Har ni TikTok idag? Vad vill ni uppnå?",
    submitLabel: "Skicka",
    submitSubtext: "Ingen förpliktelse · Svar inom 24h",
    thankYouHeading: "Tack!",
    thankYouBody: "Vi har fått ert meddelande och återkommer inom 24 timmar.",
  },
  faqMini: {
    heading: "Innan ni hör av er",
    items: [
      { q: "Kostar samtalet något?", a: "Nej. Kostnadsfritt och utan förpliktelse." },
      { q: "Vi har ingen TikTok idag — spelar det roll?", a: "Inte alls. De flesta börjar från noll." },
      { q: "Hur snabbt kan vi komma igång?", a: "Vanligtvis inom en vecka efter första samtalet." },
      { q: "Behöver vi teknisk kunskap?", a: "Nej. Allt ni behöver är en mobil och viljan att filma." },
    ],
  },
};

// ─── PRISER ───
export const pricing = {
  hero: {
    kicker: "Priser",
    heading: "Hög hävstång, inte lågpris",
    body: "LeTrend fokuserar på idékvalitet, timing och iteration — inte tung produktion. Det ger en annan kostnadsbild och bättre ROI.",
  },
  plans: [
    {
      name: "Start",
      price: "2 000",
      priceFormatted: "fr. 2 000 kr/mån",
      unit: "kr/mån",
      desc: "För verksamheter som vill komma igång med en tydlig riktning.",
      features: [
        "Dedikerad manager",
        "Månatlig game plan",
        "8 koncept per månad",
        "Feed planner",
        "Grundläggande insights",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "3 800",
      priceFormatted: "fr. 3 800 kr/mån",
      unit: "kr/mån",
      desc: "För verksamheter med högre tempo och ambition. Allt i Start plus mer stöd.",
      features: [
        "Allt i Start",
        "16 koncept per månad",
        "Videoinstruktioner per innehåll",
        "Löpande feedback & optimering",
        "AI-stödd trendspaning",
        "Prioriterat managerstöd",
      ],
      highlight: true,
    },
    {
      name: "Custom",
      price: "Kontakta oss",
      priceFormatted: "Kontakta oss",
      unit: "",
      desc: "För kedjor eller verksamheter med specifika krav och större omfång.",
      features: [
        "Skräddarsydd lösning",
        "Flera konton / enheter",
        "Utökad analys & rapportering",
        "Strategisk rådgivning",
        "Dedikerat team",
      ],
      highlight: false,
    },
  ],
  alwaysIncluded: [
    "Tillgång till LeTrend-plattformen",
    "Personlig onboarding",
    "Löpande support via plattformen",
    "Inga bindningstider",
  ],
  cta: {
    heading: "Osäker på vilken nivå?",
    body: "Boka ett samtal så hjälper vi er välja rätt.",
  },
};
