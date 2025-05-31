import { Maybe, Scalars } from "..";
import { award } from "../data/other";
import { militaryResearch } from '../data/war';
import { paginatorInfo, sortOrder } from "../other";
import { alliance, alliancePositionEnum, allliancePosition } from "./alliance";
import { bankrec } from "./bank";
import { baseballTeam } from "./baseball";
import { bounty } from "./bounty";
import { city } from "./city";
import { trade } from "./trade";
import { treasure } from "./treasure";
import { war } from "./war";


export type nationPaginator = {
    __typename?: 'nationPaginator'
    paginatorInfo: paginatorInfo
    data: Array<nation>
}

export type queryNationsOrderByOrderByClause = {
    column: queryNationsOrderByColumn
    order: sortOrder
}

export enum queryNationsOrderByColumn {
    ID = 'ID',
    DATE = 'DATE',
    SOLDIERS = 'SOLDIERS',
    TANKS = 'TANKS',
    AIRCRAFT = 'AIRCRAFT',
    SHIPS = 'SHIPS',
    MISSILES = 'MISSILES',
    NUKES = 'NUKES',
    CITIES = "CITIES"
}

export type queryNationsArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    nation_name?: Maybe<Array<Maybe<Scalars['String']>>>
    leader_name?: Maybe<Array<Maybe<Scalars['String']>>>
    alliance_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    alliance_position?: Maybe<Array<Maybe<Scalars['Int']>>>
    color?: Maybe<Scalars['String']>
    created_after?: Maybe<Scalars['DateTime']>
    min_score?: Maybe<Scalars['Float']>
    max_score?: Maybe<Scalars['Float']>
    cities?: Maybe<Array<Maybe<Scalars['Int']>>>
    min_cities?: Maybe<Scalars['Int']>
    max_cities?: Maybe<Scalars['Int']>
    vmode?: Maybe<Scalars['Boolean']>
    discord?: Maybe<Array<Maybe<Scalars['String']>>>
    orderBy?: Maybe<Array<queryNationsOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export enum warPolicy {
    ATTRITION = "ATTRITION",
    TURTLE = "TURTLE",
    BLITZKRIEG = "BLITZKRIEG",
    FORTRESS = "FORTRESS",
    MONEYBAGS = "MONEYBAGS",
    PIRATE = "PIRATE",
    TACTICIAN = "TACTICIAN",
    GUARDIAN = "GUARDIAN",
    COVERT = "COVERT",
    ARCANE = "ARCANE",
}

export enum domesticPolicy {
    MANIFEST_DESTINY = "MANIFEST_DESTINY",
    OPEN_MARKETS = "OPEN_MARKETS",
    TECHNOLOGICAL_ADVANCEMENT = "TECHNOLOGICAL_ADVANCEMENT",
    IMPERIALISM = "IMPERIALISM",
    URBANIZATION = "URBANIZATION",
    RAPID_EXPANSION = "RAPID_EXPANSION",
}

export enum economicPolicy {
    EXTREME_LEFT = "EXTREME_LEFT",
    FAR_LEFT = "FAR_LEFT",
    LEFT = "LEFT",
    MODERATE = "MODERATE",
    RIGHT = "RIGHT",
    FAR_RIGHT = "FAR_RIGHT",
    EXTREME_RIGHT = "EXTREME_RIGHT",
}

export enum socialPolicy {
    ANARCHIST = "ANARCHIST",
    LIBERTARIAN = "LIBERTARIAN",
    LIBERAL = "LIBERAL",
    MODERATE = "MODERATE",
    CONSERVATIVE = "CONSERVATIVE",
    AUTHORITARIAN = "AUTHORITARIAN",
    FASCIST = "FASCIST",
}

export enum govermentType {
    ABSOLUTE_MONARCHY = "ABSOLUTE_MONARCHY",
    ANARCHY = "ANARCHY",
    ARISTOCRACY = "ARISTOCRACY",
    BANANA_REPUBLIC = "BANANA_REPUBLIC",
    COMMUNIST_DEMOCRACY = "COMMUNIST_DEMOCRACY",
    COMMUNIST_DICTATORSHIP = "COMMUNIST_DICTATORSHIP",
    COMMUNIST_MONARCHY = "COMMUNIST_MONARCHY",
    COMMUNIST_REPUBLIC = "COMMUNIST_REPUBLIC",
    COMMUNIST_THEOCRACY= "COMMUNIST_THEOCRACY",
    CONSTITUTIONAL_MONARCHY = "CONSTITUTIONAL_MONARCHY",
    CONSTITUTIONAL_REPUBLIC = "CONSTITUTIONAL_REPUBLIC",
    DEMARCHY = "DEMARCHY",
    DEMOCRACY = "DEMOCRACY",
    DEMOCRATIC_REPUBLIC = "DEMOCRATIC_REPUBLIC",
    DICTATORSHIP = "DICTATORSHIP",
    FEDERAL_REPUBLIC = "FEDERAL_REPUBLIC",
    MONARCHY = "MONARCHY",
    NOOCRACY = "NOOCRACY",
    OLIGARCHY = "OLIGARCHY",
    PARLIAMENTARY_DEMOCRACY = "PARLIAMENTARY_DEMOCRACY",
    PARLIAMENTARY_REPUBLIC = "PARLIAMENTARY_REPUBLIC",
    PEOPLES_REPUBLIC = "PEOPLES_REPUBLIC",
    REPUBLIC = "REPUBLIC",
    SOCIAL_DEMOCRACY = "SOCIAL_DEMOCRACY",
    SOCIALIST_DICTATORSHIP = "SOCIALIST_DICTATORSHIP",
    SOCIALIST_REPUBLIC = "SOCIALIST_REPUBLIC",
    SOCIALIST_THEOCRACY = "SOCIALIST_THEOCRACY",
    STRATOCRACY = "STRATOCRACY",
    TECHNOCRACY = "TECHNOCRACY",
    THEOCRACY = "THEOCRACY",
    THEOCRATIC_DEMOCRACY = "THEOCRATIC_DEMOCRACY",
    THEOCRATIC_DICTATORSHIP = "THEOCRATIC_DICTATORSHIP",
    THEOCRATIC_REPUBLIC = "THEOCRATIC_REPUBLIC",
}


export type nation = {
    __typename?: 'nation'
    id?: Maybe<Scalars['ID']>
    alliance_id?: Maybe<Scalars['ID']>
    alliance_position?: Maybe<alliancePositionEnum>
    alliance_position_id: Maybe<Scalars['ID']>
    alliance_position_info: Maybe<allliancePosition>
    alliance?: Maybe<alliance>
    nation_name?: Maybe<Scalars['String']>
    leader_name?: Maybe<Scalars['String']>
    continent?: Maybe<Scalars['String']>
    war_policy?: Maybe<warPolicy>
    war_policy_turns?: Maybe<Scalars['Int']>
    domestic_policy: Maybe<domesticPolicy>
    domestic_policy_turns?: Maybe<Scalars['Int']>
    color?: Maybe<Scalars['String']>
    num_cities?: Maybe<Scalars['Int']>
    cities: Array<city>
    score?: Maybe<Scalars['Float']>
    update_tz?: Maybe<Scalars['Float']>
    population?: Maybe<Scalars['Int']>
    flag?: Maybe<Scalars['String']>
    vacation_mode_turns?: Maybe<Scalars['Int']>
    beige_turns?: Maybe<Scalars['Int']>
    espionage_available?: Maybe<Scalars['Boolean']>
    last_active?: Maybe<Scalars['DateTimeAuto']>
    date?: Maybe<Scalars['DateTimeAuto']>
    soldiers?: Maybe<Scalars['Int']>
    tanks?: Maybe<Scalars['Int']>
    aircraft?: Maybe<Scalars['Int']>
    ships?: Maybe<Scalars['Int']>
    missiles?: Maybe<Scalars['Int']>
    nukes?: Maybe<Scalars['Int']>
    spies?: Maybe<Scalars['Int']>
    discord?: Maybe<Scalars['String']>
    discord_id?: Maybe<Scalars['String']>
    treasures: Array<treasure>
    wars: Array<war>
    bankrecs?: Maybe<Array<Maybe<bankrec>>>
    trades?: Maybe<Array<Maybe<trade>>>
    taxrecs?: Maybe<Array<Maybe<bankrec>>>
    bounties?: Maybe<Array<Maybe<bounty>>>
    turns_since_last_city?: Maybe<Scalars['Int']>
    turns_since_last_project?: Maybe<Scalars['Int']>
    money?: Maybe<Scalars['Float']>
    coal?: Maybe<Scalars['Float']>
    oil?: Maybe<Scalars['Float']>
    uranium?: Maybe<Scalars['Float']>
    iron?: Maybe<Scalars['Float']>
    bauxite?: Maybe<Scalars['Float']>
    lead?: Maybe<Scalars['Float']>
    gasoline?: Maybe<Scalars['Float']>
    munitions?: Maybe<Scalars['Float']>
    steel?: Maybe<Scalars['Float']>
    aluminum?: Maybe<Scalars['Float']>
    food?: Maybe<Scalars['Float']>
    credits?: Maybe<Scalars['Int']>
    projects?: Maybe<Scalars['Int']>
    project_bits?: Maybe<Scalars['Int']>
    iron_works?: Maybe<Scalars['Boolean']>
    bauxite_works?: Maybe<Scalars['Boolean']>
    arms_stockpile?: Maybe<Scalars['Boolean']>
    emergency_gasoline_reserve?: Maybe<Scalars['Boolean']>
    mass_irrigation?: Maybe<Scalars['Boolean']>
    international_trade_center?: Maybe<Scalars['Boolean']>
    missile_launch_pad?: Maybe<Scalars['Boolean']>
    nuclear_research_facility?: Maybe<Scalars['Boolean']>
    iron_dome?: Maybe<Scalars['Boolean']>
    vital_defense_system?: Maybe<Scalars['Boolean']>
    central_intelligence_agency?: Maybe<Scalars['Boolean']>
    center_for_civil_engineering?: Maybe<Scalars['Boolean']>
    propaganda_bureau?: Maybe<Scalars['Boolean']>
    uranium_enrichment_program?: Maybe<Scalars['Boolean']>
    urban_planning?: Maybe<Scalars['Boolean']>
    advanced_urban_planning?: Maybe<Scalars['Boolean']>
    space_program?: Maybe<Scalars['Boolean']>
    spy_satellite?: Maybe<Scalars['Boolean']>
    moon_landing?: Maybe<Scalars['Boolean']>
    pirate_economy?: Maybe<Scalars['Boolean']>
    recycling_initiative?: Maybe<Scalars['Boolean']>
    telecommunications_satellite?: Maybe<Scalars['Boolean']>
    green_technologies?: Maybe<Scalars['Boolean']>
    arable_land_agency?: Maybe<Scalars['Boolean']>
    clinical_research_center?: Maybe<Scalars['Boolean']>
    specialized_police_training_program?: Maybe<Scalars['Boolean']>
    advanced_engineering_corps?: Maybe<Scalars['Boolean']>
    advanced_pirate_economy?: Maybe<Scalars['Boolean']>
    government_support_agency?: Maybe<Scalars['Boolean']>
    research_and_development_center?: Maybe<Scalars['Boolean']>
    activity_center?: Maybe<Scalars['Boolean']>
    metropolitan_planning?: Maybe<Scalars['Boolean']>
    military_salvage?: Maybe<Scalars['Boolean']>
    fallout_shelter?: Maybe<Scalars['Boolean']>
    military_research_center?: Maybe<Scalars['Boolean']>
    military_doctrine?: Maybe<Scalars['Boolean']>
    wars_won?: Maybe<Scalars['Int']>
    wars_lost?: Maybe<Scalars['Int']>
    tax_id?: Maybe<Scalars['ID']>
    alliance_seniority?: Maybe<Scalars['Int']>
    baseball_team?: Maybe<baseballTeam>
    gross_national_income?: Maybe<Scalars['Float']>
    gross_domestic_product?: Maybe<Scalars['Float']>
    soldier_casualties?: Maybe<Scalars['Int']>
    soldier_kills?: Maybe<Scalars['Int']>
    tank_casualties?: Maybe<Scalars['Int']>
    tank_kills?: Maybe<Scalars['Int']>
    aircraft_casualties?: Maybe<Scalars['Int']>
    aircraft_kills?: Maybe<Scalars['Int']>
    ship_casualties?: Maybe<Scalars['Int']>
    ship_kills?: Maybe<Scalars['Int']>
    missile_casualties?: Maybe<Scalars['Int']>
    missile_kills?: Maybe<Scalars['Int']>
    nuke_casualties?: Maybe<Scalars['Int']>
    nuke_kills?: Maybe<Scalars['Int']>
    spy_casualties?: Maybe<Scalars['Int']>
    spy_kills?: Maybe<Scalars['Int']>
    spy_attacks?: Maybe<Scalars['Int']>
    money_looted?: Maybe<Scalars['Float']>
    total_infrastructure_destroyed?: Maybe<Scalars['Float']>
    total_infrastructure_lost?: Maybe<Scalars['Float']>
    vip?: Maybe<Scalars['Boolean']>
    commendations?: Maybe<Scalars['Int']>
    denouncements?: Maybe<Scalars['Int']>
    offensive_wars_count?: Maybe<Scalars['Int']>
    defensive_wars_count?: Maybe<Scalars['Int']>
    economic_policy?:  Maybe<economicPolicy>
    social_policy?:  Maybe<socialPolicy>
    government_type?:  Maybe<govermentType>
    credits_redeemed_this_month?: Maybe<Scalars['Int']>
    alliance_join_date?: Maybe<Scalars['DateTimeAuto']>
    awards?: Maybe<award[]>
    bulletins?: Maybe<Scalars['Int']>
    bulletin_replies?: Maybe<Scalars['Int']>
    cities_discount?: Maybe<Scalars['Float']>
    military_research?: Maybe<militaryResearch>
}