import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  type MiningCalculatorInputs,
  type MiningCalculatorResults,
  calculateMiningProfitability,
} from "@/features/calculator/miningCalculator";
import { translations } from "@/i18n/translations";
import { Calculator } from "lucide-react";
import { useState } from "react";
import { AnimatedButton } from "./AnimatedButton";
import { AnimatedCard } from "./AnimatedCard";
import { CalculatorInput } from "./CalculatorInput";
import { CalculatorResults } from "./CalculatorResults";

export function MiningCalculator() {
  const { language } = useLanguage();
  const t = translations[language].miningCalculator;

  const [inputs, setInputs] = useState<MiningCalculatorInputs>({
    hashRate: 100,
    electricityCost: 0.12,
    powerConsumption: 3250,
    hardwareCost: 10000,
    cryptoPrice: 50000,
    blockReward: 6.25,
    networkDifficulty: 50000000000000,
  });

  const [results, setResults] = useState<MiningCalculatorResults | null>(null);

  const handleInputChange = (
    field: keyof MiningCalculatorInputs,
    value: number,
  ) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    const calculatedResults = calculateMiningProfitability(inputs);
    setResults(calculatedResults);
  };

  return (
    <div className="space-y-8">
      <AnimatedCard>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-chart-1" />
            {t.parametersTitle}
          </CardTitle>
          <CardDescription>{t.parametersDesc}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <CalculatorInput
              label={t.hashRateLabel}
              value={inputs.hashRate}
              onChange={(value) => handleInputChange("hashRate", value)}
              unit="TH/s"
              min={0.01}
              step={0.1}
            />
            <CalculatorInput
              label={t.electricityCostLabel}
              value={inputs.electricityCost}
              onChange={(value) => handleInputChange("electricityCost", value)}
              unit="$/kWh"
              min={0}
              step={0.01}
            />
            <CalculatorInput
              label={t.powerConsumptionLabel}
              value={inputs.powerConsumption}
              onChange={(value) => handleInputChange("powerConsumption", value)}
              unit="Watts"
              min={0}
              step={1}
            />
            <CalculatorInput
              label={t.hardwareCostLabel}
              value={inputs.hardwareCost}
              onChange={(value) => handleInputChange("hardwareCost", value)}
              unit="$"
              min={0}
              step={100}
            />
            <CalculatorInput
              label={t.cryptoPriceLabel}
              value={inputs.cryptoPrice}
              onChange={(value) => handleInputChange("cryptoPrice", value)}
              unit="$"
              min={0}
              step={100}
            />
            <CalculatorInput
              label={t.blockRewardLabel}
              value={inputs.blockReward}
              onChange={(value) => handleInputChange("blockReward", value)}
              unit="coins"
              min={0}
              step={0.01}
            />
            <CalculatorInput
              label={t.networkDifficultyLabel}
              value={inputs.networkDifficulty}
              onChange={(value) =>
                handleInputChange("networkDifficulty", value)
              }
              min={1}
              step={1000000000}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <AnimatedButton
              onClick={handleCalculate}
              size="lg"
              className="gap-2"
            >
              <Calculator className="h-4 w-4" />
              {t.calculateBtn}
            </AnimatedButton>
          </div>
        </CardContent>
      </AnimatedCard>

      {results && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">{t.resultsTitle}</h3>
          <CalculatorResults results={results} />
        </div>
      )}
    </div>
  );
}
