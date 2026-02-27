/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absCount = 0;
    let consLate = 0;
    for(let ch of s) {
        if(ch === "A") {
            absCount++;
            if(absCount >= 2) return false;
            consLate = 0; 
        } else if(ch === "L") {
            consLate++;
            if(consLate >= 3) return false;
        } else {
            consLate = 0;
        }
    }
    return true;
};