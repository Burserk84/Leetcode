/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root The root node of the binary tree.
 * @return {number[]} An array containing the node values in inorder sequence.
 */
var inorderTraversal = function(root) {
    // This array will store the final sequence of node values.
    const ans = [];

    // We define a helper function to perform the traversal recursively.
    // This is a common pattern in tree problems.
    function traverse(node) {
        // Base case: If the current node is null, it means we've reached
        // the end of a branch, so we just return and do nothing.
        if (node === null) {
            return;
        }

        // 1. Go to the LEFT child first.
        // The function will keep calling itself on the left children
        // until it finds a node with no left child.
        traverse(node.left);

        // 2. Visit the ROOT (current) node.
        // After visiting all the left children, we process the current node
        // by pushing its value into our result array.
        ans.push(node.val);

        // 3. Go to the RIGHT child.
        // After processing the node itself, we then move on to traverse
        // the entire right subtree.
        traverse(node.right);
    }

    // Start the traversal process from the root of the tree.
    traverse(root);

    // Return the populated array.
    return ans;
};