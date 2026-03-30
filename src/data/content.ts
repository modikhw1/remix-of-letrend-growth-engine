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
    tagline: "TikTok-partner för serviceverksamheter.",
    location: "Uppsala, Sverige",
    email: "hej@letrend.se",
  },
  logoTicker: {
    heading: "Verksamheter vi samarbetar med",
    names: [
      "Fraseriet",
      "Restaurang Elviras",
      "Creperie Avli",
      "Restaurang Plock",
      "Cornament",
      "Johannesgrillen",
      "Café Plaza",
      "Hörnan snabblivs",
    ],
  },
};

// ─── STARTSIDAN (Index) ───
export const index = {
  hero: {
    kicker: "TikTok-partner för serviceverksamheter",
    heading: "AI + kreativitet = LeTrend",
    body: "Vår tjänst är gjord specifikt för TikTok. LeTrend ger er partner, metod och plattform.",
  },
  featureBento: {
    kicker: "Varför TikTok?",
    heading: "Människor vill lära känna er",
    body: "En video från köket är ibland mer effektiv än den planerade reklamfilmen. TikTok belönar det genuina.",
    cards: [
      { title: "Rytm > volym", body: "Posta regelbundet men håll hög kvalité. Er feed ska kännas balanserad och inbjudande." },
      { title: "Timing avgör", body: "Kulturella ögonblick kan ibland vara guldgruvor för viralitet. Var inte sen på bollen." },
      { title: "Relationsbyggande", body: "TikTok visar allt det riktiga. Pratet i personalen, humorn, inredningen i bakgrunden." },
    ],
    problemHeading: "Sociala medier — \"Dyrt och tidskrävande\"",
    problemBody: "LeTrend försöker vara ingen av dem. Vi kostar mindre än snittet och förenklar det åt er.",
  },
  stats: {
    items: [
      { end: 6, suffix: "+", label: "Verksamheter i Uppsala" },
      { end: 6, suffix: "st", label: "Branscher representerade" },
      { end: 3, suffix: "mån", label: "Genomsnittlig samarbetstid" },
    ],
    disclaimer: "Vi beräknar ökning i räckvidd som visningar per video jämfört med kontots siffror före samarbetet.",
  },
  positioning: {
    heading: "Inte byrå. Inte AI-skapat innehåll.",
    subheading: "Vi ger det bästa från två världar.",
    columns: [
      {
        title: "Produktionsbyrå",
        items: ["Hög produktionskvalitet", "Helhetslösning", "Långsam iteration", "Tidskrävande och dyrt"],
        checks: [true, true, false, false],
      },
      {
        title: "LeTrend",
        items: ["Kreativ partner + AI-plattform + manager", "Ni producerar — vi styr riktning", "Snabb iteration", "Affärsmål i centrum"],
        checks: [true, true, true, true],
        highlight: true,
      },
      {
        title: "AI-innehåll",
        items: ["Snabbt att börja", "Billigt", "Ej anpassat för TikTok", "Saknar det kreativa"],
        checks: [true, true, false, false],
      },
    ],
  },
  tiktokPreview: {
    kicker: "Så ser det ut",
    heading: "Riktigt innehåll. Riktiga resultat.",
    body: "Era managers är studenter och unga kreatörer som lever på plattformen varje dag. De planerar en attraktiv feed för er verksamhet med hjälp av vår LeTrend-formula och AI-funktioner.",
    badge: "Manager + plattform + AI-stöd",
  },
  aiHuman: {
    kicker: "Teknologi + människa",
    heading: "AI = hela världens trender",
    body: "Vi använder AI för trendspaning över regioner och landsgränser. Våra content managers ser till att humorn, tonen och varumärkesriktlinjerna respekteras innan växande virala trender rekommenderas.",
    features: [
      { label: "Trendspaning", desc: "Identifierar nya kreativa koncept" },
      { label: "Signalanalys", desc: "Vad som får oväntat stor spridning" },
      { label: "Kurering", desc: "Managers planerar er feed" },
      { label: "Rekommendationer", desc: "Nästa steg baserat på data" },
    ],
  },
  platformPreview: {
    kicker: "Plattformen",
    heading: "Allt samlat. Gjort för smidighet.",
    modules: [
      { title: "Koncept", desc: "Anpassade videoidéer för er ton och humor" },
      { title: "Game Plan", desc: "Hur ni vinner, i textform. Uppdaterad löpande" },
      { title: "Feed Planner", desc: "En tidslinje med koncept/noter/kampanjer" },
      { title: "Videoinstruktioner", desc: "För inspelning. Anpassade manus vid behov" },
      { title: "Insights", desc: "Vad som fungerade, vad vi testar härnäst" },
    ],
    linkText: "Utforska plattformen",
  },
  process: {
    heading: "Hoppa in med oss, det blir kul.",
    steps: [
      { num: "01", title: "Kickoff" },
      { num: "02", title: "Anpassad plan" },
      { num: "03", title: "Spela in" },
      { num: "04", title: "Publicera" },
      { num: "05", title: "Skala" },
    ],
    linkText: "Läs mer om processen",
  },
  cases: {
    kicker: "Kundcase",
    heading: "Vad vi gjort innan",
    linkText: "Se alla kundcase",
    items: [
      { type: "Foodtruck", name: "Fraseriet", stat: "Varumärke under uppbyggnad", slug: "fraseriet" },
      { type: "Restaurang", name: "Restaurang Elviras", stat: "Ökad synlighet utanför event", slug: "restaurang-elviras" },
      { type: "Eventhall", name: "Cornament", stat: "Ny publik via organisk räckvidd", slug: "cornament" },
    ],
  },
  pricingTeaser: {
    kicker: "Let's talk money",
    heading: "LeTrend tar i regel 40% lägre än byråer",
    body: "Det går för vi skippar produktion — det sköter ni själva genom en smartphone. Vi kostar ofta mellan 2 000–4 000 kr/mån.",
    bullets: [
      "Dedikerad Content manager och plattform ingår",
      "Inga bindningstider",
      "Personlig uppstart/onboarding",
      "Löpande support",
    ],
  },
  faq: {
    heading: "Vanliga frågor",
    items: [
      { q: "Behöver vi ha koll på TikTok redan?", a: "Nej. De flesta saknar en satt strategi vid uppstart. Vår modell lyfter er från osäkerhet till rutin och viralitet." },
      { q: "Hur mycket tid behöver vi lägga?", a: "2–4 timmar per vecka för inspelning. Strategi, planering och steg-för-steg instruktioner hanterar vi." },
      { q: "Vad kostar det?", a: "Från ca 2 000 kr/mån. Vi utgår från typen av hjälp ni förväntar er. Om det krävs större resurser kostar vi mer." },
      { q: "Filmar ni åt oss?", a: "Nej — medvetet. TikTok belönar autentiskt innehåll och en smartphone fungerar väl. Ni filmar, vi styr riktningen." },
      { q: "Hur skiljer ni er från en byrå?", a: "Vi är en kreativ partner med plattform och dedikerad manager. Snabbare iteration, lägre friktion." },
    ],
  },
  finalCta: {
    heading: "Låter intressant, va?",
    body: "Ange era kontaktuppgifter så kontaktar vi för att diskutera om LeTrends tjänster passar.",
    subtext: "Ingen förpliktelse · Svar inom 24h",
    buttonLabel: "Bli kontaktad",
  },
};

// ─── HUR DET FUNGERAR ───
export const howItWorks = {
  hero: {
    kicker: "Process",
    heading: "Så fungerar samarbetet",
    body: "Ni kommer undan utan ett produktionsteam. Det går för att vi skapar en alternativ lösning.",
  },
  roleDivision: {
    heading: "Er produktion + vår plan = resultat",
    you: {
      title: "Ni bidrar med",
      items: [
        "Er miljö — köket, baren, caféet",
        "Era glada medarbetare och backdrop",
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
    subheading: "En tydlig stegvis plan som guidar era handlingar.",
    items: [
      { num: "01", title: "Kickoff och målbild", desc: "Vi lär känna er verksamhet, era mål och er tonalitet. Tillsammans skapar vi riktningen som gör er TikTok till en viktig kanal." },
      { num: "02", title: "En anpassad plan för er", desc: "Vår plattform och manager identifierar relevanta trender, teman och idéer. Ni får allt anpassat genom sidan." },
      { num: "03", title: "Inspelning med distanshjälp", desc: "Ni får en feed-plan med koncept, inspelningsinstruktioner och manus. Med tiden hoppas vi erbjuda automatisk klippning och annat stöd." },
      { num: "04", title: "Publicering och feedbackloop", desc: "Ni publicerar. Vi mäter era resultat, ger feedback och justerar riktningen vid behov." },
      { num: "05", title: "Skalning av det som fungerar", desc: "Det som lyckas lägger vi mer krut på. Det som inte fungerar byts ut. Iterativ förbättring med ögon mot data." },
    ],
  },
  cta: {
    heading: "Redo att testa?",
    body: "Boka ett kort samtal och se om LeTrend passar er.",
  },
};

// ─── PLATTFORMEN ───
export const platform = {
  hero: {
    kicker: "Plattformen",
    heading: "LeTrend i praktiken",
    body: "Allt ni behöver för att planera, producera och förbättra ert innehåll — samlat i en lättanvänd plattform som fungerar på jobbet.",
  },
  modules: [
    { title: "Koncept", desc: "Anpassade innehållsidéer med hook, handling och avslut.", detail: "Våra content managers väljer rätt idéer för er. Nya klipp laddas in löpande.", color: "bg-gold" },
    { title: "Game Plan", desc: "En anslagstavla för instruktioner, tankar och bifogade filer.", detail: "Uppdateras med nya tips och idéer för att guida er tillväxt på TikTok.", color: "bg-blush" },
    { title: "Feed Planner", desc: "Överblick över kommande, pågående och publicerat.", detail: "Er content manager laddar in kommande klipp veckor i förväg om det önskas. Kampanjer planeras och förbereds i feed planner.", color: "bg-gold/40" },
    { title: "Videoinstruktioner", desc: "Vid inspelning får ni steg-för-steg instruktioner per klipp för att optimera chansen till framgång.", detail: "Scenbeskrivning, manus, tips för ljus/ljud.", color: "bg-blush/60" },
    { title: "Insights", desc: "Vad som fungerar, vad vi testar härnäst.", detail: "Se trender i er data. Jämför format och publiceringstider.", color: "bg-accent/15" },
    { title: "Smart sök", desc: "Hitta tidigare koncept och idéer snabbt.", detail: "Ert innehållsbibliotek som växer.", color: "bg-card" },
  ],
  techBehind: {
    heading: "Tekniken bakom",
    subheading: "AI-funktioner kombinerat med mänsklig kreativ ledning.",
    items: [
      { title: "Trendspaning", desc: "Identifierar nya trender innan de peakar." },
      { title: "Signalanalys", desc: "Vad som sticker ut hos andra, statistik talar högt." },
      { title: "Mänsklig kurering", desc: "Varje rekommendation handplockas av er manager." },
      { title: "Iterativ förbättring", desc: "LeTrend förbättras efter varje publicering." },
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
    heading: "Vi vill bidra med ökad kreativitet på en redan livlig plattform",
    body: "LeTrend utsagda intention är att hjälpa serviceverksamheter vinna på TikTok. Men det som driver oss är att bidra med kreativitet i världsklass genom en rätt missförstådd plattform.",
  },
  vision: {
    kicker: "Vår syn",
    heading: "TikTok belönar det genuina. Er röst blir nyckeln.",
    body1: "En restaurang som filmar sin kock, spelar ut en sketch i baren, ett kafé som presenterar en nyhet — det är exakt vad TikTok är byggt för.",
    body2: "Det är sällan tydligt varför egna TikTok-strategier missar måltavlan. Förmodligen är det många småsaker som skaver.",
    sideHeading: "Engagemang = Genomtänkta idéer + utförande",
    sideBody: "Det handlar inte om produktionsvärde. Det handlar om att nå publiken och signalera rätt saker.",
  },
  team: {
    heading: "Teamet",
    subheading: "Ett sammansvetsat team med en gemensam övertygelse: att serviceverksamheter kan vinna med bättre verktyg.",
    founders: {
      title: "Grundarna",
      body: "Bakgrund i kreativ strategi och TikTok-kultur. Vi byggde LeTrend för att lösa ett problem vi sett hos hundratals verksamheter.",
    },
    managers: {
      title: "Managers",
      body: "Unga kreatörer med stark känsla för TikTok-kultur, kombinerat med strukturerad metod. De guidar medan ni utför.",
    },
  },
  cta: {
    heading: "Nyfiken? Hör av er.",
    body: "Berätta om er verksamhet så tittar vi på möjligheterna. Vi hjälper allt från små teams till franschises med flera enheter.",
    subtext: "Svar inom 24h · Helt förutsättningslöst",
  },
};

// ─── KUNDCASE-SIDAN ───
export const cases = {
  hero: {
    kicker: "Kundcase",
    heading: "Resultat från verkligheten",
    body: "Stories som tydliggör effekten LeTrend bidrar med. Med blicken mot mål, riktning och resultat.",
  },
  quote: {
    text: "--------",
    author: "Demitris · Ägare, Crêperie Avli, Uppsala",
  },
  categories: ["Alla", "Restaurang", "Bar", "Café"],
  cta: {
    heading: "Vill ni bli nästa case?",
    body: "Berätta om er verksamhet så undersöker vi möjligheterna till samarbete.",
  },
};

// ─── KOM IGÅNG ───
export const getStarted = {
  hero: {
    kicker: "Kom igång",
    heading: "Boka en tid för att planera vägen framåt.",
    body: "Berätta kort om er verksamhet så hör vi av oss inom 24 timmar.",
  },
  callInfo: {
    heading: "Vad händer i samtalet?",
    items: [
      "Vi går igenom våra synpunkter om er TikTok",
      "Vi identifierar möjliga vägar framåt",
      "Ni får en analys som kan användas direkt — oavsett om ni väljer oss",
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
    submitSubtext: "Utan förpliktelser · Svar inom 24h",
    thankYouHeading: "Tack!",
    thankYouBody: "Vi har fått ert meddelande och återkommer inom 24 timmar.",
  },
  faqMini: {
    heading: "Innan ni hör av er",
    items: [
      { q: "Kostar samtalet något?", a: "Nej. Uppstart/rådgivning kostar inget :)" },
      { q: "Vi har ingen TikTok idag — spelar det roll?", a: "Från en aktiv profil kan vi forma en ny väg. Från en helt ny blir möjligheterna större. Båda är ok!" },
      { q: "Hur snabbt kan vi komma igång?", a: "Vanligtvis inom en vecka efter första samtalet." },
      { q: "Behöver vi teknisk kunskap?", a: "Förutom inspelning och klippning behövs inget särskilt. Ni behöver en smartphone och några timmar i veckan." },
    ],
  },
};

// ─── PRISER ───
export const pricing = {
  hero: {
    kicker: "Priser",
    heading: "Stora löften, (relativt) små priser",
    body: "LeTrend fokuserar på idékvalitet, timing och iteration — inte själva inspelningen. Vi satsar våra kort på kreativitet och smart planering.",
  },
  plans: [
    {
      name: "Start",
      price: "2 000",
      priceFormatted: "2 000 kr/mån",
      unit: "kr/mån",
      desc: "För verksamheter som vill komma igång med en tydlig riktning.",
      features: [
        "Dedikerad manager",
        "Månatlig \"Game plan\"",
        "Veckovisa videoidéer",
        "Planerade kampanjer",
        "Grundläggande insights",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "3 800",
      priceFormatted: "3 800 kr/mån",
      unit: "kr/mån",
      desc: "För verksamheter med högre tempo och ambition. Allt i Start plus mer stöd.",
      features: [
        "Allt i Start",
        "Flexibelt antal videoidéer per månad",
        "Videoinstruktioner per innehåll",
        "Löpande feedback & optimering",
        "AI-stödd trendspaning",
        "Prioriterade virala trender",
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
    body: "Tidsomfånget styr ofta priset. Vi talar gärna mer för att förstå er nuvarande situation.",
  },
};
