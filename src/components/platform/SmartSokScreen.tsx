const SmartSokScreen = () => {
  const items = [
    { title: "När en kund är förstående — tar av sig förklädet", tag: "Medel" },
    { title: "Han betalar — fast de aldrig träffats förut", tag: "Medel" },
    { title: "Chefen sa: jobba även när det är tomt", tag: "Medel" },
  ];
  return (
    <div className="p-3 text-[9px] leading-tight">
      <h3 className="font-black text-[11px] mb-1">Bibliotek</h3>
      <p className="text-[7px] text-muted-foreground mb-2">Bläddra och sök bland alla koncept.</p>
      {/* Search bar */}
      <div className="flex gap-1.5 mb-3">
        <div className="flex-1 rounded-md border border-foreground/15 bg-card px-2 py-1 text-[7px] text-muted-foreground">
          Sök koncept...
        </div>
        <div className="rounded-md border border-foreground/15 bg-card px-2 py-1 text-[7px]">
          Medel ▾
        </div>
      </div>
      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg border border-foreground/10 bg-card overflow-hidden">
            <div className="h-10 bg-muted/50 flex items-center justify-center text-[8px] text-muted-foreground">
              Öppna
            </div>
            <div className="p-1.5">
              <p className="font-bold text-[6.5px] line-clamp-2">{item.title}</p>
              <div className="flex gap-1 mt-1">
                <span className="rounded-full bg-gold/30 px-1 py-[1px] text-[5px] font-bold text-accent">{item.tag}</span>
                <span className="text-[5px] text-muted-foreground">5min</span>
              </div>
            </div>
            <div className="mx-1.5 mb-1.5">
              <div className="rounded bg-foreground text-background text-center py-1 text-[6px] font-bold">
                + Lägg till
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartSokScreen;
