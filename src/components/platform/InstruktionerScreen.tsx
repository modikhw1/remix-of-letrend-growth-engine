import { Check } from "lucide-react";

const InstruktionerScreen = () => (
  <div className="p-3 text-[9px] leading-tight">
    {/* Green header */}
    <div className="rounded-lg bg-sage p-2.5 mb-3 text-center">
      <p className="font-black text-[10px] text-sage-foreground">Allt klart</p>
      <p className="text-[7px] text-sage-foreground/80">Han betalar — redo att filmas</p>
    </div>
    {/* Tabs */}
    <div className="flex border-b border-foreground/10 mb-3">
      <span className="px-3 py-1 text-muted-foreground">Manus</span>
      <span className="border-b-2 border-foreground px-3 py-1 font-bold">Checklista</span>
      <span className="px-3 py-1 text-muted-foreground">Analys</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {/* Checklist */}
      <div className="space-y-1.5">
        <p className="text-[6px] uppercase tracking-wider text-accent font-bold">Produktionschecklista</p>
        {[
          { text: "Smartphone räcker", done: true },
          { text: "Kräver två personer", done: true },
          { text: "Restaurangmiljö", done: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5 rounded-md bg-muted/40 p-1.5">
            <div className={`h-3 w-3 rounded-sm border ${item.done ? "bg-foreground border-foreground" : "border-foreground/30"} flex items-center justify-center`}>
              {item.done && <Check className="h-2 w-2 text-background" />}
            </div>
            <span className={`text-[7px] ${item.done ? "text-foreground" : "text-muted-foreground"}`}>{item.text}</span>
          </div>
        ))}
      </div>
      {/* Quick info */}
      <div className="space-y-1.5">
        <p className="text-[6px] uppercase tracking-wider text-muted-foreground font-bold">Snabbinfo</p>
        <div className="rounded-md bg-muted/40 p-2 text-center">
          <p className="font-black text-[13px]">2 personer</p>
          <p className="text-[6px] text-muted-foreground">Personer behövs</p>
        </div>
        <div className="rounded-md bg-muted/40 p-2 text-center">
          <p className="font-black text-[13px]">Medel</p>
          <p className="text-[6px] text-muted-foreground">Svårighetsgrad</p>
        </div>
      </div>
    </div>
  </div>
);

export default InstruktionerScreen;
