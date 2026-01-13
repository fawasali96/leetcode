/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let double = s + s;
    return double.slice(1, -1).includes(s);
};