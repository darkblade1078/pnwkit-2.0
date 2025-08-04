import getPercentage from "../other/getPercentage";

/**
 * Get the cost of cities
 * @param {number} startingCity The city count you are at now
 * @param {number} endingCity What city you want to be at
 * @param {number} city_average The top 20% average city count
 * @param {boolean} MD If you have Manifest Destiny
 * @param {boolean} GSA If you have Government Support Agency
 * @param {boolean} BDA If you have Bureau of Domestic Affairs
 * @returns {number} The cost of cities
 */
export default function cityCost(startingCity: number, endingCity: number, city_average: number, MD: boolean, GSA: boolean, BDA: boolean): number {

    let costs = 0;
    let percentage = MD ? BDA ? 8.75 : GSA ? 7.5 : 5 : 0

    for (let i = startingCity; i < endingCity; i++) {

        const city_cost = Math.max(
            (100000 * Math.pow((i + 1 - (city_average / 4)), 3))
            + (150000 * (i + 1 - (city_average / 4)))
            + 75000,
            Math.pow(i + 1, 2) * 100000
        );

        costs += city_average > i ? getPercentage(city_cost, percentage) : city_cost;
    }

    return costs;
}