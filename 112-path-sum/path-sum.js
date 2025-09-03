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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // If the root is null, no path exists.
    if (!root) {
        return false;
    }

    // Subtract the current node's value from the sum.
    targetSum -= root.val;

    // Check if the current node is a leaf.
    if (!root.left && !root.right) {
        // If it is a leaf, the path is valid only if the sum is now zero.
        return targetSum === 0;
    }
    
    // If not a leaf, recursively check the left and right subtrees.
    // Return true if a path is found in EITHER subtree.
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};