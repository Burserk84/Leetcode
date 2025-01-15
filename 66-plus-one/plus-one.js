function plusOne(digits) {
    const n = digits.length;

    // Start from the last digit and work backwards
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // Increment the current digit
            return digits; // Return the result if no carry is needed
        }
        digits[i] = 0; // Set current digit to 0 if it was 9
    }

    // If we exit the loop, it means we had a carry out of the most significant digit
    digits.unshift(1); // Insert 1 at the beginning
    return digits;
}