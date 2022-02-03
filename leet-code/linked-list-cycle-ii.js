/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/linked-list-cycle-ii/
 * 
 */

class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slowNode = fastNode = head;
    let cycle = false;
    let slowIndex = 1;
    let fastIndex = 1;
    while (fastNode && fastNode.next && !cycle) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        slowIndex += 1;
        fastIndex += 2;
        if (slowNode.val === fastNode.val) {
            cycle = true;
        }

    }
    if (!cycle) {
        return null;
    }
    let node = slowNode.next;
    let lenghtOfLoop = 1;
    while (node.val != fastNode.val) {
        lenghtOfLoop += 1;
        node = node.next;
    }

    let nodeCycleReturnIndex = slowIndex - (slowIndex % lenghtOfLoop);
    console.log(nodeCycleReturnIndex);
    node = head;
    for (let i = 0; i < nodeCycleReturnIndex; i++) {
        node = node.next;
    }
    return node;
};

let headNode = new ListNode(3);
headNode.next = new ListNode(2);
headNode.next.next = new ListNode(0);
headNode.next.next.next = new ListNode(-4);
headNode.next.next.next.next = headNode.next;
console.log(detectCycle(headNode));


headNode = new ListNode(1);
headNode.next = new ListNode(2);
headNode.next.next = headNode;
console.log(detectCycle(headNode));