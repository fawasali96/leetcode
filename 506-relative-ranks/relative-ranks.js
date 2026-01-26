/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sorted = [...score].sort((a, b) => b - a);
    const rank = new Map();
    for(let i = 0; i < sorted.length; i++) {
        if(i === 0) rank.set(sorted[i], "Gold Medal")
        else if (i === 1) rank.set(sorted[i], "Silver Medal")
        else if (i === 2) rank.set(sorted[i], "Bronze Medal")
        else rank.set(sorted[i], (i + 1).toString())
    }
    return score.map(s => rank.get(s));
};