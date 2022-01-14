/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/car-pooling/
 * Solved
 */

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    capacityList = [];
    trips.forEach((trip) => {
        console.log(trip);

        for (let i = trip[1]; i < trip[2]; i++) {
            if (typeof capacityList[i] === "undefined") {
                capacityList[i] = trip[0];
            } else {
                capacityList[i] += trip[0];
            }
        }
    });
    return !capacityList.some((element) => {
        if (typeof element == "number") {
            return element > capacity;
        } else {
            return false;
        }
    });
};

let trips = [[2, 1, 5], [3, 3, 7]], capacity = 4;
console.log(carPooling(trips, capacity));
trips = [[2, 1, 5], [3, 3, 7]], capacity = 5;
console.log(carPooling(trips, capacity));