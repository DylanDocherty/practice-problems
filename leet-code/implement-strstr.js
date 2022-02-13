
/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/implement-strstr/
 * Solved
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
    if (typeof haystack != "string" || typeof needle != "string") {
        return -1;
    }
    if (haystack === needle) {
        return 0;
    }
    let tempString;
    for (let i = 0; i < haystack.length; i++) {
        tempString = haystack.slice(i, i + needle.length);
        if (tempString === needle) {
            return i;
        }
    }
    return -1;
}
module.exports = {
    strStr: strStr
}