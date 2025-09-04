/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Avoid potential overflow with (left + right) / 2
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid; // Target found
        }

        // Case 1: The left half of the array (from left to mid) is sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target is within the bounds of the sorted left half
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        } 
        // Case 2: The right half of the array (from mid to right) must be sorted
        else {
            // Check if the target is within the bounds of the sorted right half
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
    }

    return -1; // Target not found
};