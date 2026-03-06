import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { AlertTriangle, BookOpen, Cpu, Users, Zap } from "lucide-react";
import { AnimatedCard } from "./AnimatedCard";

export function MiningEducationSection() {
  const { language } = useLanguage();
  const t = translations[language].education;

  return (
    <div className="space-y-8">
      {/* What is Mining */}
      <AnimatedCard delay={0}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-shimmer-label">
            <BookOpen className="h-5 w-5 text-chart-1" />
            {t.whatIsMiningTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {t.whatIsMiningContent}
          </p>
        </CardContent>
      </AnimatedCard>

      {/* How it Works */}
      <AnimatedCard delay={100}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-shimmer-label">
            <Zap className="h-5 w-5 text-chart-2" />
            {t.howItWorksTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{t.howItWorksContent}</p>
          <div className="space-y-3">
            {t.howItWorksSteps.map((step, idx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list, index is stable
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="h-6 w-6 rounded-full bg-chart-2 text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 text-shimmer-label">
                  {idx + 1}
                </div>
                <p className="text-sm">{step}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </AnimatedCard>

      {/* Hardware Requirements */}
      <AnimatedCard delay={200}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-shimmer-label">
            <Cpu className="h-5 w-5 text-chart-3" />
            {t.hardwareTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{t.hardwareContent}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {t.hardwareTypes.map((type, idx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list, index is stable
                key={idx}
                className="p-4 rounded-lg bg-gradient-to-br from-muted/40 to-muted/20 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h4 className="font-semibold mb-2 text-chart-3 text-shimmer-label">
                  {type.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </AnimatedCard>

      {/* Mining Types */}
      <AnimatedCard delay={300}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-shimmer-label">
            <Users className="h-5 w-5 text-chart-1" />
            {t.miningTypesTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {t.miningTypes.map((type, idx) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list, index is stable
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left hover:text-chart-1 transition-colors text-shimmer-label">
                  {type.name}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </AnimatedCard>

      {/* Challenges */}
      <AnimatedCard delay={400}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-shimmer-label">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            {t.challengesTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {t.challenges.map((item, idx) => (
              <li
                // biome-ignore lint/suspicious/noArrayIndexKey: static ordered list, index is stable
                key={idx}
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </AnimatedCard>
    </div>
  );
}
