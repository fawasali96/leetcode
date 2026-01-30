/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n = s.length;
    let low = 0;
    let high = n;
    let perm = [];
    for(let i = 0; i < n; i++) {
        if(s[i] === 'I') {
            perm.push(low);
            low++;
        } else {
            perm.push(high);
            high--;
        }
    }
    perm.push(low);
    return perm;
};