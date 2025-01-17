/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    public:
    TreeNode* sortedArrayToBST(std::vector<int>& nums) {
        return buildBST(nums, 0, nums.size() - 1);
    }

private:
    TreeNode* buildBST(const std::vector<int>& nums, int left, int right) {
        if (left > right) {
            return nullptr; // Base case: no elements to form a tree
        }

        int mid = left + (right - left) / 2; // Find the middle index
        TreeNode* root = new TreeNode(nums[mid]); // Create a new node with the middle element

        // Recursively build the left and right subtrees
        root->left = buildBST(nums, left, mid - 1);
        root->right = buildBST(nums, mid + 1, right);

        return root; // Return the root of the subtree
    }
};