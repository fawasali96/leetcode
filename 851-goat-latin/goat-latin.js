/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let words = sentence.split(" ");
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let result = [];
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if(vowels.has(word[0].toLowerCase())) {
            word = word + 'ma'
        } else {
            word = word.slice(1) + word[0] + 'ma';
        }
        word = word + 'a'.repeat(i + 1);
        result.push(word);
    }
    return result.join(" ");
};