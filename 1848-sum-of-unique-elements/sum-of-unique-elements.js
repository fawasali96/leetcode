/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let freq = {};
    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let sum = 0;
    for(let num of nums) {
        if(freq[num] === 1) {
            sum += num;
        }
    }
    return sum;
};