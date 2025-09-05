/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // Return 0 if the array is too short to trap water
    if (height.length < 3) {
        return 0;
    }

    let totalWater = 0;
    let left = 0;
    let right = height.length - 1;

    // Keep track of the highest bar seen from each side
    let leftMax = 0;
    let rightMax = 0;

    // Process the array from both ends until the pointers meet
    while (left < right) {
        // We evaluate based on the shorter of the two bars at the pointers
        if (height[left] < height[right]) {
            // The left side is the bottleneck.
            // Is the current bar shorter than the max height we've seen on the left?
            if (height[left] >= leftMax) {
                // No, this bar is a new high wall. It can't hold water.
                // Update the maximum height seen from the left.
                leftMax = height[left];
            } else {
                // Yes, the current bar is shorter than the left wall.
                // Water can be trapped here. The amount is the difference.
                totalWater += leftMax - height[left];
            }
            // Move the left pointer inwards
            left++;
        } else {
            // The right side is the bottleneck (or they are equal).
            // Is the current bar shorter than the max height we've seen on the right?
            if (height[right] >= rightMax) {
                // No, this bar is a new high wall.
                // Update the maximum height seen from the right.
                rightMax = height[right];
            } else {
                // Yes, water can be trapped. The right wall determines the water level.
                totalWater += rightMax - height[right];
            }
            // Move the right pointer inwards
            right--;
        }
    }

    return totalWater;
};