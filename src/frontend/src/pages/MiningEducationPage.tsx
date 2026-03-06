import { ImageWithFallback } from "@/components/ImageWithFallback";
import { MiningEducationSection } from "@/components/MiningEducationSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function MiningEducationPage() {
  const { language } = useLanguage();
  const t = translations[language].education;
  const tPage = translations[language].educationPage;

  return (
    <main className="container mx-auto px-4 py-12 bg-gradient-to-br from-vibrant-purple/5 via-vibrant-pink/5 to-vibrant-cyan/5 animate-gradient-xy">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-bounce-in">
          <h1 className="text-4xl font-bold mb-4 text-rainbow">{t.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-shimmer-body">
            {t.introduction}
          </p>
        </div>

        {/* Hero Images with Fallback */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div
            className="rounded-lg overflow-hidden shadow-lg animate-fade-in-up border-4 border-vibrant-cyan"
            style={{ animationDelay: "100ms" }}
          >
            <ImageWithFallback
              src="/assets/generated/mininghub-crypto-mining-hero.dim_1400x800.png"
              alt="Crypto Mining"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              fallbackColor="bg-gradient-to-br from-vibrant-cyan/20 to-vibrant-purple/20"
            />
          </div>
          <div
            className="rounded-lg overflow-hidden shadow-lg animate-fade-in-up border-4 border-vibrant-lime"
            style={{ animationDelay: "200ms" }}
          >
            <ImageWithFallback
              src="/assets/generated/mininghub-blockchain-dev-hero.dim_1400x800.png"
              alt="Blockchain Development"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              fallbackColor="bg-gradient-to-br from-vibrant-lime/20 to-vibrant-yellow/20"
            />
          </div>
        </div>

        <MiningEducationSection />
      </div>

      <footer className="border-t border-border/40 bg-gradient-to-br from-vibrant-purple/5 via-vibrant-pink/5 to-vibrant-cyan/5 animate-gradient-xy mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Smart Investment.{" "}
              {tPage.footerRights}
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
