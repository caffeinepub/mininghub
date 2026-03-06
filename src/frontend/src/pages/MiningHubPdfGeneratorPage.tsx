import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedCard } from "@/components/AnimatedCard";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { miningHubPlan } from "@/content/mininghubPlan";
import { useLanguage } from "@/contexts/LanguageContext";
import { calculateMonthlyIncome } from "@/features/calculator/incomeCalculator";
import { downloadPdf } from "@/features/pdf/downloadPdf";
import { generateMiningHubPlanPdf } from "@/features/pdf/generateMiningHubPlanPdf";
import { translations } from "@/i18n/translations";
import { Award, DollarSign, Download, FileText, Users } from "lucide-react";
import { useState } from "react";

export function MiningHubPdfGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].pdfPage;
  const tPlan = translations[language].plan;

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    try {
      const pdfBlob = await generateMiningHubPlanPdf();
      downloadPdf(pdfBlob, "SmartInvestment-Investment-Plan.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const monthlyIncome = calculateMonthlyIncome(
    miningHubPlan.package.dailyCredit,
  );

  return (
    <main className="container mx-auto px-4 py-12 bg-gradient-to-br from-vibrant-purple/5 via-vibrant-pink/5 to-vibrant-cyan/5 animate-gradient-xy">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center animate-bounce-in">
          <h1 className="text-4xl font-bold mb-4 text-rainbow">{t.title}</h1>
          <p className="text-lg text-muted-foreground text-shimmer-body">
            {t.subtitle}
          </p>
        </div>

        {/* Download Button Section */}
        <div
          className="text-center animate-bounce-in"
          style={{ animationDelay: "100ms" }}
        >
          <AnimatedButton
            onClick={handleDownloadPdf}
            disabled={isGenerating}
            size="lg"
            variant="rainbow"
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            <span className="font-semibold">
              {isGenerating ? t.generatingBtn : t.downloadBtn}
            </span>
          </AnimatedButton>
        </div>

        {/* Introduction */}
        <AnimatedCard delay={200} variant="float" gradientBg>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rainbow">
              <FileText className="h-5 w-5 text-vibrant-cyan" />
              {t.aboutTitle}
            </CardTitle>
            <CardDescription>{tPlan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground text-rainbow">
                  {t.whatWeDoTitle}
                </h4>
                <ul className="space-y-2">
                  {tPlan.services.map((service, idx) => (
                    <li
                      // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list
                      key={idx}
                      className="flex items-start gap-2 text-sm animate-bounce-in"
                      style={{ animationDelay: `${300 + idx * 50}ms` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-vibrant-cyan mt-1.5 shrink-0 animate-scale-pulse" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground text-rainbow">
                  {t.whyJoinTitle}
                </h4>
                <ul className="space-y-2">
                  {tPlan.benefits.map((benefit, idx) => (
                    <li
                      // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list
                      key={idx}
                      className="flex items-start gap-2 text-sm animate-bounce-in"
                      style={{ animationDelay: `${300 + idx * 50}ms` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-vibrant-pink mt-1.5 shrink-0 animate-scale-pulse" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Investment Package */}
        <AnimatedCard delay={300} variant="bounce" gradientBg>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rainbow">
              <DollarSign className="h-5 w-5 text-vibrant-lime" />
              {t.investmentPackageTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-vibrant-coral/20 hover:scale-105 transition-all duration-300 border-2 border-vibrant-pink">
                <div className="text-3xl font-bold text-rainbow">
                  ${miningHubPlan.package.amount}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.singlePackageLabel}
                </div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-vibrant-cyan/20 to-vibrant-teal/20 hover:scale-105 transition-all duration-300 border-2 border-vibrant-cyan">
                <div className="text-3xl font-bold text-rainbow">
                  ${miningHubPlan.package.dailyCredit}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.dailyCreditLabel}
                </div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-vibrant-lime/20 to-vibrant-yellow/20 hover:scale-105 transition-all duration-300 border-2 border-vibrant-lime">
                <div className="text-3xl font-bold text-rainbow">
                  ${monthlyIncome}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.monthlyEarningLabel}
                </div>
              </div>
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Referral System */}
        <AnimatedCard delay={400} variant="float" gradientBg>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rainbow">
              <Users className="h-5 w-5 text-vibrant-purple" />
              {t.referralTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-rainbow">
                {t.directReferralTitle}
              </h4>
              <div className="p-4 rounded-lg bg-gradient-to-r from-vibrant-pink/20 to-vibrant-orange/20 border-2 border-vibrant-pink hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t.directReferralDesc}</span>
                  <span className="text-xl font-bold text-rainbow">
                    ${miningHubPlan.referral.directReward}
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-3 text-rainbow">
                {t.levelIncomeTitle}
              </h4>
              <div className="grid sm:grid-cols-5 gap-3">
                {miningHubPlan.levelIncome.map((level, idx) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list
                    key={idx}
                    className="text-center p-4 rounded-lg bg-gradient-to-br from-vibrant-cyan/20 to-vibrant-purple/20 border-2 border-vibrant-cyan hover:scale-105 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="text-xs text-muted-foreground mb-1">
                      {t.levelLabel} {idx + 1}
                    </div>
                    <div className="text-2xl font-bold text-rainbow">
                      {level.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Team Rewards */}
        <AnimatedCard delay={500} variant="bounce" gradientBg>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rainbow">
              <Award className="h-5 w-5 text-vibrant-coral" />
              {t.teamRewardsTitle}
            </CardTitle>
            <CardDescription>{t.teamRewardsDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {miningHubPlan.teamRewards.map((reward, idx) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list
                  key={idx}
                  className="p-5 rounded-lg bg-gradient-to-br from-vibrant-lime/20 to-vibrant-teal/20 border-2 border-vibrant-lime hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground text-rainbow">
                      {reward.teamSize} {t.membersLabel}
                    </span>
                    <Users className="h-4 w-4 text-vibrant-teal" />
                  </div>
                  <div className="text-2xl font-bold text-rainbow">
                    ${reward.monthlyReward}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t.perMonthLabel}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Deposit & Withdrawal */}
        <AnimatedCard delay={600} variant="float" gradientBg>
          <CardHeader>
            <CardTitle className="text-rainbow">
              {t.depositWithdrawalTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-sm text-rainbow">
                  {t.depositMethodLabel}
                </h4>
                <div className="p-4 rounded-lg bg-gradient-to-r from-vibrant-orange/20 to-vibrant-coral/20 border-2 border-vibrant-orange hover:scale-105 transition-all duration-300">
                  <div className="font-mono text-sm">
                    {miningHubPlan.deposit.method}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm text-rainbow">
                  {t.withdrawalSystemLabel}
                </h4>
                <div className="p-4 rounded-lg bg-gradient-to-r from-vibrant-cyan/20 to-vibrant-purple/20 border-2 border-vibrant-cyan hover:scale-105 transition-all duration-300">
                  <ul className="space-y-1 text-sm">
                    {tPlan.withdrawalFeatures.map((feature, idx) => (
                      <li
                        // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list
                        key={idx}
                        className="flex items-center gap-2 animate-bounce-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <span className="h-1 w-1 rounded-full bg-vibrant-cyan animate-scale-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Income Calculator */}
        <AnimatedCard delay={700} variant="bounce" gradientBg>
          <CardHeader>
            <CardTitle className="text-rainbow">
              {t.incomeCalculatorTitle}
            </CardTitle>
            <CardDescription>{t.incomeCalculatorDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-vibrant-orange/20 border-2 border-vibrant-pink hover:scale-105 transition-all duration-300">
                  <div className="text-xs text-muted-foreground mb-1">
                    {t.investmentLabel}
                  </div>
                  <div className="text-xl font-bold text-rainbow">
                    ${miningHubPlan.package.amount}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-vibrant-cyan/20 to-vibrant-teal/20 border-2 border-vibrant-cyan hover:scale-105 transition-all duration-300">
                  <div className="text-xs text-muted-foreground mb-1">
                    {t.dailyEarningLabel}
                  </div>
                  <div className="text-xl font-bold text-rainbow">
                    ${miningHubPlan.package.dailyCredit}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-vibrant-lime/20 to-vibrant-yellow/20 border-2 border-vibrant-lime hover:scale-105 transition-all duration-300">
                  <div className="text-xs text-muted-foreground mb-1">
                    {t.monthlyEarningLabel2}
                  </div>
                  <div className="text-xl font-bold text-rainbow">
                    ${monthlyIncome}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t.incomeNote}</p>
            </div>
          </CardContent>
        </AnimatedCard>
      </div>

      <footer className="border-t border-border/40 bg-gradient-to-br from-vibrant-purple/5 via-vibrant-pink/5 to-vibrant-cyan/5 animate-gradient-xy mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Smart Investment. {t.footerRights}
            </div>
            <div className="text-sm text-muted-foreground">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== "undefined"
                    ? window.location.hostname
                    : "smart-investment",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors text-rainbow"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
