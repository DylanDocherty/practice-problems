/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/reverse-integer/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    let regex = "[-|+]?[[0-9]+|[0-9]+.|.[0-9]+|[0-9]+.[0-9]+][[e|E]?[-|+]?[0-9]+]?";
    let check = s.match(regex);
    console.log(check);
    if (check != null && check[0] === s) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumber("e"));//false
console.log(isNumber("-+9"));//false
console.log(isNumber("-+9"));//false
console.log(isNumber("+9"));//true
console.log(isNumber("-9"));//true
console.log(isNumber("99e2.5"));//false
console.log(isNumber("0"));
console.log(isNumber("e9"));