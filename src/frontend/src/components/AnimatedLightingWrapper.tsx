import type { ReactNode } from "react";

interface AnimatedLightingWrapperProps {
  children: ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function AnimatedLightingWrapper({
  children,
  className = "",
  intensity = "medium",
}: AnimatedLightingWrapperProps) {
  const intensityClasses = {
    low: "opacity-30",
    medium: "opacity-50",
    high: "opacity-70",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 -z-10 animate-color-shift ${intensityClasses[intensity]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 via-chart-3/20 to-chart-5/20" />
      </div>

      {/* Ambient glow effect */}
      <div
        className={`absolute inset-0 -z-10 animate-ambient-glow ${intensityClasses[intensity]}`}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-chart-1/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-3/30 rounded-full blur-3xl" />
      </div>

      {children}
    </div>
  );
}
