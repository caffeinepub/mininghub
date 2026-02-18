/**
 * Calculate monthly income from daily credit
 * Assumes 30 days per month
 */
export function calculateMonthlyIncome(dailyCredit: number): number {
  return Number((dailyCredit * 30).toFixed(2));
}

/**
 * Calculate total potential monthly income including team rewards
 */
export function calculateTotalMonthlyIncome(
  dailyCredit: number,
  teamReward: number = 0,
  levelIncome: number = 0
): number {
  const baseMonthly = calculateMonthlyIncome(dailyCredit);
  return Number((baseMonthly + teamReward + levelIncome).toFixed(2));
}
