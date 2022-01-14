/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/longest-common-prefix/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let shortestString = strs[0];
    strs.forEach((element) => {
        if (shortestString.length > element.length) {
            shortestString = element;
        }
    });

    let longestPrefix = "";
    let longerThanCurrent = true;
    for (let i = 0; i < shortestString.length + 1; i++) {
        strs.forEach((element) => {
            if (shortestString.slice(0, i) !== element.slice(0, i)) {
                longerThanCurrent = false;
            }
        });
        if (longerThanCurrent) {
            longestPrefix = shortestString.slice(0, i);
        }
    }

    return longestPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));


