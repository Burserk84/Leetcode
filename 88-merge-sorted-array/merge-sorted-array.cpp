#include <vector>
#include <iostream>

class Solution {
public:
    void merge(std::vector<int>& nums1, int m, std::vector<int>& nums2, int n) {
        int i = m - 1; // Pointer for the last element in the valid part of nums1
        int j = n - 1; // Pointer for the last element in nums2
        int k = m + n - 1; // Pointer for the last position in nums1

        // While there are elements to compare in nums2
        while (j >= 0) {
            // If nums1 is exhausted or nums2's current element is greater
            if (i < 0 || nums2[j] >= nums1[i]) {
                nums1[k] = nums2[j];
                j--;
            } else {
                nums1[k] = nums1[i];
                i--;
            }
            k--;
        }
    }
};
