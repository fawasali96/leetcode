/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a, b) => b - a);
    let score = 0;
    let i = 1;
    while(i <= k) {
        score += nums[0];
        nums[0] = nums[0] + 1;
        i++;
    }
    return score;
};