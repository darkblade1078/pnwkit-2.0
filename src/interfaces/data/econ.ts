export enum foodProductionSeasons {
    SPRING = 1,
    SUMMER = 1.2,
    FALL = 1,
    WINTER = 0.8,
}

export enum resourceType {
    OIL = 'oil',
    LEAD = 'lead',
    BAUXITE = 'bauxite',
    URANIUM = 'uranium',
    COAL = 'coal',
    IRON = 'iron',
    STEEL = 'steel',
    ALUMINUM = 'aluminum',
    GASOLINE = 'gasoline',
    MUNITIONS = 'munitions',
}

export type cityCosts = {
    cityPrice: number;
    resourcePrice: number;
    lead: number;
    iron: number;
    steel: number;
    bauxite: number;
    aluminum: number;
}

export type resourcePrices = {
    coal: number;
    oil: number;
    uranium: number;
    iron: number;
    bauxite: number;
    lead: number;
    gasoline: number;
    munitions: number;
    steel: number;
    aluminum: number;
    food: number;
}

export enum projects {
    AC = 'activity Center',
    AUP = 'Advanced Urban Planning',
    AEC = 'Advanced Engineering Corps',
    APE = 'Advanced Pirate Economy',
    ALA = 'Arable Land Agency',
    AS = 'Arms Stockpile',
    BW = 'Bauxite Works',
    BDA = 'Bureau of Domestic Affairs',
    CoCE = 'Center of Civil Engineering',
    CRC = 'Clinical Research Center',
    EGR = 'Emergency Gasoline Reserve',
    FS = 'Fallout Shelter',
    GT = 'Green Technologies',
    GSA = 'Government Support Agency',
    GS = 'Guiding Satellite',
    IA = 'Intelligence Agency',
    ITC = 'International Trade Center',
    ID = 'Iron Dome',
    IW = 'Iron Works',
    MD = 'Military Doctrine',
    MI = 'Mass Irrigation',
    MP = 'Metropolitan Planning',
    MS = 'Military Salvage',
    MLP = 'Missile Launch Pad',
    MRC = ' Military Research Center',
    MRL = 'Mars Landing',
    ML = 'Moon Landing',
    NLF = 'Nuclear Launch Facility',
    NRF = 'Nuclear Research Facility',
    PE = 'Pirate Economy',
    PB = 'Propaganda Bureau',
    RI = 'Recycling Initiative',
    RnD = 'Research and Development Center',
    SP = 'Space Program',
    SPTP = 'Specialized Police Training Program',
    SS = 'Spy Satellite',
    SN = 'Surveillance Network',
    TS = 'Telecommunications Satellite',
    UEP = 'Uranium Enrichment Program',
    UP = 'Urban Planning',
    VDS = 'Vital Defense System',
}

export enum projectBits {
    AC = 29,
    AUP = 15,
    AEC = 26,
    APE = 34,
    ALA = 23,
    AS = 2,
    BW = 1,
    BDA = 33,
    CoCE = 11,
    CRC = 24,
    EGR = 3,
    FS = 32,
    GT = 22,
    GSA = 27,
    GS = 37,
    IA = 10,
    ITC = 5,
    ID = 8,
    IW = 0,
    MD = 40,
    MI = 4,
    MP = 30,
    MS = 31,
    MLP = 6,
    MRC = 39,
    MRL = 35,
    ML = 18,
    NLF = 38,
    NRF = 7,
    PE = 19,
    PB = 12,
    RI = 20,
    RnD = 28,
    SP = 16,
    SPTP = 25,
    SS = 17,
    SN = 36,
    TS = 21,
    UEP = 13,
    UP = 14,
    VDS = 9,
}