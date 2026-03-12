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

const ScreenExport = () => (
  <div className="min-h-screen bg-white p-8">
    <h1 className="text-2xl font-bold mb-8">Platform Screen Exports (3x scale)</h1>
    <div className="grid grid-cols-2 gap-8">
      {screens.map(({ name, Component }) => (
        <div key={name}>
          <p className="text-sm font-bold mb-2">{name}</p>
          <div
            id={`screen-${name}`}
            className="bg-background border-2 border-foreground rounded-lg overflow-hidden"
            style={{ width: 720, height: 420, transform: "scale(1)", transformOrigin: "top left" }}
          >
            <div style={{ transform: "scale(2)", transformOrigin: "top left", width: "50%", height: "50%" }}>
              <Component />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ScreenExport;
