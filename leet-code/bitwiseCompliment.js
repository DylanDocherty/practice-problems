/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/complement-of-base-10-integer/    
 */


String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length, this.length)
}

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let bitNum = n.toString(2);
    for (i = 0; i < bitNum.length; i++) {
        if (bitNum[i] == "1") {
            bitNum = bitNum.replaceAt(i, "0");

        } else {
            bitNum = bitNum.replaceAt(i, "1");
        }
    }
    console.log(parseInt(bitNum, 2));
    return parseInt(bitNum, 2);
};

bitwiseComplement(5);
bitwiseComplement(500);
bitwiseComplement(999999);
