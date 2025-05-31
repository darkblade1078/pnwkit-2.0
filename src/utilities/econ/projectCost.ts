import { projects, resourcePrices } from "../../interfaces/data/econ";
import getPercentage from "../other/getPercentage";

/**
 * Get the cost of any project
 * @param {projects} project The project you want to get the cost of
 * @param {resourcePrices} resourcePrices The prices of each resource
 * @param {boolean} TA If you have Technology Advancement
 * @param {boolean} GSA If you have Government Support Agency
 * @param {boolean} BDA If you have Bureau of Domestic Affairs
 * @returns {number} The cost of the project
 */
export default function projectCost(project: projects, resourcePrices: resourcePrices, TA: boolean, GSA: boolean, BDA: boolean): number {

    let key: keyof typeof resourcePrices;
    for (key in resourcePrices) {

        if (!resourcePrices[key]) throw new Error(`PnwKit: missing resource: ${key}`);
    }

    let percentage = 100 - (TA ? BDA ? 8.75 : GSA ? 7.5 : 5 : 0)
    let price = 0;

    switch (project) {

        case projects.AC:
            price = getPercentage(500_000 + (resourcePrices.food * 1000), percentage)
            break;

        case projects.AEC:
            price = getPercentage(50_000_000 + (resourcePrices.munitions * 10000) + (resourcePrices.gasoline * 10000) + (resourcePrices.uranium * 1000), percentage);
            break;

        case projects.APE:
            price = getPercentage(50_000_000 + (resourcePrices.aluminum * 20000) + (resourcePrices.munitions * 40000) + (resourcePrices.gasoline * 20000), percentage);
            break;

        case projects.ALA:
            price = getPercentage(3_000_000 + (resourcePrices.coal * 1500) + (resourcePrices.lead * 1500), percentage);
            break;

        case projects.AS:
            price = getPercentage(10_000_000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;

        case projects.BW:
            price = getPercentage(10_000_000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;

        case projects.BDA:
            price = getPercentage(20_000_000 + (resourcePrices.food * 500_000) + (resourcePrices.coal * 8000) + (resourcePrices.iron * 8000) + (resourcePrices.oil * 8000) + (resourcePrices.bauxite * 8000) + (resourcePrices.oil * 8000) + (resourcePrices.lead * 8000), percentage);
            break;

        case projects.CoCE:
            price = getPercentage(3_000_000 + (resourcePrices.oil * 1000) + (resourcePrices.iron * 1000) + (resourcePrices.bauxite * 1000), percentage);
            break;

        case projects.CRC:
            price = getPercentage(10_000_000 + (resourcePrices.food * 100_000), percentage);
            break;

        case projects.EGR:
            price = getPercentage(10_000_000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;

        case projects.FS:
            price = getPercentage(25_000_000 + (resourcePrices.food * 100_000) + (resourcePrices.lead * 10000) + (resourcePrices.steel * 10000) + (resourcePrices.aluminum * 15000), percentage);
            break;

        case projects.GT:
            price = getPercentage(50_000_000 + (resourcePrices.food * 100_000) + (resourcePrices.aluminum * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.oil * 10000), percentage);
            break;

        case projects.GSA:
            price = getPercentage(20_000_000 + (resourcePrices.aluminum * 10000) + (resourcePrices.food * 200_000), percentage);
            break;

        case projects.GS:
            price = getPercentage(20_000_000 + (resourcePrices.munitions * 40000) + (resourcePrices.uranium * 40000) + (resourcePrices.gasoline * 40000) + (resourcePrices.aluminum * 40000) + (resourcePrices.steel * 20000), percentage);
            break;

        case projects.IA:
            price = getPercentage(5_000_000 + (resourcePrices.steel * 500) + (resourcePrices.gasoline * 500), percentage);
            break;

        case projects.ITC:
            price = getPercentage(50_000_000 + (resourcePrices.aluminum * 10000), percentage);
            break;

        case projects.ID:
            price = getPercentage(15_000_000 + (resourcePrices.munitions * 5000), percentage);
            break;

        case projects.IW:
            price = getPercentage(10_000_000 + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;

        case projects.MI:
            price = getPercentage(10_000_000 + (resourcePrices.food * 50000) + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;

        case projects.MS:
            price = getPercentage(20_000_000 + (resourcePrices.aluminum * 5000) + (resourcePrices.steel * 5000) + (resourcePrices.gasoline * 5000), percentage);
            break;

        case projects.MLP:
            price = getPercentage(15_000_000 + (resourcePrices.munitions * 5000) + (resourcePrices.gasoline * 5000) + (resourcePrices.aluminum * 5000), percentage);
            break;

        case projects.MRL:
            price = getPercentage(200_000_000 + (resourcePrices.oil * 20000) + (resourcePrices.aluminum * 20000) + (resourcePrices.munitions * 20000) + (resourcePrices.steel * 20000) + (resourcePrices.gasoline * 20000) + (resourcePrices.uranium * 20000), percentage);
            break;

        case projects.ML:
            price = getPercentage(50_000_000 + (resourcePrices.oil * 5000) + (resourcePrices.aluminum * 5000) + (resourcePrices.munitions * 5000) + (resourcePrices.steel * 5000) + (resourcePrices.gasoline * 5000) + (resourcePrices.uranium * 10000), percentage);
            break;

        case projects.NLF:
            price = getPercentage(750_000_000 + (resourcePrices.uranium * 50000) + (resourcePrices.gasoline * 50000) + (resourcePrices.aluminum * 50000), percentage);
            break;

        case projects.NRF:
            price = getPercentage(75_000_000 + (resourcePrices.uranium * 5000) + (resourcePrices.gasoline * 5000) + (resourcePrices.aluminum * 5000), percentage);
            break;

        case projects.PE:
            price = getPercentage(25_000_000 + (resourcePrices.coal * 7500) + (resourcePrices.iron * 7500) + (resourcePrices.oil * 7500) + (resourcePrices.bauxite * 7500) + (resourcePrices.oil * 7500) + (resourcePrices.lead * 7500), percentage);
            break;

        case projects.PB:
            price = getPercentage(10_000_000 + (resourcePrices.gasoline * 2000) + (resourcePrices.munitions * 2000) + (resourcePrices.aluminum * 2000) + (resourcePrices.steel * 2000), percentage);
            break;

        case projects.RI:
            price = getPercentage(10_000_000 + (resourcePrices.food * 100_000), percentage);
            break;

        case projects.RnD:
            price = getPercentage(50_000_000 + (resourcePrices.aluminum * 5000) + (resourcePrices.food * 100000) + (resourcePrices.uranium * 1000), percentage);
            break;

        case projects.SP:
            price = getPercentage(50_000_000 + (resourcePrices.aluminum * 25000), percentage);
            break;

        case projects.SPTP:
            price = getPercentage(50_000_000 + (resourcePrices.food * 250_000) + (resourcePrices.aluminum * 5000), percentage);
            break;

        case projects.SS:
            price = getPercentage(20_000_000 + (resourcePrices.oil * 10000) + (resourcePrices.bauxite * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.lead * 10000) + (resourcePrices.uranium * 10000), percentage);
            break;

        case projects.SN:
            price = getPercentage(50_000_000 + (resourcePrices.aluminum * 50000) + (resourcePrices.bauxite * 15000) + (resourcePrices.iron * 15000) + (resourcePrices.lead * 15000) + (resourcePrices.coal * 15000), percentage);
            break;

        case projects.TS:
            price = getPercentage(300_000_000 + (resourcePrices.oil * 10000) + (resourcePrices.aluminum * 10000) + (resourcePrices.iron * 10000) + (resourcePrices.uranium * 10000), percentage);
            break;

        case projects.UEP:
            price = getPercentage(25_000_000 + (resourcePrices.uranium * 2500) + (resourcePrices.coal * 500) + (resourcePrices.iron * 500) + (resourcePrices.oil * 500) + (resourcePrices.bauxite * 500) + (resourcePrices.oil * 500) + (resourcePrices.lead * 500), percentage);
            break;

        case projects.AC:
            price = getPercentage(40_000_000 + (resourcePrices.steel * 5000) + (resourcePrices.aluminum * 5000) + (resourcePrices.munitions * 5000) + (resourcePrices.gasoline * 5000), percentage);
            break;
    }

    return price;
}