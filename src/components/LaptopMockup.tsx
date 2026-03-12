import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import laptopFrame from "@/assets/laptop-frame.svg";

interface LaptopMockupProps {
  children: ReactNode;
  className?: string;
  label?: string;
  flipped?: boolean;
}

const LaptopMockup = ({ children, className, label, flipped }: LaptopMockupProps) => (
  <div className={cn("flex flex-col items-center", className)}>
    <div
      className={cn(
        "relative w-full max-w-[480px]",
        flipped && "-scale-x-100"
      )}
    >
      {/* Laptop frame SVG (background layer) */}
      <img
        src={laptopFrame}
        alt=""
        className="relative w-full h-auto pointer-events-none select-none"
      />
      {/* Screen content – positioned over the visible screen area, above the SVG */}
      <div
        className={cn(
          "absolute z-20 overflow-hidden"
        )}
        style={{
          top: "5.5%",
          left: "12.5%",
          width: "75%",
          height: "58%",
          borderRadius: "2px",
          transform: flipped ? "scaleX(-1)" : undefined,
        }}
      >
        <div className="h-full w-full overflow-hidden bg-background">
          {children}
        </div>
      </div>
    </div>
    {label && (
      <p className="text-xs font-medium text-muted-foreground mt-2">{label}</p>
    )}
  </div>
);

export default LaptopMockup;
