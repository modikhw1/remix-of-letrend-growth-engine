import { useState } from "react";
import KonceptScreen from "@/components/platform/KonceptScreen";
import GamePlanScreen from "@/components/platform/GamePlanScreen";
import FeedPlannerScreen from "@/components/platform/FeedPlannerScreen";
import InstruktionerScreen from "@/components/platform/InstruktionerScreen";
import InsightsScreen from "@/components/platform/InsightsScreen";
import SmartSokScreen from "@/components/platform/SmartSokScreen";

const screens = [
  { name: "Koncept", Component: KonceptScreen },
  { name: "GamePlan", Component: GamePlanScreen },
  { name: "FeedPlanner", Component: FeedPlannerScreen },
  { name: "Instruktioner", Component: InstruktionerScreen },
  { name: "Insights", Component: InsightsScreen },
  { name: "SmartSok", Component: SmartSokScreen },
];

const ScreenExport = () => {
  const [solo, setSolo] = useState<number | null>(null);

  if (solo !== null) {
    const { Component, name } = screens[solo];
    return (
      <div className="bg-background" style={{ width: 800, padding: 0 }}>
        <div style={{ transform: "scale(2.5)", transformOrigin: "top left", width: "40%", minHeight: 300 }}>
          <Component />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">Platform Screen Exports</h1>
      <p className="text-sm text-muted-foreground mb-8">Click a screen to view it solo (for screenshotting).</p>
      <div className="grid grid-cols-3 gap-6">
        {screens.map(({ name, Component }, i) => (
          <button key={name} onClick={() => setSolo(i)} className="text-left">
            <p className="text-xs font-bold mb-1">{name}</p>
            <div className="bg-background border-2 border-foreground rounded-lg overflow-hidden" style={{ width: 360, height: 220 }}>
              <div style={{ transform: "scale(1)", transformOrigin: "top left" }}>
                <Component />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScreenExport;
