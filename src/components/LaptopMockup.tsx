import { cn } from "@/lib/utils";

interface LaptopMockupProps {
  /** Static image of the full laptop with screen content baked in */
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  label?: string;
  onClick?: () => void;
}

const LaptopMockup = ({ imageSrc, imageAlt = "", className, label, onClick }: LaptopMockupProps) => {
  const isInteractive = Boolean(onClick);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "relative w-full max-w-[480px] transition-transform",
          isInteractive ? "cursor-pointer hover:scale-[1.02]" : "cursor-default",
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain"
        />
      </button>
      {label && (
        <p className="mt-2 text-xs font-medium text-muted-foreground">{label}</p>
      )}
    </div>
  );
};

export default LaptopMockup;
