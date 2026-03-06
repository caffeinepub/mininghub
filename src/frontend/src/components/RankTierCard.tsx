import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { RankTier } from "@/content/rankSystemData";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { Award, Users } from "lucide-react";
import { AnimatedLightingWrapper } from "./AnimatedLightingWrapper";

interface RankTierCardProps {
  rank: RankTier;
  delay?: number;
}

function renderRankNameWithGlow(name: string, color: string) {
  const specialChars = ["★", "✦", "◆", "❖", "✧"];
  const parts = name.split("");

  return (
    <>
      {parts.map((char, index) => {
        if (specialChars.includes(char)) {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: character-by-character split, index is stable
            <span key={index} className="special-char-glow" style={{ color }}>
              {char}
            </span>
          );
        }
        // biome-ignore lint/suspicious/noArrayIndexKey: character-by-character split, index is stable
        return <span key={index}>{char}</span>;
      })}
    </>
  );
}

export function RankTierCard({ rank, delay = 0 }: RankTierCardProps) {
  const { language } = useLanguage();
  const t = translations[language].rankCard;

  return (
    <div className="animate-bounce-in" style={{ animationDelay: `${delay}ms` }}>
      <AnimatedLightingWrapper intensity="low" className="h-full">
        <Card className="h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl border-4 hover:animate-rainbow-border group bg-gradient-to-br from-vibrant-pink/5 via-vibrant-cyan/5 to-vibrant-lime/5 animate-gradient-xy">
          <CardHeader className="text-center pb-4">
            {/* Badge */}
            <div className="relative mx-auto mb-4">
              <div className="absolute inset-0 bg-rainbow-gradient rounded-full blur-xl animate-rainbow-glow" />
              <img
                src={rank.badgeImage}
                alt={`${rank.name} Badge`}
                className="relative w-24 h-24 mx-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 animate-float"
              />
            </div>

            {/* Rank Name with Special Character Glow */}
            <h3
              className="text-2xl font-bold mb-2 text-rainbow"
              style={{ color: rank.color }}
            >
              {renderRankNameWithGlow(rank.name, rank.color)}
            </h3>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Member Threshold */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-vibrant-cyan/20 to-vibrant-teal/20 border-2 animate-rainbow-border transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-vibrant-cyan" />
                <span className="text-sm text-muted-foreground">
                  {t.membersRequired}
                </span>
              </div>
              <span className="text-lg font-bold text-rainbow">
                {rank.memberThreshold.toLocaleString()}
              </span>
            </div>

            {/* USDT Reward */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-vibrant-pink/20 to-vibrant-coral/20 border-2 animate-rainbow-border transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-vibrant-pink" />
                <span className="text-sm font-medium">{t.monthlyReward}</span>
              </div>
              <span className="text-xl font-bold text-rainbow">
                ${rank.usdtReward.toLocaleString()} USDT
              </span>
            </div>

            {/* Hover Effect Indicator */}
            <div className="text-center pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-muted-foreground text-rainbow">
                {t.buildTeamHint}
              </span>
            </div>
          </CardContent>
        </Card>
      </AnimatedLightingWrapper>
    </div>
  );
}
