/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/house-robber/    
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function (nums) {
    let even = 0;
    let odd = 0;
    nums.map((value, index) => {
        if (index % 2 === 0) {
            even += value;
        } else {
            odd += value;
        }
    });
    return even > odd ? even : odd;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let total = 0;
    let odd = 0;
    // nums.map((value, index, fullArray) => {
    //     if (fullArray[index + 1] != null || value > fullArray[index + 1]) {
    //         total += value;
    //         console.log(value);
    //     }
    // });
    const getAllSubsets =
        theArray => theArray.reduce(
            (subsets, value) => subsets.concat(
                subsets.map(set => [value, ...set])
            ),
            [[]]
        );

    powerSet = getAllSubsets(nums);
    let hold = 0;
    let sum = 0;
    powerSet.map((valueArray, indexArray) => {
        sum = 0;
        valueArray.map((value, index) => {
            sum += value;
        });
        if (sum > hold) {
            hold = sum;
        }
    });
    return hold;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));