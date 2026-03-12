const KonceptScreen = () => (
  <div className="p-3 text-[9px] leading-tight">
    {/* Tabs */}
    <div className="flex border-b border-foreground/10 mb-3">
      <span className="border-b-2 border-accent px-3 py-1.5 font-bold text-foreground">Manus</span>
      <span className="px-3 py-1.5 text-muted-foreground">Checklista</span>
      <span className="px-3 py-1.5 text-muted-foreground">Analys</span>
    </div>
    {/* Content */}
    <div className="grid grid-cols-2 gap-2">
      {/* Video thumbnail */}
      <div className="rounded-lg bg-foreground/80 aspect-[4/5] flex items-end p-2">
        <span className="text-[8px] font-bold text-background italic">"thank you he's paying"</span>
      </div>
      {/* Script */}
      <div className="rounded-lg bg-foreground/90 p-2 text-[7px] text-background/80 space-y-1.5">
        <p className="text-[6px] uppercase tracking-wider text-accent/80">Manus — Översatt</p>
        <p><b className="text-background">SERVITÖR:</b> Notan, tack.</p>
        <p><b className="text-background">KVINNA:</b> Tack! Han betalar.</p>
        <p><b className="text-background">MAN:</b> Va? Det sa jag aldrig.</p>
        <p className="text-background/50">[Awkward tystnad]</p>
      </div>
    </div>
  </div>
);

export default KonceptScreen;
