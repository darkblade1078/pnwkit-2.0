import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { alliance } from "./alliance";
import { nation } from "./nation";

export type queryBankrecsOrderByOrderByClause = {
    column: queryBankrecsOrderByColumn
    order: sortOrder
}

export type bankrecPaginator = {
    __typename?: 'BankrecPaginator'
    paginatorInfo: paginatorInfo
    data: Array<bankrec>
}

export enum queryBankrecsOrderByColumn {
    Id = 'ID',
    Date = 'DATE',
    Money = 'MONEY',
    Coal = 'COAL',
    Oil = 'OIL',
    Uranium = 'URANIUM',
    Iron = 'IRON',
    Bauxite = 'BAUXITE',
    Lead = 'LEAD',
    Gasoline = 'GASOLINE',
    Munitions = 'MUNITIONS',
    Steel = 'STEEL',
    Aluminum = 'ALUMINUM',
    Food = 'FOOD'
}

export type taxBracket = {
    __typename?: 'TaxBracket'
    id?: Maybe<Scalars['ID']>
    alliance_id?: Maybe<Scalars['ID']>
    alliance?: Maybe<alliance>
    date?: Maybe<Scalars['DateTimeAuto']>
    date_modified?: Maybe<Scalars['DateTimeAuto']>
    last_modifier_id?: Maybe<Scalars['ID']>
    last_modifier?: Maybe<nation>
    tax_rate?: Maybe<Scalars['Int']>
    resource_tax_rate?: Maybe<Scalars['Int']>
    bracket_name?: Maybe<Scalars['String']>
}

export type queryBankrecsArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    stype?: Maybe<Array<Maybe<Scalars['Int']>>>
    rtype?: Maybe<Array<Maybe<Scalars['Int']>>>
    or_type?: Maybe<Array<Maybe<Scalars['Int']>>>
    sid?: Maybe<Array<Maybe<Scalars['Int']>>>
    rid?: Maybe<Array<Maybe<Scalars['Int']>>>
    or_id?: Maybe<Array<Maybe<Scalars['Int']>>>
    orderBy?: Maybe<Array<queryBankrecsOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export type bankrec = {
    __typename?: 'bankrec'
    id?: Maybe<Scalars['ID']>
    date?: Maybe<Scalars['DateTimeAuto']>
    sender_id?: Maybe<Scalars['ID']>
    sender_type?: Maybe<Scalars['Int']>
    sender?: Maybe<nation>
    receiver_id?: Maybe<Scalars['ID']>
    receiver_type?: Maybe<Scalars['Int']>
    receiver?: Maybe<nation>
    banker_id?: Maybe<Scalars['ID']>
    banker?: Maybe<nation>
    note?: Maybe<Scalars['String']>
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
    tax_id?: Maybe<Scalars['ID']>
}