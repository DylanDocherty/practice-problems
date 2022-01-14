/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
 * Solved
 */

class TreenNode {
    constructor(value, left, right) {
        this.val = value;
        this.left = left;
        this.right = right;
    }
}



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    let stack = [];
    let node = root;
    let tempNodeSum = "";
    let nodeSum = 0;
    stack.push(node);
    while (node) {
        if (node.left != undefined && node.left.val > -1) {
            stack.push(node.left);
            node = node.left;
        } else if (node.right != undefined && node.right.val > -1) {
            stack.push(node.right);
            node = node.right;
        } else {
            if (!(node.left != undefined || node.right != undefined)) {
                stack.forEach((node) => {
                    tempNodeSum += node.val;
                });
                nodeSum += parseInt(tempNodeSum, 2);
                tempNodeSum = "";
            }
            stack.pop();
            node.val = -1;
            node = stack[stack.length - 1];
        }
    }
    return nodeSum;
};

let rootNode = new TreenNode(1);
rootNode.left = new TreenNode(0);
rootNode.right = new TreenNode(1);
rootNode.left.left = new TreenNode(0);
rootNode.left.right = new TreenNode(1);
rootNode.right.left = new TreenNode(0);
rootNode.right.right = new TreenNode(1);

console.log(sumRootToLeaf(rootNode)); 