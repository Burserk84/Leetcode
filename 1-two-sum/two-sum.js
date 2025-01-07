/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a hash map to store the indices of numbers
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Store the current number with its index in the map
        map.set(nums[i], i);
    }

    // If no solution exists (should not happen based on constraints)
    throw new Error("No solution exists");
};