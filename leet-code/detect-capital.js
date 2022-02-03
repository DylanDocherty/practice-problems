/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/gas-station/
 * Solved
 */


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let captialFlag = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            captialFlag += 1;

        }
    }
    if (captialFlag > 1 && captialFlag != word.length) {
        return false;
    } else if (captialFlag === 1 && word[0] != word[0].toUpperCase()) {
        return false;
    }
    return true;
};
word = "USA";
console.log(detectCapitalUse(word));
word = "FlaG";
console.log(detectCapitalUse(word));