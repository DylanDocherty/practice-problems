/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/contiguous-array/
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let zeros = 0;
    let ones = 0;
    nums.forEach((element,index)=>{
        if(element === 0){
            zeros++;
        }else{
            ones++;
        }
    });
    let difference = zeros>ones? zeros-ones:ones-zeros;
    if(zeros!=ones){
        return ones+zeros-difference;
    }else{
        return ones+zeros;
    }
};

let nums = [0,1];
console.log(findMaxLength(nums));

nums = [0,1,0];
console.log(findMaxLength(nums));

nums = [0,0,0,1,1,1,0];
console.log(findMaxLength(nums));