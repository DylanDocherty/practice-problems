/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/two-sum/    
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hold = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i != j && nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));