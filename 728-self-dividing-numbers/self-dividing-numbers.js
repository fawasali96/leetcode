/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    for(let i = left; i <= right; i++) {
        let str = i.toString();
        let isValid = true;
        for(let char of str) {
            let digit = Number(char);
            if(digit === 0 || i % digit !== 0) {
                isValid = false;
                break;
            }
        }
        if(isValid) result.push(i);
    }
    return result;
};