/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/palindrome-number/    
 */


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString();
    let midpoint = Math.ceil(x.length / 2);
    for (let i = 0; i < x.length - 1; i++) {
        if (x[i] != x[x.length - 1 - i] && i != midpoint) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(123321));
console.log(isPalindrome(1231321));
console.log(isPalindrome(1233281));