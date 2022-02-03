/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length < 2) {
        return 1;
    }
    let numOfPoints = points.length; // worst case the minimum is the number of points
    let weightedOverLap = overLapingPointsWeightMap(points); // min value is 2, which represents a single overlap.
    let pointSetRanking = new Map(); // Number of sets a given set can partner up with 
    //sort by most partners
    // start with least.  
    // remove least partnered until none left

    let tempVar;
    let tempArray = [];
    let tempMap = new Map();
    let tempObject = {};
    let pointSetString = "";
    points.forEach((pointSet) => {
        tempMap = new Map();
        tempObject = {};
        pointSetString = JSON.stringify(pointSet);
        weightedOverLap.forEach((mapPointSet, point) => {
            if (mapPointSet.includes(pointSetString)) {
                if (pointSetRanking.has(pointSetString)) {
                    tempObject = pointSetRanking.get(pointSetString);
                    tempMap = tempObject.partnerAndPointLists;
                    tempArray = [...mapPointSet];
                    tempArray.splice(tempArray.indexOf(pointSetString), 1);
                    tempArray.forEach((element) => {
                        if (tempMap.has(element)) {
                            tempVar = tempMap.get(element)
                            tempVar.push(point)
                            tempMap.set(element, tempVar);
                        } else {
                            tempMap.set(element, [point]);
                        }
                    });
                    tempObject.partnerAndPointLists = tempMap;
                    tempObject.totalPartners = tempMap.size;
                    pointSetRanking.set(pointSetString, tempObject);
                } else {
                    tempArray = [...mapPointSet];
                    tempArray.splice(tempArray.indexOf(pointSetString), 1);
                    tempArray.forEach((element) => {
                        if (tempMap.has(element)) {
                            tempVar = tempMap.get(element)
                            tempVar.push(point)
                            tempMap.set(element, tempVar);
                        } else {
                            tempMap.set(element, [point]);
                        }
                    });
                    tempObject = {
                        partnerAndPointLists: tempMap,
                        totalPartners: tempMap.size
                    }
                    pointSetRanking.set(pointSetString, tempObject);
                }
            }
        });
    });

    // pointSetRanking contains a key that represents the pointSet.  
    // Then a object with a parameter partnerAndPointLists that holds a map of keys partnered point Sets
    // and values overlapping partnered points (any points those point sets have overlapping)
    // another parameter that hold the amount of partners they have
    // Now we need to start with the least partnered point set and remove both it and the part
    // that has the next least point set partners from a tempARray 
    let pointSetRankArray = Array.from(pointSetRanking);
    pointSetRankArray.sort((elementA, elementB) => {
        return elementA[1].totalPartners - elementB[1].totalPartners;
    });

    // now that the array is sorted least to greatest we can 
    //start removing the lowest amount of partnered point sets
    let hitPoints = [];
    let arrowCount = 0;
    let pointSet;
    let pointObject;
    let lowestPartner = 0;
    pointSetRankArray.forEach((pointSetObject) => {
        pointSet = pointSetObject[0];
        pointObject = pointSetObject[1];

        //find lowest partnered pair use that.
        pointObject.partnerAndPointLists.forEach((value, key) => {
            if (lowestPartner === 0) {
                lowestPartner = key;
            } else if (pointSetRanking.get(key).totalPartners < pointSetRanking.get(key).totalPartners && !hitPoints.includes(key)) {
                lowestPartner = key;
            }
        });

        if (!hitPoints.includes(pointSet) && !hitPoints.includes(lowestPartner)) {
            arrowCount += 1;
            hitPoints.push(pointSet);
            hitPoints.push(lowestPartner);
        }
        lowestPartner = 0;
    });

    let missedPoints = 0;
    points.forEach((point) => {
        if (!hitPoints.includes(JSON.stringify(point))) {
            missedPoints += 1;
        }
    });

    return arrowCount + missedPoints;
};

var overLapingPointsWeightMap = (points) => {
    let totalMap = new Map();
    let weightMapOverlap = new Map();
    let tempArray = [];
    for (let i = 0; i < points.length; i++) {
        for (let j = points[i][0]; j <= points[i][1]; j++) {
            if (totalMap.has(j)) {
                tempArray = totalMap.get(j);
                tempArray.push(JSON.stringify(points[i]));
                totalMap.set(j, tempArray);
            } else {
                totalMap.set(j, [JSON.stringify(points[i])]);
            }
        }
    }
    totalMap.forEach((value, key, map) => {
        if (value.length > 1) {
            weightMapOverlap.set(key, value);
        }
    });
    return weightMapOverlap;
}




let example = [[10, 16], [2, 8], [1, 6], [7, 12]]

console.log(findMinArrowShots(example));

example = [[1, 2], [3, 4], [5, 6], [7, 8]];

console.log(findMinArrowShots(example));

example = [[1, 2], [2, 3], [3, 4], [4, 5]];

console.log(findMinArrowShots(example));

example = [[1, 2147483647]];

console.log(findMinArrowShots(example));

example = [[1, 2], [4, 5], [1, 5]];

console.log(findMinArrowShots(example));

example = [[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]];

console.log(findMinArrowShots(example));