import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

const PhoneMockup = ({ children, className, label }: PhoneMockupProps) => (
  <div className={cn("flex flex-col items-center", className)}>
    <div className="relative w-[260px] rounded-[2.5rem] border-[4px] border-foreground bg-card p-1 shadow-hard-lg">
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground" />
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[2.2rem] bg-background">
        <div className="pt-8">{children}</div>
      </div>
    </div>
    {label && (
      <p className="mt-4 text-xs font-medium text-muted-foreground">{label}</p>
    )}
  </div>
);

export default PhoneMockup;
