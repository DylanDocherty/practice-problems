/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    let numOfPoints = points.length; // worst case the minimum is the number of points
    let weightedOverLap = overLapingPointsWeightMap(points); // min value is 2, which represents a single overlap.
    let overLapMaxPoints = new Map(); // Number of sets a given set can partner up with 
    //sort by most partners
    // start with least.  
    // remove least parter most overlap

    for (let i = 0; i < points.length; i++) {
        overLapMaxPoints.set(points[i].toString() + ":" + i, { point: points[i][0], weight: 0 });

        for (let j = points[i][0]; j <= points[i][1]; j++) {

            if (weightedOverLap.has(j) && weightedOverLap.get(j) > overLapMaxPoints.get(points[i].toString() + ":" + i).weight) {


                overLapMaxPoints.set(points[i].toString() + ":" + i, { point: j, weight: weightedOverLap.get(j) });
            }
        }
    }
    return overLapMaxPoints;
};

var overLapingPointsWeightMap = (points) => {
    let totalMap = new Map();
    let weightMapOverlap = new Map();
    for (let i = 0; i < points.length; i++) {
        for (let j = points[i][0]; j <= points[i][1]; j++) {

            if (totalMap.has(j)) {
                totalMap.set(j, totalMap.get(j) + 1);
            } else {
                totalMap.set(j, 1);
            }
        }
    }
    totalMap.forEach((value, key, map) => {
        if (value > 1) {
            weightMapOverlap.set(key, value);
        }
    });
    return weightMapOverlap;
}
let example = [[10, 16], [2, 8], [1, 6], [7, 12]]
console.log(findMinArrowShots(example));

example = [[1, 2], [3, 4], [5, 6], [7, 8]];

console.log(findMinArrowShots(example));