/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let arr = s.split('');
    let left = 0, right = k - 1;
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join('');
};