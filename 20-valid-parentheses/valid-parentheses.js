/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {")": "(", "}": "{", "]": "["};
    for(let par of s) {
        if(par === "(" || par === "[" || par === "{") {
            stack.push(par);
        } else {
            if(stack.length === 0 || stack.pop() !== map[par]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};