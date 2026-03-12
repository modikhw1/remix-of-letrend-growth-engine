import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface LaptopMockupProps {
  /** Static image of the full laptop with screen content baked in */
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  label?: string;
}

const LaptopMockup = ({ imageSrc, imageAlt = "", className, label }: LaptopMockupProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={cn("flex flex-col items-center", className)}>
        <button
          onClick={() => setExpanded(true)}
          className="relative w-full max-w-[480px] cursor-zoom-in transition-transform hover:scale-[1.02]"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-contain"
          />
        </button>
        {label && (
          <p className="text-xs font-medium text-muted-foreground mt-2">{label}</p>
        )}
      </div>

      {/* Expanded overlay */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl border-thicker border-foreground bg-background shadow-hard-lg overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground bg-card shadow-hard-sm hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="p-4">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            {label && (
              <p className="text-center text-sm font-bold text-muted-foreground py-3 border-t border-foreground/10">{label}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LaptopMockup;
