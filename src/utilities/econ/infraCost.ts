import accurateRounding from "../other/accurateRounding";
import getPercentage from "../other/getPercentage";

/**
 * Get the cost of infra
 * @param {number} startingAmount The amount of infra you start with
 * @param {number} endingAmount The amount of infra you want to be at
 * @param {number} cities How many cities you are building this infra in
 * @param {boolean} CCE If you have Center of Civil Engineering
 * @param {boolean} AEC If you have Advanced Engineering Corps
 * @param {boolean} URB If you have Urbanization
 * @param {boolean} GSA If you have Government Agency Support
 * @param {boolean} BDA If you have Bureau of Domestic Affairs
 * @returns {number} The cost of infra
 */
export default function infraCost(startingAmount: number, endingAmount: number, cities: number, CCE: boolean, AEC: boolean, URB: boolean, GSA: boolean, BDA: boolean): number {

  let infraPrice = infraCostFormula(startingAmount, endingAmount);
  let percentage = 100;
  percentage -= (CCE && AEC) ? percentage = 10 : (CCE ? 5 : 0);
  percentage -= URB ? BDA ? 8.75 : GSA ? 7.5 : 5 : 0


  infraPrice = getPercentage(infraPrice, percentage);

  if (cities > 0)
    infraPrice *= cities;

  return infraPrice;
}


function infraCostFormula(startingAmount: number, endingAmount: number): number {

  let value = 0;
  let cost_of_chunk = 0;
  startingAmount = accurateRounding(startingAmount, 2);
  endingAmount = accurateRounding(endingAmount, 2);
  let difference = endingAmount - startingAmount;
  let infra_price;

  if (difference > 10000) {
    return 0;
  }

  if (difference == 0) {
    value = 0;
    return value;
  }

  if (difference < 0) {
    infra_price = 150;
    value = infra_price * difference;
    return value;
  }

  if (difference > 100 && (difference % 100 == 0)) {
    cost_of_chunk = accurateRounding(InfraPrice(startingAmount), 2) * 100;
    value += (cost_of_chunk + infraCostFormula((startingAmount + 100), endingAmount));
    return value;
  }

  if (difference > 100 && (difference % 100 != 0)) {
    cost_of_chunk = accurateRounding(InfraPrice(startingAmount), 2) * (difference % 100);
    value += (cost_of_chunk + infraCostFormula((startingAmount + (difference % 100)), endingAmount));
    return value;
  }

  if (difference <= 100) {
    cost_of_chunk = accurateRounding(InfraPrice(startingAmount), 2) * difference;
    value += cost_of_chunk;
    return value;
  }

  return value;
}

function InfraPrice(amount: number): number {
  return (Math.pow(Math.abs(amount - 10), 2.2) / 710) + 300;
}