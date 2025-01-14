#include <string>
#include <sstream>
using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        // Trim trailing spaces
        int n = s.length();
        int length = 0;

        // Start from the end of the string and count non-space characters
        for (int i = n - 1; i >= 0; --i) {
            if (s[i] == ' ') {
                if (length > 0) {
                    break; // Stop counting when we hit the first space after counting the last word
                }
            } else {
                length++; // Count the length of the last word
            }
        }
        
        return length;
    }
};