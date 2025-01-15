#include <iostream>
#include <vector>

class Solution {
public:
    std::vector<int> plusOne(std::vector<int>& digits) {
        int n = digits.size();
        
        // Start from the last digit and work backwards
        for (int i = n - 1; i >= 0; --i) {
            if (digits[i] < 9) {
                digits[i]++; // Increment the current digit
                return digits; // Return the result if no carry is needed
            }
            digits[i] = 0; // Set current digit to 0 if it was 9
        }
        
        // If we exit the loop, it means we had a carry out of the most significant digit
        digits.insert(digits.begin(), 1); // Insert 1 at the beginning
        return digits;
    }
};