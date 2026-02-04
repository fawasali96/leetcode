/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    let result = [];
    for(let i = deck.length - 1; i >= 0; i--) {
        if(result.length > 0) {
            result.unshift(result.pop());
        }
        result.unshift(deck[i]);
    }
    return result;
};