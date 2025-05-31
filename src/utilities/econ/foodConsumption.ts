import { city } from "../../interfaces/queries/city";
import getDaysBetween from "../other/getDaysBetween";

/**
 * Gets how much food a nation consumes in a day
 *
 * @export
 * @param {city[]} cities Array of nations cities including infrastructure and date
 * @param {number} soldiers The nations soldiers
 * @param {?boolean} [atWar] Whether the nation is at war or not
 * @param {number} [groundCost=0] The number of groundCost research levels the nation has
 * @returns {number} 
 */
export default function foodConsumption(cities: city[], soldiers: number, atWar?: boolean, groundCost: number = 0): number {
    if (!cities[0].infrastructure) throw new Error(`PnwKit: missing cities.infrastructure`);
    if (!cities[0].date) throw new Error(`PnwKit: missing cities.date`);

    const newDate = new Date();

    let cost = 0;

    for (let i = 0; i < cities.length; i++) {
        let city = cities[i];
        let oldDate = new Date(city.date);

        cost += (((city.infrastructure! * 100) ** 2) / 125_000_000) + (((city.infrastructure! * 100) * (1 + Math.max(Math.log(getDaysBetween(oldDate, newDate)) / 15, 0)) - city.infrastructure! * 100) / 850)
    }

    return cost + (atWar ? soldiers / (500 + 30 * groundCost) : soldiers / (750 + 20 * groundCost));
}