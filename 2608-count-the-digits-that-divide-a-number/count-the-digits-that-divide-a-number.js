/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let str = num.toString();
    for(let ch of str) {
        if(num % Number(ch) === 0) {
            count++
        }
    }
    return count;
};