import { Button } from "@/components/ui/button";
import { type ReactNode, useState } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: "sm" | "default" | "lg" | "icon";
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "rainbow";
  className?: string;
}

export function AnimatedButton({
  children,
  onClick,
  disabled,
  size = "default",
  variant = "default",
  className = "",
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);
    onClick?.();
  };

  const rainbowClass =
    variant === "rainbow"
      ? "bg-rainbow-gradient-animated text-white hover:scale-110 animate-scale-pulse"
      : "";

  const buttonVariant = variant === "rainbow" ? "default" : variant;

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      size={size}
      variant={buttonVariant}
      className={`transition-all duration-300 hover:scale-105 active:scale-95 ${
        isPressed ? "animate-pulse-once" : ""
      } ${rainbowClass} ${className}`}
    >
      {children}
    </Button>
  );
}
