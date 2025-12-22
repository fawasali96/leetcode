/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let collection = new Set();
    let operations = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
        operations++;
        if(nums[i] <= k) {
            collection.add(nums[i]);
        } 
        if(collection.size === k) {
            return operations;
        }
    }
};