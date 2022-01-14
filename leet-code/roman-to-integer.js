/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let specialCases = ["IV", "IX", "XL", "XC", "CD", "CM"];
    let specialCasesRegex = /(IV) | (IX) | (XL) | (XC) | (CD) | (CM)/;
    let splitSArray = s.split(specialCasesRegex);
    console.log(splitSArray);
};


console.log(romanToInt("MCMXCIV"));//1994
console.log(romanToInt("LVIII"));//58
console.log(romanToInt("III"));//3
