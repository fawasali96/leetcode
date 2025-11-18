/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums);
    let arr = Array.from(set).sort((a,b) => b - a);
    return arr[2] !== undefined ? arr[2]: arr[0];
};