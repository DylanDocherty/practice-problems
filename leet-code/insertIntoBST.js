/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * Solved
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    let inserted = false;
    let node = root;
    if (node === null) {
        return new TreeNode(val);
    }
    while (!inserted) {
        if (node.val < val && node.right != null) {
            node = node.right;
        } else if (node.val > val && node.left != null) {
            node = node.left;
        } else {
            if (node.val < val) {
                node.right = new TreeNode(val);
            } else {
                node.left = new TreeNode(val);
            }
            inserted = true;
        }
    }
    return root;
};

let example1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7)); // 5

console.log(insertIntoBST(example1, 5));
console.log(insertIntoBST(null, 5));