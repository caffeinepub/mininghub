import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Download, FileText, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { miningHubPlan } from '@/content/mininghubPlan';
import { generateMiningHubPlanPdf } from '@/features/pdf/generateMiningHubPlanPdf';
import { downloadPdf } from '@/features/pdf/downloadPdf';
import { calculateMonthlyIncome } from '@/features/calculator/incomeCalculator';

export function MiningHubPdfGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    try {
      const pdfBlob = await generateMiningHubPlanPdf();
      downloadPdf(pdfBlob, 'MiningHub-Investment-Plan.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const monthlyIncome = calculateMonthlyIncome(miningHubPlan.package.dailyCredit);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">{miningHubPlan.name}</h1>
                <p className="text-sm text-muted-foreground">{miningHubPlan.tagline}</p>
              </div>
            </div>
            <Button onClick={handleDownloadPdf} disabled={isGenerating} size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              {isGenerating ? 'Generating...' : 'Download PDF'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-chart-1" />
                About MiningHub
              </CardTitle>
              <CardDescription>{miningHubPlan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    What We Do
                  </h4>
                  <ul className="space-y-2">
                    {miningHubPlan.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-chart-1 mt-1.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Why Join MiningHub
                  </h4>
                  <ul className="space-y-2">
                    {miningHubPlan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-chart-2 mt-1.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investment Package */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-chart-1" />
                Investment Package
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-3xl font-bold text-chart-1">${miningHubPlan.package.amount}</div>
                  <div className="text-sm text-muted-foreground mt-1">Single Package</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-3xl font-bold text-chart-2">${miningHubPlan.package.dailyCredit}</div>
                  <div className="text-sm text-muted-foreground mt-1">Daily Credit</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-3xl font-bold text-chart-3">${monthlyIncome}</div>
                  <div className="text-sm text-muted-foreground mt-1">Monthly Earning</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Referral System */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-chart-2" />
                Referral & Level Income
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Direct Referral Reward</h4>
                <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Instant reward to upline</span>
                    <span className="text-xl font-bold text-chart-1">
                      ${miningHubPlan.referral.directReward}
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Level Income (ROI Percentage)</h4>
                <div className="grid sm:grid-cols-5 gap-3">
                  {miningHubPlan.levelIncome.map((level, idx) => (
                    <div key={idx} className="text-center p-4 rounded-lg bg-muted/30 border border-border/50">
                      <div className="text-xs text-muted-foreground mb-1">Level {idx + 1}</div>
                      <div className="text-2xl font-bold text-chart-2">{level.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Rewards */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-chart-3" />
                Team Rewards (Monthly)
              </CardTitle>
              <CardDescription>Build your team and earn monthly rewards based on downline size</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {miningHubPlan.teamRewards.map((reward, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-gradient-to-br from-muted/40 to-muted/20 border border-border/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {reward.teamSize} Members
                      </span>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-chart-3">${reward.monthlyReward}</div>
                    <div className="text-xs text-muted-foreground mt-1">per month</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deposit & Withdrawal */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Deposit & Withdrawal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Deposit Method</h4>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <div className="font-mono text-sm">{miningHubPlan.deposit.method}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Withdrawal System</h4>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <ul className="space-y-1 text-sm">
                      {miningHubPlan.withdrawal.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-chart-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Income Calculator */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Income Calculator Example</CardTitle>
              <CardDescription>See how your investment grows over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Investment</div>
                    <div className="text-xl font-bold">${miningHubPlan.package.amount}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Daily Earning</div>
                    <div className="text-xl font-bold text-chart-1">${miningHubPlan.package.dailyCredit}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Monthly Earning</div>
                    <div className="text-xl font-bold text-chart-2">${monthlyIncome}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  * Additional earnings from team rewards, referrals, and level income can significantly increase
                  your total monthly income.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {miningHubPlan.name}. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'mininghub'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
