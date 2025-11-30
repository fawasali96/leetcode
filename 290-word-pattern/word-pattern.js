/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");
    if(words.length !== pattern.length) return false;
    let map1 = Object.create(null);
    let map2 = Object.create(null);
    for(let i = 0; i < pattern.length; i++) {
        let p = pattern[i];
        let w = words[i];
        if(map1[p] && map1[p] !== w) return false;
        if(map2[w] && map2[w] !== p) return false;
        map1[p] = w;
        map2[w] = p
    }
    return true;
};