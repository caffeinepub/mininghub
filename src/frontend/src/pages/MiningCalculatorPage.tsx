import { MiningCalculator } from "@/components/MiningCalculator";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function MiningCalculatorPage() {
  const { language } = useLanguage();
  const t = translations[language].calculatorPage;

  return (
    <main className="container mx-auto px-4 py-12 bg-gradient-to-br from-vibrant-purple/5 via-vibrant-pink/5 to-vibrant-cyan/5 animate-gradient-xy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-bounce-in">
          <h1 className="text-4xl font-bold mb-4 text-rainbow">{t.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-shimmer-body">
            {t.subtitle}
          </p>
        </div>

        <MiningCalculator />

        <div className="mt-12 p-6 rounded-lg bg-gradient-to-br from-vibrant-cyan/20 to-vibrant-purple/20 border-2 border-vibrant-cyan animate-fade-in">
          <h4 className="font-semibold mb-2 text-rainbow">{t.noteTitle}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• {t.note1}</li>
            <li>• {t.note2}</li>
            <li>• {t.note3}</li>
            <li>• {t.note4}</li>
          </ul>
        </div>
      </div>

      <footer className="border-t-2 border-vibrant-purple bg-gradient-to-br from-vibrant-purple/5 via-vibrant-pink/5 to-vibrant-cyan/5 mt-16">
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
