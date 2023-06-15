"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GraphQL_1 = __importDefault(require("../../services/GraphQL"));
function activityStatQuery(params, query, paginator) {
    return __awaiter(this, void 0, void 0, function* () {
        const argsToParameters = GraphQL_1.default.generateParameters(params);
        const res = yield GraphQL_1.default.makeCall(`
    {
        activity_stats${argsToParameters} {
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
          ` : ''}
        data {
          ${query}
        }
      }
    }
  `, this.apiKey);
        this.setRateLimit(res.rateLimit);
        if (paginator)
            return res.data.activity_stats;
        return res.data.activity_stats.data;
    });
}
exports.default = activityStatQuery;
