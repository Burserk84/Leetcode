#include <iostream>
#include <string>
#include <algorithm>

class Solution {
public:
    std::string addBinary(std::string a, std::string b) {
        std::string result;
        int carry = 0;
        int i = a.size() - 1;
        int j = b.size() - 1;

        while (i >= 0 || j >= 0 || carry) {
            int sum = carry;
            if (i >= 0) {
                sum += a[i--] - '0'; // Convert char to int
            }
            if (j >= 0) {
                sum += b[j--] - '0'; // Convert char to int
            }
            result.push_back((sum % 2) + '0'); // Append the binary result
            carry = sum / 2; // Calculate carry
        }

        std::reverse(result.begin(), result.end()); // Reverse the result
        return result;
    }
};