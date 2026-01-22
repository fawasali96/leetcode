/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let num = "";
    for(let ch of s) {
        num += (ch.charCodeAt(0) - 96);
    }

    for(let i = 0; i < k; i++) {
        let sum = 0;
        for(let digit of num) {
            sum += Number(digit)
        }
        num = String(sum);
    }
    return Number(num);
};