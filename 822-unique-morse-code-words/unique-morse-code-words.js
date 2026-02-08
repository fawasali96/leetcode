/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let set = new Set();
    for(let word of words) {
        let morseCode = "";
        for(let ch of word) {
            morseCode += morse[ch.charCodeAt(0) - 97]
        }
        set.add(morseCode);
    }
    return set.size;
};