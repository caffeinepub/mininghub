export interface MiningCalculatorInputs {
  hashRate: number; // TH/s
  electricityCost: number; // $ per kWh
  powerConsumption: number; // Watts
  hardwareCost: number; // $
  cryptoPrice: number; // $ per coin
  blockReward: number; // coins per block
  networkDifficulty: number; // network difficulty
}

export interface MiningCalculatorResults {
  dailyRevenue: number;
  dailyElectricityCost: number;
  dailyProfit: number;
  monthlyRevenue: number;
  monthlyElectricityCost: number;
  monthlyProfit: number;
  yearlyRevenue: number;
  yearlyElectricityCost: number;
  yearlyProfit: number;
  breakEvenDays: number;
  roi: number; // percentage
}

/**
 * Calculate mining profitability based on input parameters
 */
export function calculateMiningProfitability(
  inputs: MiningCalculatorInputs,
): MiningCalculatorResults {
  const {
    hashRate,
    electricityCost,
    powerConsumption,
    hardwareCost,
    cryptoPrice,
    blockReward,
    networkDifficulty,
  } = inputs;

  // Calculate daily mining output (simplified formula)
  // Daily coins = (hashRate * blockReward * 86400) / (networkDifficulty * 2^32)
  const dailyCoins =
    (hashRate * blockReward * 86400) / (networkDifficulty * 2 ** 32);
  const dailyRevenue = dailyCoins * cryptoPrice;

  // Calculate daily electricity cost
  // Daily cost = (powerConsumption / 1000) * 24 * electricityCost
  const dailyElectricityCost = (powerConsumption / 1000) * 24 * electricityCost;

  // Calculate daily profit
  const dailyProfit = dailyRevenue - dailyElectricityCost;

  // Calculate monthly values
  const monthlyRevenue = dailyRevenue * 30;
  const monthlyElectricityCost = dailyElectricityCost * 30;
  const monthlyProfit = dailyProfit * 30;

  // Calculate yearly values
  const yearlyRevenue = dailyRevenue * 365;
  const yearlyElectricityCost = dailyElectricityCost * 365;
  const yearlyProfit = dailyProfit * 365;

  // Calculate break-even point
  const breakEvenDays =
    dailyProfit > 0 ? hardwareCost / dailyProfit : Number.POSITIVE_INFINITY;

  // Calculate ROI percentage
  const roi = yearlyProfit > 0 ? (yearlyProfit / hardwareCost) * 100 : 0;

  return {
    dailyRevenue: Number(dailyRevenue.toFixed(2)),
    dailyElectricityCost: Number(dailyElectricityCost.toFixed(2)),
    dailyProfit: Number(dailyProfit.toFixed(2)),
    monthlyRevenue: Number(monthlyRevenue.toFixed(2)),
    monthlyElectricityCost: Number(monthlyElectricityCost.toFixed(2)),
    monthlyProfit: Number(monthlyProfit.toFixed(2)),
    yearlyRevenue: Number(yearlyRevenue.toFixed(2)),
    yearlyElectricityCost: Number(yearlyElectricityCost.toFixed(2)),
    yearlyProfit: Number(yearlyProfit.toFixed(2)),
    breakEvenDays: Number(breakEvenDays.toFixed(0)),
    roi: Number(roi.toFixed(2)),
  };
}
