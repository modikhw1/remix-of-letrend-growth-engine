/**
 * Centraliserad bildkatalog.
 * Ändra sökvägar och alt-texter här → uppdateras i alla komponenter.
 *
 * Importera så här:
 *   import { images } from "@/data/images";
 *   <img src={images.illustFilming.src} alt={images.illustFilming.alt} />
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
} as const;
