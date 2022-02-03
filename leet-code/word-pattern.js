/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/word-pattern/
 * Solved
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(" ");
    let patternMap = new Map();
    let patternPosition = 0;
    let patternMatch = true;
    if (words.length % pattern.length != 0) {
        return false;
    }

    words.forEach((word, index) => {
        patternPosition = pattern[index % pattern.length];
        if (patternMap.has(patternPosition)) {
            if (patternMap.get(patternPosition) != word) {
                patternMatch = false;
            }
        } else if (Array.from(patternMap.values()).includes(word)) {
            patternMatch = false;
        } else {
            patternMap.set(patternPosition, word);
        }
    });
    return patternMatch;
};

let pattern = "abba", s = "dog cat cat dog";

console.log(wordPattern(pattern, s));
pattern = "abba", s = "dog cat cat fish";
console.log(wordPattern(pattern, s));
pattern = "aaaa", s = "dog cat cat dog"
console.log(wordPattern(pattern, s));

pattern = "abba", s = "dog dog dog dog";
console.log(wordPattern(pattern, s));

pattern = "aaa", s = "aa aa aa aa";
console.log(wordPattern(pattern, s));
