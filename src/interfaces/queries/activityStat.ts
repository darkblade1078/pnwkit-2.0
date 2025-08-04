import { Maybe, Scalars } from ".."
import { paginatorInfo, sortOrder } from "../other"

export type activityStatPaginator = {
    __typename?: 'activityStatPaginator'
    paginatorInfo: paginatorInfo
    data: Array<activityStat>
}

export enum queryActivityStatsOrderByColumn {
    DATE = 'DATE',
    TOTAL_NATIONS = 'TOTAL_NATIONS',
    NATIONS_CREATED = 'NATIONS_CREATED',
    ACTIVE_1_DAY = 'ACTIVE_1_DAY',
    ACTIVE_2_DAYS = 'ACTIVE_2_DAYS',
    ACTIVE_3_DAYS = 'ACTIVE_3_DAYS',
    ACTIVE_1_WEEK = 'ACTIVE_1_WEEK',
    ACTIVE_1_MONTH = 'ACTIVE_1_MONTH',
}

export type queryActivityStatsOrderByOrderByClause = {
    column: queryActivityStatsOrderByColumn
    order: sortOrder
}

export type queryActivityStatsArgs = {
    before?: Maybe<Scalars['DateTimeAuto']>
    after?: Maybe<Scalars['DateTimeAuto']>
    orderBy?: Maybe<queryActivityStatsOrderByOrderByClause>
    first?: Maybe<Scalars['Int']>
    page?: Maybe<Scalars['Int']>
}

export type activityStat = {
    __typename?: 'activityStat'
    total_nations?: Maybe<Scalars['Int']>
    nations_created?: Maybe<Scalars['Int']>
    active_1_day?: Maybe<Scalars['Int']>
    active_2_days?: Maybe<Scalars['Int']>
    active_3_days?: Maybe<Scalars['Int']>
    active_1_week?: Maybe<Scalars['Int']>
    active_1_month?: Maybe<Scalars['Int']>
}