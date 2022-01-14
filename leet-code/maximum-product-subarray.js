/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/maximum-subarray/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct1 = function (nums) {
    let max = - Math.pow(10, 4);
    let current_max = 1;
    //consecutive

    for (var i = 0; i < nums.length; i++) {

        current_max *= nums[i];
        if (current_max > max) {
            max = current_max;
        }
        if ((current_max < 0 && nums[i] < 0 && nums[i + 1] != null && nums[i + 1] > 0) || current_max === 0) {
            console.log("current max before reset" + current_max);
            current_max = 1;
        }

    }
    return max;
};

var maxProduct = function (nums) {
    // let max = - Math.pow(10, 4);
    // let current_max = 1;
    let positionsOfNegNums = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            positionsOfNegNums.push(i);
        }
        // current_max *= nums[i];
        // if (current_max > max) {
        //     max = current_max;
        // }
        // if ((current_max < 0 && nums[i] < 0 && nums[i + 1] != null && nums[i + 1] > 0) || current_max === 0) {
        //     console.log("current max before reset" + current_max);
        //     current_max = 1;
        // }

    }
    let max = - Math.pow(10, 4);
    let current_max = 1;
    let startProduct = 1;
    if (positionsOfNegNums.length === 1) {
        for (var i = 0; i < nums.length; i++) {
            if (i !== positionsOfNegNums[0]) {
                current_max *= nums[i];
                if (current_max > max) {
                    max = current_max;
                }
            } else {
                current_max = 1;
            }
        }
    }

    return max;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([3, -1, 4]));
console.log(maxProduct([-2, 3, -4]));

