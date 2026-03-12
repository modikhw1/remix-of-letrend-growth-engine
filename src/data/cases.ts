// Case images — swap these imports to change thumbnails site-wide
import illustBar from "@/assets/illust-bar.png";
import illustBartender from "@/assets/illust-bartender.png";
import illustCafe from "@/assets/illust-cafe.png";
import illustChefPerson from "@/assets/illust-chef-person.png";
import illustBarista from "@/assets/illust-barista.png";
import illustCreator from "@/assets/illust-creator.png";

// Stickers used as decorative elements per case
import stickerChef from "@/assets/sticker-chef.png";
import stickerCocktail from "@/assets/sticker-cocktail.png";
import stickerCoffee from "@/assets/sticker-coffee.png";
import stickerCoin from "@/assets/sticker-coin.png";
import stickerPhone from "@/assets/sticker-phone.png";
import stickerAi from "@/assets/sticker-ai.png";

export interface CaseData {
  slug: string;
  type: string;
  name: string;
  location: string;
  challenge: string;
  goal: string;
  direction: string;
  execution: string;
  result: string;
  stats: string[];
  quote?: { text: string; author: string; role: string };
  timeline: string;
  /** Main illustration image */
  image: { src: string; alt: string };
  /** Decorative sticker */
  sticker: { src: string; alt: string };
}

export const allCases: CaseData[] = [
  {
    slug: "urban-slice",
    type: "Restaurang",
    name: "Urban Slice",
    location: "Stockholm",
    challenge: "Sporadisk postning utan plan — content skapades när någon hann. Ingen tydlig riktning eller mätbar effekt.",
    goal: "Bygga konsekvent närvaro och öka direktbokningar via TikTok.",
    direction: "Autentiskt köksinnehåll, behind-the-scenes, meny-hooks. Fokus på pizzatillverkning och vardagsmoment.",
    execution: "Kickoff med målbild och tonalitet. Veckovis game plan med 3–4 koncept. Manager-ledd feedback efter varje publicering. Iterativ förfining av format.",
    result: "+140% räckvidd på 6 veckor. 3× fler direktbokningar via TikTok. Konsekvent publiceringsrytm etablerad.",
    stats: ["+140% räckvidd", "3× direktbokningar", "6 veckor"],
    quote: { text: "LeTrend gav oss en struktur vi inte visste att vi behövde. Nu vet vi exakt vad vi ska filma varje vecka.", author: "Maria L.", role: "Ägare, Urban Slice" },
    image: { src: illustChefPerson, alt: "Kock i kök" },
    sticker: { src: stickerChef, alt: "Kock-sticker" },
  },
  {
    slug: "vesper-social-bar",
    type: "Bar",
    name: "Vesper Social Bar",
    location: "Göteborg",
    challenge: "Nyöppnad bar utan lokal kännedom eller etablerad publik. Behövde synlighet snabbt.",
    goal: "Snabb lokal synlighet och fulla kvällar inom 2 månader.",
    direction: "Bartender-kultur, cocktail-content, kvällsstämning. Mörkt och atmosfäriskt med fokus på hantverk.",
    execution: "Intensiv startfas med daglig publicering första veckan. Trendanpassade format med lokal twist. Manager följde signaler och justerade riktning i realtid.",
    result: "Fullt hus på fredagar efter 8 veckor. Kö vid dörren. Stark lokal igenkänning.",
    stats: ["Fullt hus fredagar", "Kö vid dörren", "8 veckor"],
    quote: { text: "Inom åtta veckor hade vi fullt hus på fredagar. Det hade aldrig hänt med vår gamla approach.", author: "Erik S.", role: "Grundare, Vesper Social Bar" },
    image: { src: illustBartender, alt: "Bartender" },
    sticker: { src: stickerCocktail, alt: "Cocktail-sticker" },
  },
  {
    slug: "kvarterskafe-storstad",
    type: "Café",
    name: "Kvarterskafé Storstad",
    location: "Malmö",
    challenge: "Stark lokal identitet men noll digital närvaro. Inga sociala medier alls.",
    goal: "Bygga TikTok-kanal och öka lunchbesök.",
    direction: "Vardagsmoment, barista-content, lugn atmosfär. Lugnt och hemtrevligt med fokus på fikastunder.",
    execution: "Steg-för-steg onboarding med enkel inspelningsrutin. Manager skapade koncept anpassade för kaféets unika bokhandels-koncept. Fokus på community-känsla.",
    result: "4 200 följare. Synlig ökning av lunchgäster. Lokal uppmärksamhet.",
    stats: ["4 200 följare", "Fler lunchgäster", "12 veckor"],
    quote: { text: "Vi gick från noll till 4 200 följare utan att det kändes som extra jobb. Plattformen gör allt tydligt.", author: "Anna K.", role: "Delägare, Kvarterskafé Storstad" },
    image: { src: illustCafe, alt: "Café-interiör" },
    sticker: { src: stickerCoffee, alt: "Kaffe-sticker" },
  },
  {
    slug: "trattoria-maggio",
    type: "Restaurang",
    name: "Trattoria Maggio",
    location: "Uppsala",
    challenge: "Svårt att nå yngre målgrupp med befintlig marknadsföring. Etablerad kundkrets 40+.",
    goal: "Utöka kundbasen till 20–35 år via TikTok.",
    direction: "Pastaproduktion, italianskt hantverk, humor. Autentisk och personlig ton.",
    execution: "Identifierade trendformat som matchade restaurangens hantverk. Skapade serie-koncept kring pastatekniker. Manager coachade teamet i presentation.",
    result: "+200% profil-besök. Tydlig skiftning i gästprofil mot yngre segment.",
    stats: ["+200% profilbesök", "Ny målgrupp", "10 veckor"],
    quote: { text: "Vi visste att vi behövde nå yngre gäster men hade ingen aning om hur. LeTrend visade oss vägen.", author: "Giovanni M.", role: "Ägare, Trattoria Maggio" },
    image: { src: illustBar, alt: "Restaurangägare" },
    sticker: { src: stickerPhone, alt: "Telefon-sticker" },
  },
  {
    slug: "neon-nights",
    type: "Bar",
    name: "Neon Nights",
    location: "Malmö",
    challenge: "Hård lokal konkurrens från etablerade nattklubbar. Svårt att differentiera sig.",
    goal: "Positionera sig som cocktailbar, inte nattklubb.",
    direction: "Cocktail-craft, interiör, DJ-sets, mörk atmosfär. Fokus på hantverk och upplevelse.",
    execution: "Tydlig tonalitetsstyrning: mörkt, sofistikerat, inga partybilder. Manager kurerade varje koncept för att stärka premium-känsla.",
    result: "3 500 följare på 10 veckor. Ökat antal bordbokningar och tydlig repositionering.",
    stats: ["3 500 följare", "Fler bordbokningar", "10 veckor"],
    image: { src: illustBarista, alt: "Barista" },
    sticker: { src: stickerCoin, alt: "Mynt-sticker" },
  },
  {
    slug: "bokcafeet",
    type: "Café",
    name: "Bokcaféet",
    location: "Linköping",
    challenge: "Låg fottrafik trots unikt koncept (kafé + bokhandel). Svårt att nå nya besökare.",
    goal: "Visa upp det unika konceptet och locka nya besökare.",
    direction: "Bokklipp, fikamiljö, community-känsla. Personligt och inbjudande.",
    execution: "Skapade visuellt starka koncept kring böcker + kaffe. Kopplade till lästrender och boktok-communityn. Manager identifierade korspollinering med bokinfluencers.",
    result: "+80% fottrafik under kampanjperioden. Lokal press-uppmärksamhet.",
    stats: ["+80% fottrafik", "Lokal press", "8 veckor"],
    timeline: "8 veckor",
  },
];
