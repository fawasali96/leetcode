/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let freq = new Array(10).fill(0);
    for(let ch of num) {
        freq[ch]++;
    }
    for(let i = 0; i < num.length; i++) {
        if(freq[i] !== Number(num[i])) return false;
    }
    return true;
};