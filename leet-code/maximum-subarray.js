/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/maximum-subarray/
 * Solved
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = - Math.pow(10, 4);
    let current_max = 0;
    //consecutive

    for (var i = 0; i < nums.length; i++) {

        current_max += nums[i];
        if (current_max > max) {
            max = current_max;
        }
        if (current_max < 0) {
            console.log("current max before reset" + current_max);
            current_max = 0;
        }
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));