/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the last position in nums1

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