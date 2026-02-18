/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0
    for(let str of strs) {
        if(!isNaN(str)) {
            max = Math.max(max, Number(str))
        } else {
            max = Math.max(max, str.length);
        }
    }
    return max;
};