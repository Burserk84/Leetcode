/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;
    if (n <= 1) {
        return;
    }

    // Helper function to swap two elements in the array
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    };

    // Helper function to reverse a portion of the array
    const reverse = (start) => {
        let end = n - 1;
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    };

    // Step 1: Find the pivot
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // If a pivot is found (i.e., the array is not in descending order)
    if (i >= 0) {
        // Step 2: Find the element to swap with the pivot
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Step 3: Swap them
        swap(i, j);
    }

    // Step 4: Reverse the suffix (or the whole array if no pivot was found)
    reverse(i + 1);
};