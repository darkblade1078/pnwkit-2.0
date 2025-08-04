import { Maybe, Scalars } from ".."
import { nation } from "./nation"

export type apiKeyDetails = {
    __typename?: 'apiKeyDetails'
    nation?: Maybe<nation>
    key: Maybe<string>
    requests: Maybe<Scalars['Int']>
    max_requests: Maybe<Scalars['Int']>
    permission_bits: Maybe<Scalars['Int']>
}