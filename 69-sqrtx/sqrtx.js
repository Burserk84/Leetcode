/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //
    // Calculates the integer square root of a non-negative integer x, rounded down.
    // This implementation uses binary search.
    //
    // Edge case: sqrt(0) is 0

    if(x == 0)
        return 0;
    // The search space for the square root is from 1 to x.
    let left = 0, right = x, mid = 0, ans = 0;

    while(left <= right){
        // Calculate the middle element to avoid potential overflow.
        mid = (left + (right - left) / 2) | 0;
        // Instead of 'mid * mid > x', we use 'mid > x / mid' to prevent overflow
        // in languages with fixed-size integers. It's a good practice.
        if(mid > x / mid)
            // 'mid' is too large, so we search in the left half.
            right = mid - 1;
        else{
            // 'mid' could be our answer. We store it and
            // search in the right half for a potentially larger answer.
            ans = mid;
            left = mid + 1;
        }
    }
    return ans;

};