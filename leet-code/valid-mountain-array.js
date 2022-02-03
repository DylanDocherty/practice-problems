/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/valid-mountain-array/
 * 
 */


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let peak = -1;
    let peakIndex = -1;
    if (arr.length < 3) {
        return false;
    }
    arr.forEach((value, index) => {
        if (index > 0 && index < arr.length) {
            if (peak < value) {
                peak = value;
                peakIndex = index;
            }
        }
    });
    for (let i = 0; i < arr.length - 1; i++) {
        console.log("arr[i]: " + arr[i] + " arr[i+1]: " + arr[i + 1]);
        if (i < peakIndex) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                return false;
            }
        }
    }
    return true;
};

let arr = [2, 1];
console.log(validMountainArray(arr));


arr = [3, 5, 5]
console.log(validMountainArray(arr));


arr = [0, 3, 2, 1]
console.log(validMountainArray(arr));
