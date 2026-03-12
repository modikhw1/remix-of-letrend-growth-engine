/**
 * Centraliserad bildkatalog.
 * Ändra sökvägar och alt-texter här → uppdateras i alla komponenter.
 */

import illustAi from "@/assets/illust-ai.png";
import illustBar from "@/assets/illust-bar.png";
import illustBarista from "@/assets/illust-barista.png";
import illustBartender from "@/assets/illust-bartender.png";
import illustCafe from "@/assets/illust-cafe.png";
import illustChefPerson from "@/assets/illust-chef-person.png";
import illustCreator from "@/assets/illust-creator.png";
import illustFilming from "@/assets/illust-filming.png";
import illustPlatform from "@/assets/illust-platform.png";
import illustTeam from "@/assets/illust-team.png";

import stickerAi from "@/assets/sticker-ai.png";
import stickerChef from "@/assets/sticker-chef.png";
import stickerCocktail from "@/assets/sticker-cocktail.png";
import stickerCoffee from "@/assets/sticker-coffee.png";
import stickerCoin from "@/assets/sticker-coin.png";
import stickerPhone from "@/assets/sticker-phone.png";

import logoSvg from "@/assets/letrend-logo.svg";
import logoPng from "@/assets/letrend-logo.png";
import logoMark from "@/assets/logo-mark.svg";
import laptopFrame from "@/assets/laptop-frame.svg";

// Laptop mockup images (complete with frame)
import laptopKoncept from "@/assets/laptop-koncept.png";
import laptopGameplan from "@/assets/laptop-gameplan.png";
import laptopFeedplanner from "@/assets/laptop-feedplanner.png";
import laptopInstruktioner from "@/assets/laptop-instruktioner.png";
import laptopInsights from "@/assets/laptop-insights.png";
import laptopSmartsok from "@/assets/laptop-smartsok.png";

// Content manager photos
import teamManager1 from "@/assets/team-manager-1.png";
import teamManager2 from "@/assets/team-manager-2.png";
import teamManager3 from "@/assets/team-manager-3.png";

export const images = {
  // Illustrationer
  illustAi: { src: illustAi, alt: "AI-illustration" },
  illustBar: { src: illustBar, alt: "Restaurangägare" },
  illustBarista: { src: illustBarista, alt: "Barista" },
  illustBartender: { src: illustBartender, alt: "Bartender" },
  illustCafe: { src: illustCafe, alt: "Café-interiör" },
  illustChefPerson: { src: illustChefPerson, alt: "Kock" },
  illustCreator: { src: illustCreator, alt: "Content creator" },
  illustFilming: { src: illustFilming, alt: "Kock som filmar" },
  illustPlatform: { src: illustPlatform, alt: "Person som scrollar TikTok" },
  illustTeam: { src: illustTeam, alt: "Team som planerar strategi" },

  // Stickers
  stickerAi: { src: stickerAi, alt: "AI-sticker" },
  stickerChef: { src: stickerChef, alt: "Kock-sticker" },
  stickerCocktail: { src: stickerCocktail, alt: "Cocktail-sticker" },
  stickerCoffee: { src: stickerCoffee, alt: "Kaffe-sticker" },
  stickerCoin: { src: stickerCoin, alt: "Mynt-sticker" },
  stickerPhone: { src: stickerPhone, alt: "Telefon-sticker" },

  // Logotyper & ramverk
  logoSvg: { src: logoSvg, alt: "LeTrend" },
  logoPng: { src: logoPng, alt: "LeTrend" },
  logoMark: { src: logoMark, alt: "LeTrend-ikon" },
  laptopFrame: { src: laptopFrame, alt: "Laptop-ram" },

  // Laptop mockups (komplett med ram)
  laptopKoncept: { src: laptopKoncept, alt: "Koncept-modulen i LeTrend-plattformen" },
  laptopGameplan: { src: laptopGameplan, alt: "Game Plan-modulen i LeTrend-plattformen" },
  laptopFeedplanner: { src: laptopFeedplanner, alt: "Feed Planner-modulen i LeTrend-plattformen" },
  laptopInstruktioner: { src: laptopInstruktioner, alt: "Videoinstruktioner-modulen i LeTrend-plattformen" },
  laptopInsights: { src: laptopInsights, alt: "Insights-modulen i LeTrend-plattformen" },
  laptopSmartsok: { src: laptopSmartsok, alt: "Smart Sök-modulen i LeTrend-plattformen" },

  // Content managers
  teamManager1: { src: teamManager1, alt: "Content manager" },
  teamManager2: { src: teamManager2, alt: "Content manager" },
  teamManager3: { src: teamManager3, alt: "Content manager" },
} as const;
