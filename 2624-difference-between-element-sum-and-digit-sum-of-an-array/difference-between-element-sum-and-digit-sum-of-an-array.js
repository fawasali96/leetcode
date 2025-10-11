/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elemSum = 0, digitSum = 0;
    for(let num of nums) {
        elemSum += num;

    let str = num.toString();
    for(let ch of str) {
        digitSum += Number(ch)
    }
    }
    return Math.abs(elemSum - digitSum);
};