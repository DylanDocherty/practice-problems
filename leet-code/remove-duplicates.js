/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Solved
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let max = Math.max(nums);
    let currentPos = 0;
    let lastNum = -1;
    for(let i=0; i<nums.length;i++){
        if(lastNum!= nums[i]){
            lastNum = nums[i];
            nums[currentPos] = nums[i];
            currentPos +=1;
        }
    }
    return currentPos;
};

let nums = [1,1,2];

console.log(removeDuplicates(nums));

nums = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums));