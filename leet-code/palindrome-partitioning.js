/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/palindrome-partitioning/
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let partitionSet = partitionSubstrings(s);
    let palindromePartitions = [];
    let isPalPartition = true;
    partitionSet.forEach((partition) => {
        isPalPartition = true;
        partition.forEach((substring) => {
            if (!isPalindrome(substring)) {
                isPalPartition = false;
            }
        });
        if (isPalPartition) {
            palindromePartitions.push(partition);
        }
    });
    return palindromePartitions;
};




/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let prevChars = [];

    for (let i = 0; i < s.length; i++) {
        if (Math.floor(s.length / 2) > i) {
            prevChars.push(s.substring(i, i + 1));
        } else {
            if ((s.length / 2) <= i) {
                if (prevChars.pop() != s[i]) { // Important that this is nested and not &&'d together
                    return false;
                }
            }
        }
    }
    return true;
}

var partitionSubstrings = function (s, results) {
    let partition = [];
    for (let stepSize = 1; stepSize <= s.length; stepSize++) { // I is the step size
        partition[stepSize - 1] = [];
        for (let z = 0; z < stepSize; z++) {// step between each step size
            partition[stepSize - 1][z] = [];
            if (s.substring(0, z) !== "" && z > 0) {
                partition[stepSize - 1][z].push(s.substring(0, z));
            }
            for (let j = z; j <= s.length; j += stepSize) { //J iterates over the string and uses step size to ad equal sized substrings
                if (s.substring(j, j + stepSize) !== "" || s.substring(j + stepSize) !== "") {
                    if (s.substring(j, j + stepSize).length === stepSize) {
                        partition[stepSize - 1][z].push(s.substring(j, j + stepSize));
                    } else {
                        partition[stepSize - 1][z].push(s.substring(j));
                    }
                }
            }
        }
    }
    let partitionSet = new Set();
    for (let i = 0; i < partition.length; i++) {
        for (let z = 0; z < partition[i].length; z++) {
            if (!Array.from(partitionSet).some(element => arrayEqual(element, partition[i][z]))) {
                partitionSet.add(partition[i][z]);
            }
        }
    }
    return Array.from(partitionSet);
}

var arrayEqual = function (array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {

            return false;
        }
    }
    return true;
}

// console.log(partition("aab"));
// console.log(partition("a"));
// console.log(partitionSubstrings("aabb", []));
// console.log(partition("aab"));

// console.log(partition("cdd"));

console.log(isPalindrome("cdd"));