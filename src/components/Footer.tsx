import { Link } from "react-router-dom";
import { images } from "@/data/images";
import { global } from "@/data/content";

const Footer = () => (
  <footer className="border-t-2 border-foreground bg-brand py-14 text-brand-foreground">
    <div className="container">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <img src={images.logoSvg.src} alt={images.logoSvg.alt} className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm opacity-70">{global.footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">Tjänsten</span>
          <Link to="/hur-det-fungerar" className="opacity-70 hover:opacity-100 transition-opacity">Hur det fungerar</Link>
          <Link to="/plattformen" className="opacity-70 hover:opacity-100 transition-opacity">Plattformen</Link>
          <Link to="/kundcase" className="opacity-70 hover:opacity-100 transition-opacity">Kundcase</Link>
        </div>
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">LeTrend</span>
          <Link to="/om-oss" className="opacity-70 hover:opacity-100 transition-opacity">Om oss</Link>
          <Link to="/kom-igang" className="opacity-70 hover:opacity-100 transition-opacity">Kom igång</Link>
        </div>
        <div className="text-sm opacity-70">
          <span className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1 block">Kontakt</span>
          <p className="mt-3">{global.footer.location}</p>
          <p className="mt-1">{global.footer.email}</p>
        </div>
      </div>
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} LeTrend. Alla rättigheter förbehållna.
      </div>
    </div>
  </footer>
);

export default Footer;
