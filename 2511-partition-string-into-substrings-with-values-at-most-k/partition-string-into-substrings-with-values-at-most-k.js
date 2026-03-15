/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    let count = 1;
    let number = 0;
    for(let ch of s) {
        let digit = Number(ch);
        if(digit > k) return -1;
        
        number = number * 10 + digit;
        if(number > k) {
            count++;
            number = digit;
        }
    }
    return count;
};