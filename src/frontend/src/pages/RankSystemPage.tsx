import { AnimatedLightingWrapper } from "@/components/AnimatedLightingWrapper";
import { RankSystemGrid } from "@/components/RankSystemGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function RankSystemPage() {
  const { language } = useLanguage();
  const t = translations[language].rankPage;

  return (
    <AnimatedLightingWrapper intensity="medium" className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-bounce-in">
            <h1 className="text-5xl font-bold mb-4 text-rainbow">{t.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-shimmer-body">
              {t.subtitle}
            </p>
          </div>

          {/* Rank Grid */}
          <RankSystemGrid />

          {/* Additional Info */}
          <div className="mt-16 p-8 rounded-2xl bg-rainbow-gradient-animated opacity-90 border-4 border-vibrant-pink animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">
              {t.howItWorksTitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg bg-white/90 backdrop-blur-sm animate-float">
                <div className="text-4xl font-bold text-vibrant-pink mb-2 text-shimmer-label">
                  1
                </div>
                <h4 className="font-semibold mb-2 text-shimmer-label">
                  {t.step1Title}
                </h4>
                <p className="text-sm text-muted-foreground">{t.step1Desc}</p>
              </div>
              <div
                className="text-center p-6 rounded-lg bg-white/90 backdrop-blur-sm animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-4xl font-bold text-vibrant-cyan mb-2 text-shimmer-label">
                  2
                </div>
                <h4 className="font-semibold mb-2 text-shimmer-label">
                  {t.step2Title}
                </h4>
                <p className="text-sm text-muted-foreground">{t.step2Desc}</p>
              </div>
              <div
                className="text-center p-6 rounded-lg bg-white/90 backdrop-blur-sm animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-4xl font-bold text-vibrant-lime mb-2 text-shimmer-label">
                  3
                </div>
                <h4 className="font-semibold mb-2 text-shimmer-label">
                  {t.step3Title}
                </h4>
                <p className="text-sm text-muted-foreground">{t.step3Desc}</p>
              </div>
            </div>
          </div>

          <footer className="border-t border-border/40 mt-16 pt-8">
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
          </footer>
        </div>
      </main>
    </AnimatedLightingWrapper>
  );
}
