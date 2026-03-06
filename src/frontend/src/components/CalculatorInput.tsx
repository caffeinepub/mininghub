import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CalculatorInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
}

export function CalculatorInput({
  label,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 0.01,
  error,
}: CalculatorInputProps) {
  return (
    <div className="space-y-2 animate-fade-in">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="relative">
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className={`pr-16 transition-all duration-300 focus:scale-105 ${
            error ? "border-destructive" : ""
          }`}
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
      {error && (
        <p className="text-xs text-destructive animate-shake">{error}</p>
      )}
    </div>
  );
}
