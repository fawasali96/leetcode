/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = "aeiou";
    let freq = {};
    for(let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    let maxV = 0;
    let maxC = 0;
    for(let ch of s) {
        if(vowels.includes(ch)) {
            maxV = Math.max(maxV, freq[ch]);
        } else {
            maxC = Math.max(maxC, freq[ch]);
        }
    }
    return maxV + maxC;
};