/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/can-place-flowers/
 * Solved
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let posList = new Set();
    let totalFlowerPotential = 0;
    flowerbed.forEach((bed, index) => {
        if (bed) {
            if (index > 0) {
                posList.add(index - 1);
            }
            posList.add(index);
            if (index < flowerbed.length) {
                posList.add(index + 1);
            }
        }
    });

    flowerbed.forEach((bed, index) => {
        if (!posList.has(index)) {
            totalFlowerPotential += 1;
            if (index > 0) {
                posList.add(index - 1);
            }
            posList.add(index);
            if (index < flowerbed.length) {
                posList.add(index + 1);
            }
        }
    });
    return totalFlowerPotential >= n;
};

let flowerbed = [1, 0, 0, 0, 1], n = 1;
console.log(canPlaceFlowers(flowerbed, n));

flowerbed = [1, 0, 0, 0, 1], n = 2;
console.log(canPlaceFlowers(flowerbed, n));

flowerbed = [1, 0, 0, 0, 0, 1], n = 2;
console.log(canPlaceFlowers(flowerbed, n));
