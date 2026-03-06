import { rankTiers } from "@/content/rankSystemData";
import { RankTierCard } from "./RankTierCard";

export function RankSystemGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {rankTiers.map((rank, index) => (
        <RankTierCard key={rank.id} rank={rank} delay={index * 100} />
      ))}
    </div>
  );
}
