/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/remove-element/
 * Solved
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let position = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[position] = nums[i];
            position++;
        }
    }
    return position;
};