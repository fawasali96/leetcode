/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 0;
    let num = 1;
    while(k > 0) {
        if(arr[i] === num) {
            i++
        } else {
            k--;
        }
        num++;
    }
    return num - 1;
};