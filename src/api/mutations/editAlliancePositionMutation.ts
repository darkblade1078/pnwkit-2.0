import { Kit } from '../..';
import { editAlliancePositionPaginator, mutationCreateAlliancePositionArgs } from '../../interfaces/mutations/alliancePosition';
import { alliancePosition } from '../../interfaces/queries/alliance';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    name: string;
    level: number;
    view_bank: boolean;
    withdraw_bank: boolean;
    change_permissions: boolean;
    see_spies: boolean;
    see_reset_timers: boolean;
    tax_brackets: boolean;
    post_announcements: boolean;
    manage_announcements: boolean;
    accept_applicants: boolean;
    remove_members: boolean;
    edit_alliance_info: boolean;
    manage_treaties: boolean;
    manage_market_share: boolean;
    manage_embargoes: boolean;
    promote_self_to_leader: boolean;
}

/**
 * edit a position in the alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<alliancePosition| editAlliancePositionPaginator>}
 */
export default async function editAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<alliancePosition>;
export default async function editAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<editAlliancePositionPaginator>;
export default async function editAlliancePositionMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<alliancePosition | editAlliancePositionPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationCreateAlliancePositionArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        editAlliancePosition${argsToParameters} {
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
    return res.data.editAlliancePosition as editAlliancePositionPaginator;


  return res.data.editAlliancePosition as alliancePosition;
}
