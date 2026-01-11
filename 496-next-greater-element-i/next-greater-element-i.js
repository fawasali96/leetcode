/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    let stack = [];
    for(let num of nums2) {
        while(stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num)
        }
        stack.push(num);
    }
    while(stack.length) {
        map.set(stack.pop(), -1);
    }
    return nums1.map(num => map.get(num));
};