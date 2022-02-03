/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/gas-station/
 * 
 */


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let maxGas = 0;
    gas.forEach((gasTank, index) => {
        totalGas += gasTank;
        if (gas[maxGas] < gasTank) {
            maxGas = index;
        }
    });
    cost.forEach((reduction) => {
        totalCost += reduction;
    });
    if (totalGas < totalCost) {// Needs to be full circuit
        return -1;
    } else {
        return maxGas;
    }
};

let gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));

gas = [2, 3, 4], cost = [3, 4, 3];
console.log(canCompleteCircuit(gas, cost));