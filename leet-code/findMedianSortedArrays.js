/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let midPoint = 0;
    let median1 = -1;
    let median2 = -1;
    let medianFinal = 0;

    if (nums1.length > 0) {
        if (nums1.length % 2 != 1) { // even
            midPoint = (nums1.length) / 2;
            median1 = (nums1[midPoint - 1] + nums1[midPoint]) / 2

        } else { // odd
            midPoint = (nums1.length) / 2;
            median1 = nums1[Math.ceil(midPoint) - 1];
        }
    }
    if (nums2.length > 0) {
        if (nums2.length % 2 != 1) { // even
            midPoint = (nums2.length) / 2;
            median2 = (nums2[midPoint - 1] + nums2[midPoint]) / 2

        } else { // odd
            midPoint = (nums2.length) / 2;
            median2 = nums2[Math.ceil(midPoint) - 1];
        }
    }
    let shiftValue = 0;

    // if (median1 > median2) {
    //     // shiftValue = 
    // }

    return medianFinal;
};

let recursiveBinarySearch = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return -1;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return mid;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid + 1, end);
}

let binaryShiftSearch = (arr, val) => {
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === val) {
        return 0;
    } else if (arr[mid] > val) {
        if (mid > 1) {
            return arr.length - mid + binaryShiftSearch(arr.slice(0, mid));
        } else {
            return arr.length - mid;
        }
    } else {
        if (mid > 1) {
            return - mid + binaryShiftSearch(arr.slice(mid, arr.length));
        } else {
            return - mid;
        }
    }

}

let nums1 = [1, 3], nums2 = [2];

// console.log(findMedianSortedArrays(nums1, nums2));

// nums1 = [], nums2 = [2];

// console.log(findMedianSortedArrays(nums1, nums2));


console.log(binaryShiftSearch(nums1, 2));