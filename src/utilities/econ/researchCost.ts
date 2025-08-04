import { resourcePrices } from '../../interfaces/data/econ';
import { militaryResearch } from '../../interfaces/data/war';

/**
 * Gets the cost for research levels. Does not account for 
 * selling research if a lower target is given than current.
 *
 * @export
 * @param {militaryResearch} current_research The research you start with
 * @param {militaryResearch} target_research The research you want to be at
 * @param {resourcePrices} resourcePrices The prices of each resource
 * @param {boolean} [military_doctrine=false] If you have military doctrine
 * @returns {number}
 */
export default function researchCost(
    current_research: militaryResearch,
    target_research: militaryResearch,
    resourcePrices: resourcePrices,
    military_doctrine: boolean = false
): number {
    let cost = 0;

    // Confirm all prices given
    let resourceKey: keyof typeof resourcePrices;
    for (resourceKey in resourcePrices) {
        if (!resourcePrices[resourceKey]) throw new Error(`PnwKit: missing resource: ${resourceKey}`);
    }

    // Confirm research is bounded correctly
    let researchKey: keyof typeof target_research;
    for (researchKey in target_research) {
        if (target_research[researchKey] > 20) throw new Error(`PnwKit: target_research level can not be higher than 20.`);
        if (current_research[researchKey] < 0) throw new Error(`PnwKit: current_research level can not be lower tha 0.`);
    }

    // Get category and total upgrades
    let groundUpgrades = current_research.ground_capacity + current_research.ground_cost;
    let airUpgrades = current_research.air_capacity + current_research.air_cost;
    let navalUpgrades = current_research.naval_capacity + current_research.naval_cost;
    let totalUpgrades = groundUpgrades + airUpgrades + navalUpgrades;

    for (researchKey in target_research) {
        let levels = target_research[researchKey] - current_research[researchKey];
        // Ignore if no levels desire or if less levels inputted
        if (levels === 0 || levels < 0) continue;

        // Get relevant tree upgrade count from key
        let treeUpgrades = 0;
        switch (researchKey.slice(0, researchKey.indexOf('_'))) {
            case 'ground':
                treeUpgrades = groundUpgrades;
                break;
            case 'air':
                treeUpgrades = airUpgrades;
                break;
            case 'naval':
                treeUpgrades = navalUpgrades;
                break;
        }

        for (let i = 1; i <= levels; i++) {
            cost += 600_000 * (totalUpgrades + i) + (45_000 * Math.pow(totalUpgrades + i, 1.75) * (totalUpgrades + i)) / 20;

            let manuCost =
                100 * (treeUpgrades + i) +
                Math.round((treeUpgrades + i) / 5) * 500 +
                Math.round((treeUpgrades + i) / 10) * 1000 +
                Math.round((treeUpgrades + i) / 20) * 1000;
            cost += manuCost * resourcePrices.gasoline;
            cost += manuCost * resourcePrices.munitions;
            cost += manuCost * resourcePrices.steel;

            let aluCost =
                400 * (treeUpgrades + i) +
                Math.round((treeUpgrades + i) / 5) * 1000 +
                Math.round((treeUpgrades + i) / 10) * 2000 +
                Math.round((treeUpgrades + i) / 20) * 2000;
            cost += aluCost * resourcePrices.aluminum;

            cost += (current_research[researchKey] + i) * 10000 * resourcePrices.food;
        }

        // Ensure relevant tree and total upgrades kept up to date for next research type
        switch (researchKey.slice(0, researchKey.indexOf('_'))) {
            case 'ground':
                groundUpgrades += levels;
                break;
            case 'air':
                airUpgrades += levels;
                break;
            case 'naval':
                navalUpgrades += levels;
                break;
        }

        totalUpgrades += levels;
    }

    return military_doctrine ? cost * 0.95 : cost
}