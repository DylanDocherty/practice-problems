/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/    
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    console.log(head);
    let numValue = 0;
    for (let i = 0; i < head.length; i++) {
        console.log("add this to it: " + head.length - i);
        numValue += head[i] * Math.pow(2, head.length - i);
        // console.log(head[i]);
    }
    return numValue;
};

console.log(getDecimalValue([1, 0, 1]));
// console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]));