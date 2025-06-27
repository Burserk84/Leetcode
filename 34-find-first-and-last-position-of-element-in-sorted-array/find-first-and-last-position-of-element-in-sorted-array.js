/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Helper function to find the first occurrence of the target
    const findFirst = (arr, tgt) => {
        let left = 0;
        let right = arr.length - 1;
        let firstPosition = -1;

        while (left <= right) {
            // Prevent overflow for very large arrays
            let mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === tgt) {
                // We found a match, but it might not be the first one.
                // Store this position and keep searching on the left side.
                firstPosition = mid;
                right = mid - 1;
            } else if (arr[mid] < tgt) {
                // The target is in the right half
                left = mid + 1;
            } else {
                // The target is in the left half
                right = mid - 1;
            }
        }
        return firstPosition;
    };

    // Helper function to find the last occurrence of the target
    const findLast = (arr, tgt) => {
        let left = 0;
        let right = arr.length - 1;
        let lastPosition = -1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === tgt) {
                // We found a match, but it might not be the last one.
                // Store this position and keep searching on the right side.
                lastPosition = mid;
                left = mid + 1;
            } else if (arr[mid] < tgt) {
                // The target is in the right half
                left = mid + 1;
            } else {
                // The target is in the left half
                right = mid - 1;
            }
        }
        return lastPosition;
    };

    const first = findFirst(nums, target);

    // If the first occurrence isn't found, the element doesn't exist in the array.
    if (first === -1) {
        return [-1, -1];
    }

    const last = findLast(nums, target);

    return [first, last];
};