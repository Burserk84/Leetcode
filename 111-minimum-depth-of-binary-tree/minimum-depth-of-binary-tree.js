/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    // Base Case 1: If the tree is empty, the depth is 0.
    if (!root) {
        return 0;
    }

    // Base Case 2: If the node is a leaf (no children), its depth is 1.
    if (!root.left && !root.right) {
        return 1;
    }

    // Recursively find the depth of the left and right subtrees.
    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);

    // This is the key logic!
    // If a node has only ONE child, we must take the path of the existing child.
    // We cannot use the null path. A "0" from a recursive call means that path is invalid.
    if (root.left === null) {
        return 1 + rightDepth;
    }
    if (root.right === null) {
        return 1 + leftDepth;
    }

    // If both children exist, we can safely take the minimum of the two paths.
    return 1 + Math.min(leftDepth, rightDepth);
};