const InsightsScreen = () => {
  const bars = [
    { label: "Mån", h: 30 },
    { label: "Tis", h: 65 },
    { label: "Ons", h: 45 },
    { label: "Tor", h: 80 },
    { label: "Fre", h: 55 },
    { label: "Lör", h: 25 },
    { label: "Sön", h: 15 },
  ];
  return (
    <div className="p-3 text-[9px] leading-tight">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-black text-[11px]">Insights</h3>
        <span className="text-[7px] text-muted-foreground">Senaste 7 dagarna</span>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          { label: "Visningar", val: "24.3K", change: "+18%" },
          { label: "Räckvidd", val: "8.1K", change: "+7%" },
          { label: "Engagemang", val: "4.2%", change: "+0.3%" },
        ].map((s) => (
          <div key={s.label} className="rounded-md bg-muted/40 p-1.5 text-center">
            <p className="font-black text-[11px]">{s.val}</p>
            <p className="text-[6px] text-muted-foreground">{s.label}</p>
            <p className="text-[6px] text-accent font-bold">{s.change}</p>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div className="flex items-end justify-between gap-1 h-[70px]">
        {bars.map((b) => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-0.5">
            <div
              className="w-full rounded-t bg-accent"
              style={{ height: `${b.h}%` }}
            />
            <span className="text-[6px] text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsScreen;
