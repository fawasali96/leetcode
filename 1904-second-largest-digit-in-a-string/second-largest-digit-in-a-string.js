/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max1 = -1, max2 = -1;
    for(let ch of s) {
        if(ch >= '0' && ch <= '9') {
            let num = ch - '0';
            if(num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num < max1 && num > max2) {
                max2 = num;
            }
        }
    }
    return max2;
};