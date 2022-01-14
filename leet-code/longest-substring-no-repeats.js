/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Solved
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let characterPositionMap = new Map();
    let prevStart = 0;
    let longestString = s.length > 0 ? 1 : 0;
    let newChar = "";
    for (let i = 1; i < s.length + 1; i++) {
        newChar = s.substring(i - 1, i);
        // console.log(newChar);

        // console.log(characterPositionMap.has(newChar));
        if (characterPositionMap.has(newChar)) {
            prevStart = characterPositionMap.get(newChar) + 1;
            i = prevStart;
            characterPositionMap.clear();
            // console.log(prevStart);
            // console.log("letter: " + newChar + " and position " + (i - 1));

        } else {
            characterPositionMap.set(newChar, i - 1);
            // console.log(characterPositionMap);
            // console.log("letter: " + newChar + " and position " + (i - 1));
        }

        if (s.substring(prevStart, i).length > longestString) {
            longestString = s.substring(prevStart, i).length;
        }
    }
    return longestString;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb"));//1
console.log(lengthOfLongestSubstring("pwwkew"));//3
console.log(lengthOfLongestSubstring(""));//0
console.log(lengthOfLongestSubstring("au")); //2
console.log(lengthOfLongestSubstring("dvdf"));//3