/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let freq = {};
    let result = [];
    for(let word of s1.split(" ")) {
        freq[word] = (freq[word] || 0) + 1;
    }

    for(let word of s2.split(" ")) {
        freq[word] = (freq[word] || 0) + 1;
    }

    for(let word in freq) {
        if(freq[word] === 1) {
            result.push(word);
        }
    }
    return result;
};