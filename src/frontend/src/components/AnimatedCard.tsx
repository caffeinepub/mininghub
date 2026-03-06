import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "float" | "bounce" | "rainbow";
  gradientBg?: boolean;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  variant = "default",
  gradientBg = false,
}: AnimatedCardProps) {
  const animationClass =
    variant === "float"
      ? "animate-float"
      : variant === "bounce"
        ? "animate-bounce-in"
        : "animate-fade-in-up";

  const borderClass =
    variant === "rainbow" ? "border-2 animate-rainbow-border" : "";

  const bgClass = gradientBg
    ? "bg-gradient-to-br from-vibrant-pink/10 via-vibrant-cyan/10 to-vibrant-lime/10 animate-gradient-xy"
    : "";

  return (
    <Card
      className={`${animationClass} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${borderClass} ${bgClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Card>
  );
}
