import { Kit } from '../..';
import { assignAlliancePositionPaginator, mutationAssignAlliancePositionArgs } from '../../interfaces/mutations/alliancePosition';
import { alliancePositionEnum, alliancePosition } from '../../interfaces/queries/alliance';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id: number;
  default_position: alliancePositionEnum;
  position_id: number;
}

/**
 * assign a member a position in the alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<alliancePosition| assignAlliancePositionPaginator>}
 */
export default async function assignAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<alliancePosition>;
export default async function assignAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<assignAlliancePositionPaginator>;
export default async function assignAlliancePositionMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<alliancePosition | assignAlliancePositionPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationAssignAlliancePositionArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        assignAlliancePosition${argsToParameters} {
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
    return res.data.assignAlliancePosition as assignAlliancePositionPaginator;


  return res.data.assignAlliancePosition as alliancePosition;
}
