/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/merge-two-sorted-lists/
 * Solved
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let length1 = 0;
    let length2 = 0;
    let node = list1;
    while (node) {
        length1 += 1;
        node = node.next;
    }
    node = list2;
    while (node) {
        length2 += 1;
        node = node.next;
    }
    let node2;
    if (length1 > length2) {
        node = list1;
        node2 = list2;
    } else {
        node = list2;
        node2 = list1;
    }
    let newListRoot;
    let newListNode;
    while (node || node2) {
        if (node && node2) {
            if (node.val > node2.val) {
                if (!newListRoot) {
                    newListRoot = new ListNode(node2.val);
                } else if (!newListNode) {
                    newListNode = new ListNode(node2.val);
                    newListRoot.next = newListNode;
                } else {
                    newListNode.next = new ListNode(node2.val)
                    newListNode = newListNode.next;
                }
                node2 = node2.next;
            } else {
                if (!newListRoot) {
                    newListRoot = new ListNode(node.val);
                } else if (!newListNode) {
                    newListNode = new ListNode(node.val);
                    newListRoot.next = newListNode;
                } else {
                    newListNode.next = new ListNode(node.val)
                    newListNode = newListNode.next;
                }
                node = node.next;
            }
        } else {
            if (node) {
                if (!newListRoot) {
                    newListRoot = new ListNode(node.val);
                } else if (!newListNode) {
                    newListNode = new ListNode(node.val);
                    newListRoot.next = newListNode;
                } else {
                    newListNode.next = new ListNode(node.val)
                    newListNode = newListNode.next;
                }
                node = node.next;
            } else if (node2) {
                if (!newListRoot) {
                    newListRoot = new ListNode(node2.val);
                } else if (!newListNode) {
                    newListNode = new ListNode(node2.val);
                    newListRoot.next = newListNode;
                } else {
                    newListNode.next = new ListNode(node2.val)
                    newListNode = newListNode.next;
                }
                node2 = node2.next;
            }
        }
    }
    return newListRoot || null;
};

let printList = (rootNode) => {
    while (rootNode) {
        console.log(rootNode.val);
        rootNode = rootNode.next;
    }
}


let rootNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let rootNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));

printList(mergeTwoLists(rootNode1, rootNode2));

rootNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));
rootNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));