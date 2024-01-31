import { Kit } from '../..';
import { queryTreasureTradesArgs, queryTreasureTradesOrderByOrderByClause, treasureTrade, treasureTradePaginator } from '../../interfaces/queries/treasureTrade';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    id?: number[];
    nation_id?: number[];
    min_id?: number[];
    max_id?: number[];
    orderBy?: queryTreasureTradesOrderByOrderByClause;
    first?: number;
    page?: number;
}

/**
 * Gets a list of treasure trades
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<treasureTrade[] | treasureTradePaginator>} The nations queried or as paginated
 */
export default async function treasureTradeQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<treasureTrade[]>;
export default async function treasureTradeQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<treasureTradePaginator>;
export default async function treasureTradeQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<treasureTradePaginator | treasureTrade[]> {
    const argsToParameters = GraphQL.generateParameters(params as queryTreasureTradesArgs);

    const res = await GraphQL.makeCall(`
    {
      treasure_trades${argsToParameters} {
        ${(paginator) ?
            `
          paginatorInfo {
            count,
            currentPage,
            firstItem,
            hasMorePages,
            lastItem,
            lastPage,
            perPage,
            total
          },
          `: ''
        }
        data {
          ${query}
        }
      }
    }
  `, this.apiKey);

    this.setRateLimit(res.rateLimit);

    if (paginator) return res.data.treasure_trades as treasureTradePaginator;

    return res.data.treasure_trades.data as treasureTrade[];
}
