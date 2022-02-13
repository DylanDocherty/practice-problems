/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/roman-to-integer/
 * Solved
 */

const { type } = require("mocha/lib/utils");
module.exports = {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt: function (s) {
        if (typeof s != "string") {
            return -1;
        }
        let holdValue = 0;
        let valueMap = new Map();
        //specials
        valueMap.set('I', {
            base: 1,
            'V': 4,
            'X': 9
        });
        valueMap.set('X', {
            base: 10,
            'L': 40,
            'C': 90
        });
        valueMap.set('C', {
            base: 100,
            'D': 400,
            'M': 900
        });
        // non-specials
        valueMap.set('V', {
            base: 5
        });
        valueMap.set('L', {
            base: 50
        });
        valueMap.set('D', {
            base: 500
        });
        valueMap.set('M', {
            base: 1000
        });

        // I             1
        // V             5
        // X             10
        // L             50
        // C             100
        // D             500
        // M             1000


        let valueObject;
        for (let i = 0; i < s.length; i++) {
            valueObject = valueMap.get(s.slice(i, i + 1));
            if (Object.keys(valueObject).includes(s.slice(i + 1, i + 2))) {
                holdValue += valueObject[s.slice(i + 1, i + 2)];
                i++;
            } else {
                holdValue += valueObject.base;
            }

        }
        return holdValue
    }
}


