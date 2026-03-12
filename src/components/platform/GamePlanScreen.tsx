const GamePlanScreen = () => (
  <div className="p-3 text-[9px] leading-tight">
    <p className="text-[7px] uppercase tracking-wider text-accent font-bold mb-0.5">Din Gameplan</p>
    <h3 className="font-black text-[11px] mb-3">Strategi & tips</h3>
    {/* Card */}
    <div className="rounded-lg border border-foreground/10 bg-card p-2.5 mb-2">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="h-4 w-4 rounded bg-muted flex items-center justify-center text-[6px]">📋</div>
        <div>
          <p className="font-bold text-[8px]">Anteckningar för @mellowcafe</p>
          <p className="text-[6px] text-muted-foreground">Uppdaterad 8 jan</p>
        </div>
      </div>
      <div className="border-l-2 border-accent/30 pl-2 space-y-1.5 text-[7px] text-foreground/80">
        <p><b className="text-foreground">Vad som funkar</b></p>
        <p>Ni har en tydlig röst — mysig men med torr humor.</p>
        <p><b className="text-foreground">Vad ni kan testa</b></p>
        <p>Pusha den torra humorn lite mer.</p>
        <div className="flex gap-1 flex-wrap pt-0.5">
          {["@salongwoar", "@restaurangen"].map(t => (
            <span key={t} className="rounded-full border border-foreground/15 bg-muted/50 px-1.5 py-0.5 text-[6px]">♪ {t}</span>
          ))}
        </div>
        <p><b className="text-foreground">Timing</b></p>
        <p>Tisdagsposter går bättre än helgen.</p>
      </div>
    </div>
  </div>
);

export default GamePlanScreen;
