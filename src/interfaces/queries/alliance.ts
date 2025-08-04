import { Maybe, Scalars } from "..";
import { award } from "../data/other";
import { paginatorInfo, sortOrder } from "../other";
import { bankrec, taxBracket } from "./bank";
import { bulletin } from "./bulletin";
import { nation } from "./nation";
import { treaty } from './treaty';
import { war } from "./war";

export type queryAlliancesOrderByOrderByClause = {
    column: queryAlliancesOrderByColumn
    order: sortOrder
}

export enum queryAlliancesOrderByColumn {
    ID = 'ID',
    DATE = 'DATE',
    SCORE = 'SCORE'
}

export type alliancePaginator = {
    __typename?: 'alliancePaginator'
    paginatorInfo: paginatorInfo
    data: Array<alliance>
}

export type queryAlliancesArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>
    name?: Maybe<Array<Maybe<Scalars['String']>>>
    orderBy?: Maybe<Array<queryAlliancesOrderByOrderByClause>>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export enum alliancePositionEnum {
    Remove = 'REMOVE',
    Noalliance = 'NOALLIANCE',
    Applicant = 'APPLICANT',
    Member = 'MEMBER',
    Officer = 'OFFICER',
    Heir = 'HEIR',
    Leader = 'LEADER'
}

export type alliancePosition = {
    id?: Maybe<Scalars['String']>
    date?: Maybe<Scalars['DateTimeAuto']>
    alliance_id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    creator_id?: Maybe<Scalars['ID']>
    last_editor_id?: Maybe<Scalars['ID']>
    date_modified?: Maybe<Scalars['DateTimeAuto']>
    position_level?: Maybe<Scalars['Int']>
    leader?: Maybe<Scalars['Boolean']>
    heir?: Maybe<Scalars['Boolean']>
    officer?: Maybe<Scalars['Boolean']>
    member?: Maybe<Scalars['Boolean']>
    permissions?: Maybe<Scalars['Int']>
    view_bank?: Maybe<Scalars['Boolean']>
    withdraw_bank?: Maybe<Scalars['Boolean']>
    change_permissions?: Maybe<Scalars['Boolean']>
    see_spies?: Maybe<Scalars['Boolean']>
    see_reset_timers?: Maybe<Scalars['Boolean']>
    tax_brackets?: Maybe<Scalars['Boolean']>
    post_announcements?: Maybe<Scalars['Boolean']>
    manage_announcements?: Maybe<Scalars['Boolean']>
    accept_applicants?: Maybe<Scalars['Boolean']>
    remove_applicants?: Maybe<Scalars['Boolean']>
    edit_alliance_info?: Maybe<Scalars['Boolean']>
    manage_treaties?: Maybe<Scalars['Boolean']>
    manage_market_share?: Maybe<Scalars['Boolean']>
    manage_embargoes?: Maybe<Scalars['Boolean']>
    promote_self_to_leader?: Maybe<Scalars['Boolean']>
  }

export type alliance = {
    __typename?: 'alliance'
    id?: Maybe<Scalars['ID']>
    name?: Maybe<Scalars['String']>
    acronym?: Maybe<Scalars['String']>
    score?: Maybe<Scalars['Float']>
    color?: Maybe<Scalars['String']>
    date?: Maybe<Scalars['DateTimeAuto']>
    nations?: Maybe<Array<nation>>
    average_score?: Maybe<Scalars['Float']>
    treaties?: Array<treaty>
    alliance_positions?: Maybe<Array<Maybe<alliancePosition>>>
    accept_members?: Maybe<Scalars['Boolean']>
    flag?: Maybe<Scalars['String']>
    forum_link?: Maybe<Scalars['String']>
    discord_link?: Maybe<Scalars['String']>
    wiki_link?: Maybe<Scalars['String']>
    bankrecs?: Maybe<Array<Maybe<bankrec>>>
    taxrecs?: Maybe<Array<Maybe<bankrec>>>
    tax_brackets?: Maybe<Array<Maybe<taxBracket>>>
    wars?: Maybe<Array<Maybe<war>>>
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
    awards?: Maybe<award[]>
    rank?: Maybe<Scalars['Int']>
    bulletins?: Maybe<bulletin[]>
}