import { Maybe, Scalars } from "..";
import { paginatorInfo } from "../other";
import { alliancePositionEnum, alliancePosition } from "../queries/alliance";

export type assignAlliancePositionPaginator = {
    __typename?: 'assignAlliancePositionPaginator'
    paginatorInfo: paginatorInfo
    data: alliancePosition
}

export type createAlliancePositionPaginator = {
    __typename?: 'createAlliancePositionPaginator'
    paginatorInfo: paginatorInfo
    data: alliancePosition
}

export type deleteAlliancePositionPaginator = {
    __typename?: 'deleteAlliancePositionPaginator'
    paginatorInfo: paginatorInfo
    data: alliancePosition
}

export type editAlliancePositionPaginator = {
    __typename?: 'editAlliancePositionPaginator'
    paginatorInfo: paginatorInfo
    data: alliancePosition
}

export type mutationAssignAlliancePositionArgs = {
    id: Scalars['Int'],
    default_position: alliancePositionEnum,
    position_id: Scalars['Int'],
}

export type mutationCreateAlliancePositionArgs = {
    name: Scalars['String'],
    level: Scalars['Int'],
    view_bank: Scalars['Boolean'],
    withdraw_bank: Scalars['Boolean'],
    change_permissions: Scalars['Boolean'],
    see_spies: Scalars['Boolean'],
    see_reset_timers: Scalars['Boolean'],
    tax_brackets: Scalars['Boolean'],
    post_announcements: Scalars['Boolean'],
    manage_announcements: Scalars['Boolean'],
    accept_applicants: Scalars['Boolean'],
    remove_members: Scalars['Boolean'],
    edit_alliance_info: Scalars['Boolean'],
    manage_treaties: Scalars['Boolean'],
    manage_market_share: Scalars['Boolean'],
    manage_embargoes: Scalars['Boolean'],
    promote_self_to_leader: Scalars['Boolean'],
}

export type mutationDeleteAlliancePositionArgs = {
    id: Scalars['Int'],
}