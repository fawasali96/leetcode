/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++) {
        let number = target - nums[i];
        if(map[number] !== undefined) {
            return [map[number], i];
        }
        map[nums[i]] = i;
    }
};