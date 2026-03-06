import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedLightingWrapper } from "@/components/AnimatedLightingWrapper";
import { LevelIncomeChart } from "@/components/LevelIncomeChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { DollarSign, Percent, TrendingUp } from "lucide-react";

export function LevelIncomeSection() {
  const { language } = useLanguage();
  const t = translations[language].levelIncome;

  const levelDetails = [
    {
      level: 1,
      percentage: 7,
      color: "text-level-1",
      bgColor: "bg-level-1/10",
      borderColor: "border-level-1/30",
    },
    {
      level: 2,
      percentage: 5,
      color: "text-level-2",
      bgColor: "bg-level-2/10",
      borderColor: "border-level-2/30",
    },
    {
      level: 3,
      percentage: 1,
      color: "text-level-3",
      bgColor: "bg-level-3/10",
      borderColor: "border-level-3/30",
    },
    {
      level: 4,
      percentage: 1,
      color: "text-level-4",
      bgColor: "bg-level-4/10",
      borderColor: "border-level-4/30",
    },
    {
      level: 5,
      percentage: 1,
      color: "text-level-5",
      bgColor: "bg-level-5/10",
      borderColor: "border-level-5/30",
    },
    {
      level: 6,
      percentage: 1,
      color: "text-level-6",
      bgColor: "bg-level-6/10",
      borderColor: "border-level-6/30",
    },
    {
      level: 7,
      percentage: 1,
      color: "text-level-7",
      bgColor: "bg-level-7/10",
      borderColor: "border-level-7/30",
    },
    {
      level: 8,
      percentage: 1,
      color: "text-level-8",
      bgColor: "bg-level-8/10",
      borderColor: "border-level-8/30",
    },
    {
      level: 9,
      percentage: 1,
      color: "text-level-9",
      bgColor: "bg-level-9/10",
      borderColor: "border-level-9/30",
    },
    {
      level: 10,
      percentage: 1,
      color: "text-level-10",
      bgColor: "bg-level-10/10",
      borderColor: "border-level-10/30",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <AnimatedLightingWrapper
        intensity="medium"
        className="rounded-3xl p-8 border border-primary/20"
      >
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <TrendingUp className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary text-shimmer-label">
              {t.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shimmer-heading">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-shimmer-body">
            {t.subtitle}
          </p>
        </div>

        {/* Main Chart Card */}
        <AnimatedCard delay={200} className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-shimmer-label">
              <Percent className="h-6 w-6 text-primary animate-pulse" />
              {t.chartTitle}
            </CardTitle>
            <CardDescription className="text-base">
              {t.chartDesc}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LevelIncomeChart />
          </CardContent>
        </AnimatedCard>

        {/* Level Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {levelDetails.map((detail, index) => (
            <Card
              key={detail.level}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 ${detail.borderColor} ${detail.bgColor} animate-fade-in-up`}
              style={{ animationDelay: `${400 + index * 80}ms` }}
            >
              <CardContent className="p-6 text-center space-y-3">
                {/* Level Number with Glow */}
                <div className="relative inline-block">
                  <div
                    className={`absolute inset-0 ${detail.bgColor} blur-xl animate-glow-pulse`}
                  />
                  <div
                    className={`relative text-4xl font-bold ${detail.color} text-shimmer-label`}
                  >
                    {detail.level}
                  </div>
                </div>

                {/* Level Label */}
                <div className="text-sm font-medium text-muted-foreground">
                  {t.levelLabel} {detail.level}
                </div>

                {/* Percentage with Animation */}
                <div
                  className={`text-2xl font-bold ${detail.color} animate-color-pulse`}
                >
                  {detail.percentage}%
                </div>

                {/* ROI Indicator */}
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <DollarSign className="h-3 w-3" />
                  <span>{t.roiLabel}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <AnimatedCard delay={1200} className="border-2 border-chart-1/30">
            <CardHeader>
              <CardTitle className="text-lg text-shimmer-label">
                {t.highLevelTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.highLevelDesc}</p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={1300} className="border-2 border-chart-2/30">
            <CardHeader>
              <CardTitle className="text-lg text-shimmer-label">
                {t.deepTeamTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.deepTeamDesc}</p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={1400} className="border-2 border-chart-3/30">
            <CardHeader>
              <CardTitle className="text-lg text-shimmer-label">
                {t.totalRoiTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.totalRoiDesc}</p>
            </CardContent>
          </AnimatedCard>
        </div>
      </AnimatedLightingWrapper>
    </section>
  );
}
