import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/letrend-logo.svg";

const links = [
  { to: "/", label: "Hem" },
  { to: "/hur-det-fungerar", label: "Hur det fungerar" },
  { to: "/plattformen", label: "Plattformen" },
  { to: "/kundcase", label: "Kundcase" },
  { to: "/om-oss", label: "Om oss" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="LeTrend" className="h-11 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to))
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-foreground/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://app.letrend.se"
            className="ml-4 rounded-full px-4 py-1.5 text-sm font-semibold border-2 border-foreground/30 text-foreground/70 hover:border-foreground hover:text-foreground transition-colors"
          >
            Logga in
          </a>
          <Button asChild size="sm" className="ml-2 rounded-full border-2 border-foreground bg-foreground text-background hover:bg-foreground/90 transition-all">
            <Link to="/kom-igang">Kom igång</Link>
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Meny">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-foreground bg-background px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                  location.pathname === l.to ? "bg-foreground text-background" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://app.letrend.se"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground/70 border-2 border-foreground/20 hover:border-foreground/60 transition-colors"
            >
              Logga in
            </a>
            <Button asChild size="sm" className="mt-2 rounded-full border-2 border-foreground bg-foreground text-background">
              <Link to="/kom-igang" onClick={() => setOpen(false)}>Kom igång</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
