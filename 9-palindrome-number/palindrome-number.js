/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let original = x; // Save the original value for comparison
    let reversed = 0; // To store the reversed number

    // Check if x is within the valid range
    if (x < ((-2) ** 31) || x > ((2 ** 31) - 1)) {
        console.log("x must be between -2^31 and 2^31 - 1");
        return false;
    }

    // Negative numbers cannot be palindromes
    if (x < 0) {
        return false;
    }

    // Reverse the digits of x
    while (x > 0) {
        let lastDigit = x % 10; // Extract the last digit
        reversed = reversed * 10 + lastDigit; // Build the reversed number
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // Check if the reversed number matches the original
    return original === reversed;
};