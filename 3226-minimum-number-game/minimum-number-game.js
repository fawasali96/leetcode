/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = [];
    nums.sort((a, b) => a - b);
    let i = 0
    while (i < nums.length) {
        let alice = nums[i];
        let bob = nums[i + 1];
        arr.push(bob);
        arr.push(alice);
        i += 2;
    }
    return arr;
};