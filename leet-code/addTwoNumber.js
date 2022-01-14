/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/add-two-numbers/
 * Solved
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) { // l1 = [2,4,3], l2 = [5,6,4]
    let numberOne = [];
    let numberTwo = [];
    let node = l1;
    while (node != null) {
        numberOne.push(node.val);
        node = node.next;
    }

    node = l2;
    while (node != null) {
        numberTwo.push(node.val);
        node = node.next;
    }
    let sum = reverseArrayToNum(numberOne) + reverseArrayToNum(numberTwo);
    return numToReverseLinkedList(sum);
};

var reverseArrayToNum = function (reverseArray) {
    let numString = "";
    while (reverseArray.length > 0) {
        numString = numString.concat("" + reverseArray.pop());
    }
    return BigInt(numString);
}

var numToReverseLinkedList = function (number) {
    let stringNum = "" + number;
    let headNode
    let node;
    var value = 0;
    for (i = 0; i < stringNum.length; i++) {
        value = parseInt(stringNum[stringNum.length - 1 - i]);
        if (i === 0) {
            node = new linkedListNode(value);
            headNode = node;
        } else {
            node.next = new linkedListNode(value);
            node = node.next;
        }
    }
    return headNode;
}

class linkedListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// console.log(reverseArrayToNum([2, 4, 3]));
// console.log(numToReverseLinkedList(564));

console.log(
    addTwoNumbers(
        numToReverseLinkedList(
            reverseArrayToNum([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])),
        numToReverseLinkedList(
            reverseArrayToNum([5, 6, 4]))));

// console.log(reverseArrayToNum([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]));