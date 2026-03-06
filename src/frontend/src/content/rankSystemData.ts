export interface RankTier {
  id: string;
  name: string;
  memberThreshold: number;
  usdtReward: number;
  badgeImage: string;
  color: string;
}

export const rankTiers: RankTier[] = [
  {
    id: "M1",
    name: "★ M1",
    memberThreshold: 100,
    usdtReward: 180,
    badgeImage: "/assets/generated/rank-m1-badge.dim_128x128.png",
    color: "oklch(0.75 0.15 45)",
  },
  {
    id: "M2",
    name: "★ M2 ★",
    memberThreshold: 300,
    usdtReward: 250,
    badgeImage: "/assets/generated/rank-m2-badge.dim_128x128.png",
    color: "oklch(0.70 0.12 200)",
  },
  {
    id: "M3",
    name: "✦ M3 ✦",
    memberThreshold: 700,
    usdtReward: 300,
    badgeImage: "/assets/generated/rank-m3-badge.dim_128x128.png",
    color: "oklch(0.65 0.18 145)",
  },
  {
    id: "M4",
    name: "✦ M4 ✦",
    memberThreshold: 1000,
    usdtReward: 400,
    badgeImage: "/assets/generated/rank-m4-badge.dim_128x128.png",
    color: "oklch(0.68 0.20 85)",
  },
  {
    id: "M5",
    name: "◆ M5 ◆",
    memberThreshold: 2000,
    usdtReward: 700,
    badgeImage: "/assets/generated/rank-m5-badge.dim_128x128.png",
    color: "oklch(0.72 0.22 280)",
  },
  {
    id: "M6",
    name: "◆ M6 ◆",
    memberThreshold: 4000,
    usdtReward: 1500,
    badgeImage: "/assets/generated/rank-m6-badge.dim_128x128.png",
    color: "oklch(0.60 0.25 320)",
  },
  {
    id: "M7",
    name: "❖ M7 ❖",
    memberThreshold: 10000,
    usdtReward: 2500,
    badgeImage: "/assets/generated/rank-m7-badge.dim_128x128.png",
    color: "oklch(0.65 0.20 180)",
  },
  {
    id: "M8",
    name: "❖ M8 ❖",
    memberThreshold: 25000,
    usdtReward: 4000,
    badgeImage: "/assets/generated/rank-m8-badge.dim_128x128.png",
    color: "oklch(0.70 0.18 25)",
  },
  {
    id: "M9",
    name: "✧ M9 ✧",
    memberThreshold: 60000,
    usdtReward: 9000,
    badgeImage: "/assets/generated/rank-m9-badge.dim_128x128.png",
    color: "oklch(0.75 0.20 45)",
  },
  {
    id: "M10",
    name: "✧ M10 ✧",
    memberThreshold: 100000,
    usdtReward: 18000,
    badgeImage: "/assets/generated/rank-m10-badge.dim_128x128.png",
    color: "oklch(0.80 0.22 60)",
  },
];
