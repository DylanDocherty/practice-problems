/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/valid-parentheses/
 * Solved
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let bracketMap = new Map();
    bracketMap.set(')', '(');
    bracketMap.set(']', '[');
    bracketMap.set('}', '{');
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i]);
        } else if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
            switch (stack.pop()) {
                case bracketMap.get(s[i]):
                    break;
                default:
                    return false;
            }
        }

    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};

s = "()";
console.log(isValid(s));
s = "()[]{}";
console.log(isValid(s));
s = "(]";
console.log(isValid(s));
s = "[";
console.log(isValid(s));