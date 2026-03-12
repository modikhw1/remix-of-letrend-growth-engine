import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import { pricing as content, global } from "@/data/content";

const Pricing = () => (
  <Layout>
    <section className="py-24 md:py-36">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{content.hero.kicker}</p>
          <h1 className="font-serif text-4xl md:text-5xl">{content.hero.heading}</h1>
          <p className="mt-4 text-muted-foreground">{content.hero.body}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.plans.map((p) => (
            <Card key={p.name} className={`flex flex-col ${p.highlight ? "border-2 border-accent shadow-lg relative" : ""}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  Populärast
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="font-serif text-2xl">{p.name}</CardTitle>
                <div className="mt-2">
                  <span className="font-serif text-3xl">{p.price}</span>
                  {p.unit && <span className="ml-1 text-sm text-muted-foreground">{p.unit}</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`mt-8 w-full ${p.highlight ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`} variant={p.highlight ? "default" : "outline"}>
                  <Link to="/kom-igang">{p.name === "Custom" ? "Kontakta oss" : global.cta.primary}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Always included */}
        <div className="mx-auto mt-16 max-w-md text-center">
          <h3 className="font-serif text-xl">Alltid ingår</h3>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {content.alwaysIncluded.map((f) => (
              <li key={f} className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="border-t bg-primary py-20 text-center text-primary-foreground">
      <div className="container mx-auto max-w-xl">
        <h2 className="font-serif text-3xl">{content.cta.heading}</h2>
        <p className="mt-4 opacity-80">{content.cta.body}</p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/kom-igang">{global.cta.primary}</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Pricing;
