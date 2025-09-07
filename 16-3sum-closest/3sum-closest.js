/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Sort the array to use the two-pointer technique
    nums.sort((a, b) => a - b);
    
    // Initialize closestSum with the sum of the first three elements as a baseline
    let closestSum = nums[0] + nums[1] + nums[2];
    
    // Iterate through the array, fixing the first element of the triplet
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        // Use two pointers to find the other two elements
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // If the current sum is closer to the target, update closestSum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers based on the comparison with the target
            if (currentSum < target) {
                left++; // We need a larger sum
            } else if (currentSum > target) {
                right--; // We need a smaller sum
            } else {
                // If the sum is exactly the target, it's the closest possible.
                return target;
            }
        }
    }
    
    return closestSum;
};