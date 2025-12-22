/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => a - b);
    let removeCount = arr.length * 0.05;
    let sum = 0; 
    let count = 0;
    for(let i = removeCount; i < arr.length - removeCount; i++) {
        sum += arr[i];
        count++;
    }
    return sum / count;
};