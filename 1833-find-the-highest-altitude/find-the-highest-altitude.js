/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0;
    let maxAlt = 0;
    for(let g of gain) {
        alt += g;
        if(alt > maxAlt) {
            maxAlt = alt;
        }
    }
    return maxAlt;
};