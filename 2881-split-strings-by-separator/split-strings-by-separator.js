/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let result = [];
    for(let word of words) {
        let parts = word.split(separator);

    for(let p of parts) {
        if(p !== "") result.push(p);
    }
}
    return result;
};