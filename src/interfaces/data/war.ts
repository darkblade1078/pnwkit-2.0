export enum operationType {
    GATHERINTELLIGENCE = 'Gather Intelligence',
    TERRORIZECIVILIANS = 'Terrorize Civilians',
    SOLDIERS = 'Sabotage Soldiers',
    TANKS = 'Sabotage Tanks',
    AIRCRAFT = 'Sabotage Aircraft',
    SHIPS = 'Sabotage Ships',
    ASSASSINATESPIES = 'Assassinate Spies',
    MISSILES = 'Sabotage Missiles',
    NUKES = 'Sabotage Nukes',
}

export enum warPolicy {
    ATTRITION = 'Attrition',
    TURTLE = 'Turtle',
    BLITZKRIEG = 'Blitzkrieg',
    FORTRESS = 'Fortress',
    MONEYBAGS = 'Moneybags',
    PIRATE = 'Pirate',
    TACTICIAN = 'Tactician',
    GUARDIAN = 'Guardian',
    COVERT = 'Covert',
    ARCANE = 'Arcane',
}

export type spyRanges = {
    OffensiveSpyRangeMin: number;
    OffensiveSpyRangeMax: number;
    DefensiveSpyRangeMin: number;
    DefensiveSpyRangeMax: number;
}

export type warRanges = {
    OffensiveWarRangeMin: number;
    OffensiveWarRangeMax: number;
    DefensiveWarRangeMin: number;
    DefensiveWarRangeMax: number;
}

export type activeWars = {
    offensive: number;
    defensive: number;
}

export type groundBattleData = {
    odds: {
        IT: number;
        MS: number;
        PV: number;
        UF: number;
    },
    attacker: {
        soldierCasualties: number;
        tankCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    },
    defender: {
        soldierCasualties: number;
        tankCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    }
}

export type airBattleData = {
    odds: {
        IT: number;
        MS: number;
        PV: number;
        UF: number;
    },
    attacker: {
        aircraftCasualties: number;
        aluminumConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    },
    defender: {
        aircraftCasualties: number;
        aluminumConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    }
}

export type seaBattleData = {
    odds: {
        IT: number;
        MS: number;
        PV: number;
        UF: number;
    },
    attacker: {
        shipCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    },
    defender: {
        shipCasualties: number;
        steelConsumed: number;
        gasConsumed: number;
        munitionsConsumed: number;
    }
}

export type MMR = {
    totalBarracks: number;
    totalFactories: number;
    totalHangars: number;
    totalDrydocks: number;
}

export type tiering = {
    10: number;
    11: number;
    13: number;
    15: number;
    17: number;
    19: number;
    21: number;
    24: number;
    27: number;
    31: number;
    35: number;
    40: number;
    45: number;
    50: number;
}

export type militaryResearch = {
  ground_capacity: number
  ground_cost: number
  air_capacity: number
  air_cost: number
  naval_capacity: number
  naval_cost: number
}