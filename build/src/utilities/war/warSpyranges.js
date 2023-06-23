"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get war/spy ranges
 * @param {number} score The nation's score
 * @returns {warRanges} war/spy ranges
 */
function warSpyRanges(score) {
    return {
        war: {
            OffensiveWarRangeMin: score * 0.75,
            OffensiveWarRangeMax: score * 1.75,
            DefensiveWarRangeMin: score / 0.75,
            DefensiveWarRangeMax: score / 1.75,
        },
        spy: {
            OffensiveSpyRangeMin: score * 0.40,
            OffensiveSpyRangeMax: score * 2.50,
            DefensiveSpyRangeMin: score / 0.40,
            DefensiveSpyRangeMax: score / 2.50,
        }
    };
}
exports.default = warSpyRanges;
//# sourceMappingURL=warSpyRanges.js.map