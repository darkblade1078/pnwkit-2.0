import { Kit } from '../..';
import { deleteAlliancePositionPaginator, mutationDeleteAlliancePositionArgs } from '../../interfaces/mutations/alliancePosition';
import { alliancePosition } from '../../interfaces/queries/alliance';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    id: number;
}

/**
 * delete a position in the alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<alliancePosition | deleteAlliancePositionPaginator>}
 */
export default async function deleteAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<alliancePosition>;
export default async function deleteAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<deleteAlliancePositionPaginator>;
export default async function deleteAlliancePositionMutation(
    this: Kit,
    params: Parameters,
    query: string,
    apiKey: string,
    paginator?: boolean,
): Promise<alliancePosition | deleteAlliancePositionPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as mutationDeleteAlliancePositionArgs);

    const res = await GraphQL.makeMutationCall(`
    mutation {
        deleteAlliancePosition${argsToParameters} {
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
        
        ${query}
        
      }
    }
  `,
        apiKey,
        this.botKey,
    );

    this.setRateLimit(res.rateLimit);

    if (paginator)
        return res.data.deleteAlliancePosition as deleteAlliancePositionPaginator;


    return res.data.deleteAlliancePosition as alliancePosition;
}
