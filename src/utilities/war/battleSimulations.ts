import { airBattleData, groundBattleData, militaryResearch, seaBattleData } from "../../interfaces/data/war";
import accurateRounding from "../other/accurateRounding";
import getPercentage from "../other/getPercentage";

/**
 * Get the results from a ground battle
 * @param {number} attackingSoldiers 
 * @param {number} attackingTanks The attacker's tanks
 * @param {number} defendingSoldiers The defender's soldiers
 * @param {number} defendingTanks The defender's tanks
 * @param {number} [attackingGroundCost=0] 
 * @param {number} [defendingGroundCost=0] 
 * @returns {groundBattleData} ground battle results
 */
export function groundBattle(attackingSoldiers: number, attackingTanks: number, defendingSoldiers: number, defendingTanks: number, attackingGroundCost: number = 0, defendingGroundCost: number = 0): groundBattleData {
    let attackingSoldierValue = attackingSoldiers * 1.75;
    let attackingTankValue = attackingTanks * 40;
    let defendingSoldierValue = attackingSoldiers * 1.75;
    let defendingTankValue = attackingTanks * 40;

    let results = {
        odds: {
            IT: 0,
            MS: 0,
            PV: 0,
            UF: 0,
        },
        attacker: {
            soldierCasualties: 0,
            tankCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        },
        defender: {
            soldierCasualties: 0,
            tankCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        }
    }

    for (let i = 0; i < 100; i++) {
        let wins = 0;

        for (let j = 0; j < 3; j++) {
            let attackingRoll = getPercentage((attackingSoldierValue + attackingTankValue), Math.floor(Math.random() * 60) + 40);
            let defendingRoll = getPercentage((defendingSoldierValue + defendingTankValue), Math.floor(Math.random() * 60) + 40);

            if (attackingRoll > defendingRoll) {
                wins++;

                results.attacker.tankCasualties += (defendingSoldierValue * 0.0004060606) + (defendingTankValue * 0.00066666666);
                results.defender.tankCasualties += (attackingSoldierValue * 0.00043225806) + (attackingTankValue * 0.00070967741);
            }
            else {

                results.attacker.tankCasualties += (defendingSoldierValue * 0.00043225806) + (defendingTankValue * 0.00070967741);
                results.defender.tankCasualties += (attackingSoldierValue * 0.0004060606) + (attackingTankValue * 0.00066666666);
            }

            results.attacker.soldierCasualties += (defendingSoldierValue * 0.0084) + (defendingTankValue * 0.0092);
            results.defender.soldierCasualties += (attackingSoldierValue * 0.0084) + (attackingTankValue * 0.0092);
        }

        results.attacker.munitionsConsumed += accurateRounding(attackingSoldiers * 0.0002 + attackingTanks * 0.01, 2);
        results.attacker.gasConsumed += accurateRounding(attackingTanks * 0.01, 2);
        results.defender.munitionsConsumed += accurateRounding(defendingSoldiers * 0.0002 + defendingTanks * 0.01, 2);
        results.defender.gasConsumed += accurateRounding(defendingTanks * 0.01, 2);

        switch (wins) {
            case 0:
                results.odds.UF++;
                break;

            case 1:
                results.odds.PV++;
                break;

            case 2:
                results.odds.MS++;
                break;

            case 3:
                results.odds.IT++;
                break;
        }
    }

    results.attacker.soldierCasualties /= 100;
    results.attacker.steelConsumed = (results.attacker.tankCasualties * (0.5 - 0.01 * attackingGroundCost)) / 100;
    results.attacker.tankCasualties /= 100;
    results.attacker.gasConsumed /= 100;
    results.attacker.munitionsConsumed /= 100;

    results.defender.soldierCasualties /= 100;
    results.defender.steelConsumed = (results.defender.tankCasualties * (0.5 - 0.01 * defendingGroundCost)) / 100;
    results.defender.tankCasualties /= 100;
    results.defender.gasConsumed /= 100;
    results.defender.munitionsConsumed /= 100;

    return results;
}

/**
 * Get the results from a air battle
 * @param {number} attackingAircraft The attacker's aircraft
 * @param {number} defendingAircraft The attacker's aircraft
 * @param {boolean} dogfight If the battle is a dog fight
 * @param {number} [attackingAirCost=0] 
 * @param {number} [defendingAirCost=0] 
 * @returns {airBattleData} air battle results
 */
export function airBattle(attackingAircraft: number, defendingAircraft: number, dogfight: boolean, attackingAirCost: number = 0, defendingAirCost: number = 0): airBattleData {
    let attackingValue = attackingAircraft * 3;
    let defendingValue = defendingAircraft * 3;

    let results = {
        odds: {
            IT: 0,
            MS: 0,
            PV: 0,
            UF: 0,
        },
        attacker: {
            aircraftCasualties: 0,
            aluminumConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        },
        defender: {
            aircraftCasualties: 0,
            aluminumConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        }
    }

    for (let i = 0; i < 100; i++) {
        let wins = 0;

        for (let j = 0; j < 3; j++) {
            let attackingRoll = getPercentage(attackingValue, Math.floor(Math.random() * 60) + 40);
            let defendingRoll = getPercentage(defendingValue, Math.floor(Math.random() * 60) + 40);

            if (attackingRoll > defendingRoll) {
                wins++;
            }

            if (dogfight) {
                results.attacker.aircraftCasualties += (defendingRoll * 0.01);
                results.defender.aircraftCasualties += (attackingRoll * 0.018337);
            }
            else {
                results.attacker.aircraftCasualties += (defendingRoll * 0.015385);
                results.defender.aircraftCasualties += (attackingRoll * 0.009091);
            }
        }

        results.attacker.munitionsConsumed += accurateRounding(attackingAircraft * 0.25, 2);
        results.attacker.gasConsumed += accurateRounding(attackingAircraft * 0.25, 2);

        results.defender.munitionsConsumed += accurateRounding(defendingAircraft * 0.25, 2);
        results.defender.gasConsumed += accurateRounding(defendingAircraft * 0.25, 2);

        switch (wins) {
            case 0:
                results.odds.UF++;
                break;

            case 1:
                results.odds.PV++;
                break;

            case 2:
                results.odds.MS++;
                break;

            case 3:
                results.odds.IT++;
                break;
        }
    }

    results.attacker.aluminumConsumed = (results.attacker.aircraftCasualties * (10 - 0.2 * attackingAirCost)) / 100;
    results.attacker.aircraftCasualties /= 100;
    results.attacker.gasConsumed /= 100;
    results.attacker.munitionsConsumed /= 100;


    results.defender.aluminumConsumed = (results.defender.aircraftCasualties * (10 - 0.2 * defendingAirCost)) / 100;
    results.defender.aircraftCasualties /= 100;
    results.defender.gasConsumed /= 100;
    results.defender.munitionsConsumed /= 100;

    return results;
}

/**
 * Get the results from a sea battle
 * @param {number} attackingShips The attacker's ships
 * @param {number} defendingShips The attacker's ships
 * @param {number} [attackingNavalCost=0] 
 * @param {number} [defendingNavalCost=0] 
 * @returns {seaBattleData} sea battle results
 */
export function seaBattle(attackingShips: number, defendingShips: number, attackingNavalCost: number = 0, defendingNavalCost: number = 0): seaBattleData {
    let attackingValue = attackingShips * 4;
    let defendingValue = defendingShips * 4;

    let results = {
        odds: {
            IT: 0,
            MS: 0,
            PV: 0,
            UF: 0,
        },
        attacker: {
            shipCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        },
        defender: {
            shipCasualties: 0,
            steelConsumed: 0,
            gasConsumed: 0,
            munitionsConsumed: 0,
        }
    }

    for (let i = 0; i < 100; i++) {
        let wins = 0;

        for (let j = 0; j < 3; j++) {
            let attackingRoll = getPercentage(attackingValue, Math.floor(Math.random() * 60) + 40);
            let defendingRoll = getPercentage(defendingValue, Math.floor(Math.random() * 60) + 40);

            if (attackingRoll > defendingRoll) {
                wins++;
            }

            results.attacker.shipCasualties += (defendingRoll * 0.01375);
            results.defender.shipCasualties += (attackingRoll * 0.01375);
        }

        results.attacker.munitionsConsumed += accurateRounding(attackingShips * 3, 2);
        results.attacker.gasConsumed += accurateRounding(attackingShips * 2, 2);

        results.defender.munitionsConsumed += accurateRounding(defendingShips * 3, 2);
        results.defender.gasConsumed += accurateRounding(defendingShips * 2, 2);

        switch (wins) {
            case 0:
                results.odds.UF++;
                break;

            case 1:
                results.odds.PV++;
                break;

            case 2:
                results.odds.MS++;
                break;

            case 3:
                results.odds.IT++;
                break;
        }
    }

    results.attacker.steelConsumed = (results.attacker.shipCasualties * (30 - 0.5 * attackingNavalCost)) / 100;
    results.attacker.shipCasualties /= 100;
    results.attacker.gasConsumed /= 100;
    results.attacker.munitionsConsumed /= 100;


    results.defender.steelConsumed = (results.defender.shipCasualties * (30 - 0.5 * defendingNavalCost)) / 100;
    results.defender.shipCasualties /= 100;
    results.defender.gasConsumed /= 100;
    results.defender.munitionsConsumed /= 100;

    return results;
}