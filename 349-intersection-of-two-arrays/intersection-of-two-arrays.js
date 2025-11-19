/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   let result = [];
   let num1 = new Set(nums1);
   let num2 = new Set(nums2);
   for(let num of num1) {
    if(num2.has(num)) {
        result.push(num)
    }
   }
   return result;
};