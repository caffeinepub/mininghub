import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import type { MiningCalculatorResults } from "@/features/calculator/miningCalculator";
import { translations } from "@/i18n/translations";
import {
  Calendar,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatedCard } from "./AnimatedCard";

interface CalculatorResultsProps {
  results: MiningCalculatorResults;
}

export function CalculatorResults({ results }: CalculatorResultsProps) {
  const { language } = useLanguage();
  const t = translations[language].calculatorResults;

  const resultCards = [
    {
      title: t.dailyIncome,
      revenue: results.dailyRevenue,
      cost: results.dailyElectricityCost,
      profit: results.dailyProfit,
      icon: Calendar,
      delay: 0,
    },
    {
      title: t.monthlyIncome,
      revenue: results.monthlyRevenue,
      cost: results.monthlyElectricityCost,
      profit: results.monthlyProfit,
      icon: TrendingUp,
      delay: 100,
    },
    {
      title: t.yearlyIncome,
      revenue: results.yearlyRevenue,
      cost: results.yearlyElectricityCost,
      profit: results.yearlyProfit,
      icon: DollarSign,
      delay: 200,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {resultCards.map((card) => {
          const Icon = card.icon;
          const isProfit = card.profit > 0;
          return (
            <AnimatedCard key={card.title} delay={card.delay}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-shimmer-label">
                  <Icon className="h-5 w-5 text-chart-1" />
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {t.revenue}
                  </span>
                  <span className="text-lg font-bold text-chart-1 text-shimmer-label">
                    ${card.revenue}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {t.electricityCost}
                  </span>
                  <span className="text-lg font-bold text-destructive text-shimmer-label">
                    -${card.cost}
                  </span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">{t.netProfit}</span>
                  <span
                    className={`text-xl font-bold flex items-center gap-1 text-shimmer-label ${
                      isProfit ? "text-chart-2" : "text-destructive"
                    }`}
                  >
                    {isProfit ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    ${card.profit}
                  </span>
                </div>
              </CardContent>
            </AnimatedCard>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedCard delay={300}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-shimmer-label">
              <Zap className="h-5 w-5 text-chart-3" />
              {t.breakEvenTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6 rounded-lg bg-muted/30">
              <div className="text-4xl font-bold text-chart-3 text-shimmer-label">
                {results.breakEvenDays === Number.POSITIVE_INFINITY
                  ? "∞"
                  : results.breakEvenDays}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {results.breakEvenDays === Number.POSITIVE_INFINITY
                  ? t.unprofitable
                  : t.days}
              </div>
            </div>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-shimmer-label">
              <TrendingUp className="h-5 w-5 text-chart-2" />
              {t.roiTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6 rounded-lg bg-muted/30">
              <div
                className={`text-4xl font-bold text-shimmer-label ${
                  results.roi > 0 ? "text-chart-2" : "text-destructive"
                }`}
              >
                {results.roi}%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {t.returnOnInvestment}
              </div>
            </div>
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  );
}
