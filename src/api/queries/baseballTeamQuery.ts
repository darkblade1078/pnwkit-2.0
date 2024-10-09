import { Kit } from "../..";
import { baseballTeam, baseballTeamPaginator, queryBaseballTeamsArgs, queryBaseballTeamsOrderByOrderByClause } from "../../interfaces/queries/baseball";
import GraphQL from "../../services/GraphQL";


export interface Parameters {
  id?: number[];
  orderBy?: queryBaseballTeamsOrderByOrderByClause;
  first: number
  page?: number;
}

/**
 * Gets a list of baseball teams
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<baseballTeam[] | baseballTeamPaginator>} The baseball teams queried or as paginated
 */
export default async function baseballTeamQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<baseballTeam[]>;
export default async function baseballTeamQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<baseballTeamPaginator>;
export default async function baseballTeamQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<baseballTeamPaginator | baseballTeam[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryBaseballTeamsArgs);

  const res = await GraphQL.makeCall(`
    {
        baseball_teams${argsToParameters} {
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

  if (paginator) return res.data.baseball_teams$ as baseballTeamPaginator;

  return res.data.baseball_teams$.data as baseballTeam[];
}
