/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/add-binary/
 * important distinction on line 17 https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let finalString = "";
    let carry = 0;
    let sum = 0;
    while (a || b || carry) {
        sum = +a.slice(-1) + +b.slice(-1) + carry;

        if (sum > 1) {
            finalString = "" + sum % 2 + "" + finalString;
            carry = 1;
        } else {
            finalString = "" + sum + "" + finalString;
            carry = 0;
        }

        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }
    return finalString;
};

let a = "11", b = "1";
// console.log(addBinary(a, b)); // "100"
a = "1010", b = "1011";
console.log(addBinary(a, b)); // "10101"