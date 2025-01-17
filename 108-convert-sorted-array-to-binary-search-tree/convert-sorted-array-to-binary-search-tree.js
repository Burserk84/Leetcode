/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return buildBST(nums, 0, nums.length - 1);
};

function buildBST(nums, left, right) {
    if (left > right) {
        return null; // Base case: no elements to form a tree
    }

    const mid = Math.floor((left + right) / 2); // Find the middle index
    const root = new TreeNode(nums[mid]); // Create a new node with the middle element

    // Recursively build the left and right subtrees
    root.left = buildBST(nums, left, mid - 1);
    root.right = buildBST(nums, mid + 1, right);

    return root; // Return the root of the subtree
}

// Helper function to print the tree in level order
function printLevelOrder(root) {
    if (!root) return;
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            process.stdout.write(node.val + " ");
            queue.push(node.left);
            queue.push(node.right);
        } else {
            process.stdout.write("null ");
        }
    }
    console.log();
}