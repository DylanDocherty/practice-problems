/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/string-to-integer-atoi/
 */


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let splitString = s.trim().split(" ")[0].split(/[A-z]|\./);
    let numberString = "";
    let newNum = 0;


    numberString = splitString[0];
    if (numberString.search(/[0-9]/g) > -1) {
        if (numberString.search(/[0-9]/g) > 1) {
            return 0
        }
        if (numberString.search(/\-\+/) > 0) {
            numberString = numberString.slice(0, numberString.search(/\-\+/));
        }
        if (numberString.search(/[A-z]|\./)) {
            numberString = numberString.split(/[A-z]|\./);


        }
        newNum = parseInt(numberString[0]);
        newNum = Math.min(Math.max(newNum, -Math.pow(2, 31)), Math.pow(2, 31) - 1);

    }

    return newNum;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with .words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi(".1"));
console.log(myAtoi("+-12"));
