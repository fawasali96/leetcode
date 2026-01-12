/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0;
    let currLen = 1;
    let maxLen = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) {
            currLen++;
        } else {
            currLen = 1;
        }
        maxLen = Math.max(currLen, maxLen);
    }
    return maxLen;
};