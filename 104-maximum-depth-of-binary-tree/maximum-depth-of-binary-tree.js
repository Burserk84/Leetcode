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
var maxDepth = function(root) {
    // Base case: If the node is null, we've reached the end of a path.
    // The depth of a null node is 0.
    if (!root) {
        return 0;
    }

    // Recursively calculate the depth of the left subtree.
    let leftDepth = maxDepth(root.left);
    
    // Recursively calculate the depth of the right subtree.
    let rightDepth = maxDepth(root.right);
    
    // The depth of the current node is 1 (for itself) plus the
    // depth of its DEEPEST child subtree.
    return 1 + Math.max(leftDepth, rightDepth);
};