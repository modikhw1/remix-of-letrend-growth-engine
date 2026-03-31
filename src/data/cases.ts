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

// Profile photos
import profileJohannesgrillen from "@/assets/profile-johannesgrillen.png";
import profileFraseriet from "@/assets/profile-fraseriet.png";
import profileElviras from "@/assets/profile-elviras.png";
import profileCornament from "@/assets/profile-cornament.png";
import profileCafePlaza from "@/assets/profile-cafe-plaza.png";

// Realistic case card hero images
import caseJohannesgrillen from "@/assets/case-johannesgrillen.png";
import caseFraseriet from "@/assets/case-fraseriet.png";
import caseElviras from "@/assets/case-elviras.png";
import caseAvli from "@/assets/case-creperie-avli.png";
import caseCornament from "@/assets/case-cornament.png";
import caseHornan from "@/assets/case-hornan.png";
import caseCafePlaza from "@/assets/case-cafe-plaza.png";

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
  /** Profile photo of quote author */
  profileImage?: string;
  timeline: string;
  /** Main illustration image */
  image: { src: string; alt: string };
  /** Decorative sticker */
  sticker: { src: string; alt: string };
  /** Realistic hero photo for case cards */
  cardImage: { src: string; alt: string };
}

export const allCases: CaseData[] = [
  {
    slug: "johannesgrillen",
    type: "Snabbmat",
    name: "Johannesgrillen",
    location: "Uppsala",
    challenge: "Johannesgrillen är ett av Uppsalas mest älskade studenthak — men den kärleken lever mest offline. Zidane och hans team har alltid fyllt kön på valborg och storhelger, men vardagarna mellan 11 och 18 är en annan historia.",
    goal: "Att göra Johannesgrillen synlig för den generation studenter som väljer middagshak baserat på vad de sett på sin telefon — inte bara vad de hört från en kompis.",
    direction: "Kameran ska in i det trånga köket. Zidane och personalen är berättelsen — inte bara maten. Vi bygger en närvaro som känns som en insider-titt snarare än reklam.",
    execution: "Vi arbetar med Johannesgrillen för att hitta deras naturliga rytm på TikTok. Fokus ligger på kortformat som visar personalen, köksprocessen och den genuina energin som redan finns på plats.",
    result: "Johannesgrillen börjar bygga en digital närvaro som speglar deras verkliga status i Uppsala. Studenterna som redan känner till dem börjar se dem online.",
    stats: ["Ökad synlighet vardagar", "Ny publik utanför campus", "Pågående · 3 mån"],
    quote: { text: "Vi har alltid haft kunder som älskar oss — nu börjar folk hitta oss innan de ens kommit förbi.", author: "Zidane", role: "Ägare, Johannesgrillen" },
    timeline: "Pågående · 3 månader",
    image: { src: illustChefPerson, alt: "Kock i kök" },
    sticker: { src: stickerChef, alt: "Kock-sticker" },
    cardImage: { src: caseJohannesgrillen, alt: "Johannesgrillen kök" },
    profileImage: profileJohannesgrillen,
  },
  {
    slug: "fraseriet",
    type: "Foodtruck",
    name: "Fraseriet",
    location: "Uppsala",
    challenge: "Kristofer lämnade mäklarjobbet för att göra något han brinner för — mat. Problemet var att varumärket levde mest i konceptet, inte ute i världen.",
    goal: "Att ge Fraseriet en digital röst som matchar den faktiska upplevelsen — något som känns lite lyxigt, lite oväntat, men framförallt genuint.",
    direction: "Kristoffers bakgrund är berättelsen. Ingen förväntar sig att en f.d. mäklare ska stå i en foodtruck och servera bangkok-inspirerade mackor — och det är exakt det som gör det intressant.",
    execution: "Vi hjälper Kristoffer hitta ett format som är hållbart för en soloentreprenör: korta, autentiska klipp som visar processen, råvarorna och menniskorna bakom luckan.",
    result: "Fraseriet börjar synas för en publik som letar efter något annorlunda att äta i Uppsala. Berättelsen om mäklaren som bytte kostym mot förkläde engagerar.",
    stats: ["Varumärke under uppbyggnad", "Organisk räckvidd via storytelling", "Pågående · 2 mån"],
    quote: { text: "Marknadsföring har alltid känts som den tuffaste biten. Nu känns det som att det faktiskt går åt rätt håll.", author: "Kristofer", role: "Grundare, Fraseriet" },
    timeline: "Pågående · 2 månader",
    image: { src: illustBartender, alt: "Foodtruck" },
    sticker: { src: stickerCocktail, alt: "Cocktail-sticker" },
    cardImage: { src: caseFraseriet, alt: "Fraseriet foodtruck" },
  },
  {
    slug: "restaurang-elviras",
    type: "Restaurang",
    name: "Restaurang Elviras",
    location: "Uppsala",
    challenge: "Elviras är redan ett välkänt namn i Uppsala — en central bistro med ett ungt, engagerat team. Men utanför de stora tillfällena är det svårare att fylla stolarna.",
    goal: "Att bygga en kontinuerlig närvaro som gör Elviras till det självklara valet även en vanlig tisdag — inte bara på högtidsdagar.",
    direction: "Elviras har redan det som TikTok belönar: ett karismatiskt team, en fin lokal och en ägare med personlighet. Vi bygger innehåll som bjuder in tittaren till Elviras värld.",
    execution: "Vi arbetar tätt med George och teamet för att hitta ett format som inte stör driften men som konsekvent producerar innehåll.",
    result: "Elviras börjar synas i flöden hos den målgrupp som redan är redo att komma — men som inte fick den sista nudgen.",
    stats: ["Ökad synlighet utanför event", "Ny relation till digital publik", "Pågående · 3 mån"],
    quote: { text: "Vi ville inte göra TikTok för sakens skull. Men när det känns genomtänkt och passar oss — då är det annorlunda.", author: "George", role: "Ägare, Restaurang Elviras" },
    timeline: "Pågående · 3 månader",
    image: { src: illustBar, alt: "Restaurangägare" },
    sticker: { src: stickerPhone, alt: "Telefon-sticker" },
    cardImage: { src: caseElviras, alt: "Restaurang Elviras" },
  },
  {
    slug: "creperie-avli",
    type: "Restaurang",
    name: "Crêperie Avli",
    location: "Uppsala",
    challenge: "Avli har ett genuint koncept och en fin atmosfär. Men i en stad som Uppsala, där restauranger konkurrerar om en begränsad publik, räcker det inte att vara bra — man måste vara igenkänd.",
    goal: "Att hjälpa Avli hitta sin röst. Inte bara visa maten — utan bygga en känsla kring stället som gör att rätt publik känner igen sig.",
    direction: "Demitris och Marta är Avlis starkaste tillgång. Deras värme, gästfrihet och bakgrund är en berättelse som förtjänar att berättas.",
    execution: "Vi arbetar med Avli för att identifiera vad som gör dem unika och hur det berättas på TikTok. Innehållet är enkelt, varmt och konsekvent.",
    result: "Avli börjar attrahera en publik som faktiskt letar efter det de erbjuder. Igenkänningen ökar.",
    stats: ["Tydligare varumärkesidentitet", "Bredare publik", "Pågående · 2 mån"],
    quote: { text: "Vi har alltid känt att vi hade något bra — det har bara saknats ett sätt att visa det.", author: "Demitris", role: "Delägare, Crêperie Avli" },
    timeline: "Pågående · 2 månader",
    image: { src: illustCafe, alt: "Café-interiör" },
    sticker: { src: stickerCoffee, alt: "Kaffe-sticker" },
    cardImage: { src: caseAvli, alt: "Crêperie Avli" },
  },
  {
    slug: "cornament",
    type: "Eventhall",
    name: "Cornament",
    location: "Uppsala",
    challenge: "Cornament är ett unikt koncept i Uppsala — en social hall byggd kring cornhole. TikTok har aldrig riktigt blivit av — inte för att viljan saknas, utan för att det kräver struktur.",
    goal: "Att göra fler i Uppsala medvetna om att Cornament existerar och förstår vad det är. Awareness är det primära.",
    direction: "Cornaments atmosfär är innehållet. Det sociala, det lite nördiga, det genuint roliga i att spela cornhole med kollegorna på en fredag.",
    execution: "Vi hjälper Marcus och teamet hitta ett format som är hållbart och konsekvent. Autentiska klipp från turneringar, spontana AW-stunder och den unika kulturen.",
    result: "Fler i Uppsala, framförallt unga yrkesverksamma och studenter, börjar känna till Cornament.",
    stats: ["Ökad kännedom i Uppsala", "Ny publik via organisk räckvidd", "Pågående · 2 mån"],
    quote: { text: "Vi visste att vi borde vara bättre på det här. Nu känns det som att vi äntligen har ett upplägg som faktiskt funkar för oss.", author: "Marcus", role: "Grundare, Cornament" },
    timeline: "Pågående · 2 månader",
    image: { src: illustBarista, alt: "Cornhole" },
    sticker: { src: stickerCoin, alt: "Mynt-sticker" },
    cardImage: { src: caseCornament, alt: "Cornament eventhall" },
  },
  {
    slug: "hornan-snabblivs",
    type: "Kiosk",
    name: "Hörnan Snabblivs",
    location: "Uppsala",
    challenge: "Amir och hans kompanjon öppnade Hörnan i Rickomberga — ett studenttätt område. Som nyöppnad verksamhet handlar allt om att bli det ställe folk faktiskt känner till.",
    goal: "Att göra Hörnan till ett bekant namn i Rickomberga. Att studenter i närheten ska veta att de finns.",
    direction: "Hörnan är en ny verksamhet på väg att hitta sin plats. Det är en berättelse i realtid — humor, enkelhet och äkthet.",
    execution: "Vi arbetar med Amir och teamet för att hitta ett format som passar deras vardag. Innehållet ska konsekvent synas i flödet hos den publik som bor ett stenkast bort.",
    result: "Hörnan börjar bygga lokal igenkänning. Studenter i Rickomberga börjar associera kiosken med ett vänligt, prisvärt alternativ.",
    stats: ["Lokal igenkänning under uppbyggnad", "Relation till studentpublik", "Pågående · 1 mån"],
    quote: { text: "Det är mycket att hålla koll på i uppstarten. Att vi ändå syns och når folk i området — det känns som rätt steg.", author: "Amir", role: "Grundare, Hörnan Snabblivs" },
    timeline: "Pågående · 1 månad",
    image: { src: illustCreator, alt: "Kiosk" },
    sticker: { src: stickerAi, alt: "AI-sticker" },
    cardImage: { src: caseHornan, alt: "Hörnan Snabblivs" },
  },
];
