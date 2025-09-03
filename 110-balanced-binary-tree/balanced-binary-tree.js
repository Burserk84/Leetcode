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
 * @return {boolean}
 */
var isBalanced = function(root) {

    // A helper function to get the height and check balance simultaneously.
    // It returns the height of the node if its subtree is balanced.
    // It returns -1 if its subtree is NOT balanced.
    const checkHeight = (node) => {
        // Base case: A null node is balanced and has a height of 0.
        if (!node) {
            return 0;
        }

        // Recursively check the height of the left subtree.
        const leftHeight = checkHeight(node.left);
        // If the left subtree is unbalanced, propagate the imbalance signal up.
        if (leftHeight === -1) {
            return -1;
        }

        // Recursively check the height of the right subtree.
        const rightHeight = checkHeight(node.right);
        // If the right subtree is unbalanced, propagate the signal.
        if (rightHeight === -1) {
            return -1;
        }

        // Check if the CURRENT node is unbalanced.
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // Signal imbalance.
        }

        // If we get here, the current node is balanced.
        // Return its height for the parent node's calculation.
        return 1 + Math.max(leftHeight, rightHeight);
    };

    // The tree is balanced if the final result is not -1.
    return checkHeight(root) !== -1;
};