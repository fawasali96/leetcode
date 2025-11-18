/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let ind = word.indexOf(ch);
    if(ind === -1) return word;
    let prefix = word.slice(0, ind + 1).split("").reverse().join("");
    return prefix + word.slice(ind + 1);
};