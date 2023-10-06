import activityStatQuery from "./queries/activityStatQuery";
import allianceQuery from "./queries/allianceQuery";
import apiKeyDetailsQuery from "./queries/apiKeyDetailsQuery";
import bankRecordsQuery from "./queries/bankRecQuery";
import baseballGameQuery from "./queries/baseballGameQuery";
import baseballPlayerQuery from "./queries/baseballPlayerQuery";
import baseballTeamQuery from "./queries/baseballTeamQuery";
import bountyQuery from "./queries/bountyQuery";
import cityQuery from "./queries/cityQuery";
import colorQuery from "./queries/colorQuery";
import embargoQuery from "./queries/embaroQuery";
import gameInfoQuery from "./queries/gameInfoQuery";
import nationQuery from "./queries/nationQuery";
import resourceStatQuery from "./queries/resourceStatQuery";
import tradePricesQuery from "./queries/tradePricesQuery";
import tradeQuery from "./queries/tradeQuery";
import treasureQuery from "./queries/treasureQuery";
import treasureTradeQuery from "./queries/treasureTradeQuery";
import warAttackQuery from "./queries/warAttackQuery";
import warQuery from "./queries/warQuery";
import topTradeInfoQuery from "./queries/topTradeInfoQuery";
import alliancePositionSubscription from "./subscriptions/alliancePositionSubscription";
import allianceSubscription from "./subscriptions/allianceSubscription";
import bankRecSubscription from "./subscriptions/bankRecSubscription";
import baseballGameSubscription from "./subscriptions/baseballGameSubscription";
import baseballTeamSubscription from "./subscriptions/baseballTeamSubscription";
import bountySubscription from "./subscriptions/bountySubsciption";
import citySubscription from "./subscriptions/citySubscription";
import embargoSubscription from "./subscriptions/embargoSubsciptions";
import nationSubscription from "./subscriptions/nationSubscription";
import taxBracketSubscription from "./subscriptions/taxBracketSubscription";
import tradeSubscription from "./subscriptions/tradeSubscription";
import treasureSubscription from "./subscriptions/treasureTradeSubscription";
import treatySubscription from "./subscriptions/treatySubscription";
import warAttackSubscription from "./subscriptions/warAttackSubscription";
import warSubscription from "./subscriptions/warSubscription";
import bankDepositMutation from "./mutations/bankDepositMutation";
import bankWithdrawMutation from "./mutations/bankWithdrawMutation";
import approveTreatyMutation from "./mutations/approveTreatyMutation";
import assignTaxBracketMutation from "./mutations/assignTaxBracketMutation";
import cancelTreatyMutation from "./mutations/cancelTreatyMutation";
import createTaxBracketMutation from "./mutations/createTaxBracketMutation";
import deleteTaxBracketMutation from "./mutations/deleteTaxBracketMutation";
import editTaxBracketMutation from "./mutations/editTaxBracketMutation";
import proposeTreatyMutation from "./mutations/proposeTreatyMutation";
import sendMessage from "./v2/sendMessage";
import bannedNationQuery from "./queries/bannedNationQuery";
import nationResourceStatQuery from "./queries/nationResourceStatQuery";
import customQuery from "./queries/customQuery";


export default class PnwKitAPI {
    activityStatQuery = activityStatQuery;
    allianceQuery = allianceQuery;
    apiKeyDetailsQuery = apiKeyDetailsQuery;
    bankRecordsQuery = bankRecordsQuery;
    baseballGameQuery = baseballGameQuery;
    baseballPlayerQuery = baseballPlayerQuery;
    baseballTeamQuery = baseballTeamQuery;
    bountyQuery = bountyQuery;
    cityQuery = cityQuery;
    colorQuery = colorQuery;
    embargoQuery = embargoQuery;
    gameInfoQuery = gameInfoQuery;
    nationQuery = nationQuery;
    resourceStatQuery = resourceStatQuery;
    tradePricesQuery = tradePricesQuery;
    tradeQuery = tradeQuery;
    treasureQuery = treasureQuery;
    treasureTradeQuery = treasureTradeQuery;
    warAttackQuery = warAttackQuery;
    warQuery = warQuery;
    topTradeInfoQuery = topTradeInfoQuery;
    bannedNationQuery = bannedNationQuery;
    nationResourceStatQuery = nationResourceStatQuery;
    customQuery = customQuery;
    alliancePositionSubscription = alliancePositionSubscription;
    allianceSubscription = allianceSubscription;
    bankRecSubscription = bankRecSubscription;
    baseballGameSubscription = baseballGameSubscription;
    baseballTeamSubscription = baseballTeamSubscription;
    bountySubscription = bountySubscription;
    citySubscription = citySubscription;
    embargoSubscription = embargoSubscription;
    nationSubscription = nationSubscription;
    taxBracketSubscription = taxBracketSubscription;
    tradeSubscription = tradeSubscription;
    treasureSubscription = treasureSubscription;
    treatySubscription = treatySubscription;
    warAttackSubscription = warAttackSubscription;
    warSubscription = warSubscription;
    approveTreatyMutation = approveTreatyMutation;
    assignTaxBracketMutation = assignTaxBracketMutation;
    bankDepositMutation = bankDepositMutation;
    bankWithdrawMutation = bankWithdrawMutation;
    cancelTreatyMutation = cancelTreatyMutation;
    createTaxBracketMutation = createTaxBracketMutation;
    deleteTaxBracketMutation = deleteTaxBracketMutation;
    editTaxBracketMutation = editTaxBracketMutation;
    proposeTreatyMutation = proposeTreatyMutation;
    sendMessage = sendMessage;
}