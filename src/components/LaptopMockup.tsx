import { cn } from "@/lib/utils";

interface LaptopMockupProps {
  /** Static image of the full laptop with screen content baked in */
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  label?: string;
}

const LaptopMockup = ({ imageSrc, imageAlt = "", className, label }: LaptopMockupProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-full max-w-[520px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain"
        />
      </div>
      {label && (
        <p className="mt-2 text-xs font-medium text-muted-foreground">{label}</p>
      )}
    </div>
  );
};

export default LaptopMockup;
