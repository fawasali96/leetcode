/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;
    let result = new Array(nums.length);
    while(left <= right) {
        let leftSqr = nums[left] * nums[left];
        let rightSqr = nums[right] * nums[right];
        if(leftSqr > rightSqr) {
            result[index] = leftSqr;
            left++;
        } else {
            result[index] = rightSqr;
            right--;
        } index--;
           }
           return result;
};