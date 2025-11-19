/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
   let duplicate;
   let missing;
   for(let num of nums) {
    if(nums.indexOf(num) !== nums.lastIndexOf(num)) {
        duplicate = num;
    }
   }
   for(let i = 1; i <= nums.length; i++) {
    if(!nums.includes(i)) {
        missing = i;
    }
   }
   return [duplicate, missing];
};