/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
      // --- Base Cases (Stopping Conditions) ---

    // 1. If both nodes are null, they are identical at this position.
    // This is the successful end of a branch.
    if (p === null && q === null) {
        return true;
    }

    // 2. If one node is null but the other isn't, or if their values differ,
    // then the trees are not the same. This is a failure condition.
    if (p === null || q === null || p.val !== q.val) {
        return false;
    }

    // --- Recursive Step ---

    // If we've reached this point, it means the current nodes (p and q) are
    // not null AND their values are equal.
    // Now, we must check if their children are also the same.

    // We recursively call isSameTree on both the left children and the right children.
    // Both of these calls must return `true` for the entire tree to be the same.
    // The `&&` (AND) operator ensures this.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};