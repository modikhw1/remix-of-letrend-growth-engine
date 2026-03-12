const FeedPlannerScreen = () => {
  const items = [
    { title: "Pappa fick ta över sociala medier", color: "bg-blush/40" },
    { title: "Hon erbjöd sig att betala", color: "bg-mint/40" },
    { title: "Barista-initieringen", color: "bg-lavender/40" },
  ];
  return (
    <div className="p-3 text-[9px] leading-tight">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-black text-[11px]">Feed-planerare</h3>
        <span className="text-[7px] text-accent underline">Hantera taggar</span>
      </div>
      {/* Color dots */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[7px] text-muted-foreground">Nästa spann:</span>
        {["bg-blush", "bg-accent", "bg-mint", "bg-lavender", "bg-muted"].map((c, i) => (
          <div key={i} className={`h-2 w-2 rounded-full ${c} ${i === 0 ? "ring-1 ring-foreground/30" : ""}`} />
        ))}
      </div>
      {/* Cards as columns */}
      <div className="grid grid-cols-3 gap-1.5">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg border border-foreground/10 bg-card overflow-hidden">
            <p className="p-1.5 text-[7px] font-bold">{item.title}</p>
            <div className={`h-16 ${item.color} relative`}>
              {/* Fake trend line */}
              <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full">
                <path
                  d={i === 0 ? "M0,50 Q30,45 50,30 T100,10" : i === 1 ? "M0,40 Q40,35 60,40 T100,20" : "M0,55 Q50,50 70,30 T100,5"}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPlannerScreen;
