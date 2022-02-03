/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/merge-sorted-array/
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let tempArray = [];
    let posLast = 0;
    for (let i = 0; i < n; i++) {// for each nums2
        console.log(posLast);
        for (let j = posLast; j < m; j++) { // go through nums1 starting at last position until comparsion 
            if (nums1[j] > nums2[i]) {
                console.log(nums1.slice(posLast, j));
                tempArray.push(...nums1.slice(posLast, j));
                tempArray.push(nums2[i]);
                posLast = j;
            } else if (posLast >= m) {
                tempArray.push(nums2[i]);
            }
        }
        console.log(tempArray);
    }
    console.log(tempArray);
};
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
merge(nums1, m, nums2, n);