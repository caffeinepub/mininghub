import { AnimatedLightingWrapper } from "@/components/AnimatedLightingWrapper";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { LevelIncomeSection } from "@/components/LevelIncomeSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  Calculator,
  FileText,
  LogIn,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

const LOGIN_URL = "https://referral-invest-net.emergent.host";

export function WelcomePortalPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const handleLogin = () => {
    window.location.href = LOGIN_URL;
  };

  const features = [
    {
      icon: Trophy,
      title: t.features.rankSystem.title,
      description: t.features.rankSystem.description,
      path: "/ranks",
      color: "text-vibrant-pink",
      bgGradient: "from-vibrant-pink/20 to-vibrant-orange/20",
    },
    {
      icon: Calculator,
      title: t.features.calculator.title,
      description: t.features.calculator.description,
      path: "/calculator",
      color: "text-vibrant-cyan",
      bgGradient: "from-vibrant-cyan/20 to-vibrant-teal/20",
    },
    {
      icon: BookOpen,
      title: t.features.education.title,
      description: t.features.education.description,
      path: "/education",
      color: "text-vibrant-lime",
      bgGradient: "from-vibrant-lime/20 to-vibrant-yellow/20",
    },
    {
      icon: FileText,
      title: t.features.pdfGenerator.title,
      description: t.features.pdfGenerator.description,
      path: "/pdf",
      color: "text-vibrant-coral",
      bgGradient: "from-vibrant-coral/20 to-vibrant-pink/20",
    },
  ];

  return (
    <AnimatedLightingWrapper intensity="high" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-rainbow-gradient-animated opacity-10" />

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-bounce-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-vibrant-pink/20 to-vibrant-purple/20 rounded-full border-2 animate-rainbow-border">
                <Sparkles className="h-4 w-4 text-vibrant-pink animate-pulse" />
                <span className="text-sm font-medium text-rainbow">
                  {t.welcome.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-rainbow">{t.welcome.heroTitle}</span>
                <br />
                <span className="text-shimmer-heading">
                  {t.welcome.heroSubtitle}
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.welcome.heroDescription}
                <span className="text-vibrant-cyan font-semibold">
                  {" "}
                  {t.welcome.heroDescriptionHighlight}
                </span>{" "}
                {t.welcome.heroDescriptionEnd}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={handleLogin}
                  className="gap-2 bg-rainbow-gradient-animated text-white hover:scale-110 transition-all duration-300 animate-scale-pulse"
                >
                  <LogIn className="h-5 w-5" />
                  <span className="font-semibold">{t.welcome.loginBtn}</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: "/pdf" })}
                  className="gap-2 border-2 animate-rainbow-border hover:scale-105 transition-all duration-300"
                >
                  <FileText className="h-5 w-5" />
                  <span>{t.welcome.downloadPdfBtn}</span>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/30 via-vibrant-cyan/30 to-vibrant-lime/30 rounded-3xl blur-3xl animate-gradient-xy" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 animate-rainbow-border">
                <ImageWithFallback
                  src="/assets/generated/welcome-portal-hero.dim_1200x600.png"
                  alt="Smart Investment Welcome"
                  className="w-full h-auto"
                  fallbackColor="bg-gradient-to-br from-vibrant-pink/20 to-vibrant-cyan/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-rainbow">
            {t.welcome.servicesTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.welcome.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list, index is stable
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 animate-bounce-in border-2 hover:animate-rainbow-border bg-gradient-to-br ${feature.bgGradient} animate-gradient-xy`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate({ to: feature.path })}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-4 group-hover:animate-float`}
                  >
                    <Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-shimmer-heading">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Level Income Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vibrant-purple/10 via-vibrant-pink/10 to-vibrant-orange/10 animate-gradient-xy" />
        <div className="relative">
          <LevelIncomeSection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              label: t.welcome.statsActiveMembers,
              value: "10,000+",
              color: "vibrant-cyan",
              gradient: "from-vibrant-cyan/20 to-vibrant-teal/20",
            },
            {
              icon: TrendingUp,
              label: t.welcome.statsTotalInvestment,
              value: "$5M+",
              color: "vibrant-pink",
              gradient: "from-vibrant-pink/20 to-vibrant-coral/20",
            },
            {
              icon: Trophy,
              label: t.welcome.statsRewardsDistributed,
              value: "$2M+",
              color: "vibrant-lime",
              gradient: "from-vibrant-lime/20 to-vibrant-yellow/20",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list, index is stable
                key={index}
                className={`text-center p-8 animate-bounce-in border-2 hover:animate-rainbow-border bg-gradient-to-br ${stat.gradient} animate-gradient-xy hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center animate-float`}
                  >
                    <Icon className={`h-8 w-8 text-${stat.color}`} />
                  </div>
                </div>
                <div
                  className={`text-4xl font-bold mb-2 text-${stat.color} text-shimmer-heading`}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="relative overflow-hidden border-4 animate-rainbow-border">
          <div className="absolute inset-0 bg-rainbow-gradient-animated opacity-20" />
          <CardContent className="relative p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6 animate-bounce-in">
              <h2 className="text-4xl font-bold text-rainbow">
                {t.welcome.ctaTitle}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.welcome.ctaDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={handleLogin}
                  className="gap-2 bg-rainbow-gradient-animated text-white hover:scale-110 transition-all duration-300 animate-scale-pulse"
                >
                  <LogIn className="h-5 w-5" />
                  <span className="font-semibold">{t.welcome.ctaLoginBtn}</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: "/education" })}
                  className="gap-2 border-2 animate-rainbow-border hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>{t.welcome.ctaLearnBtn}</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border/40 bg-gradient-to-br from-vibrant-purple/5 via-vibrant-pink/5 to-vibrant-cyan/5 animate-gradient-xy">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Smart Investment.{" "}
              {t.welcome.footerRights}
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
    </AnimatedLightingWrapper>
  );
}
