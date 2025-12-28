/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    let count = {};
    for(let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;

        while(count[s[right]] > 2) {
            count[s[left]]--;
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};