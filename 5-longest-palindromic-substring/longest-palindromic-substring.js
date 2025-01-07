/**
 * @param {string} s
 * @return {string}
 */
 
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) return s;

    let start = 0, end = 0;

    // Helper function to expand around the center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of the palindrome
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome (centered at i)
        let len1 = expandAroundCenter(i, i);
        // Even-length palindrome (centered between i and i+1)
        let len2 = expandAroundCenter(i, i + 1);

        // Find the maximum length palindrome centered at `i`
        let maxLen = Math.max(len1, len2);

        // Update start and end indices if the current palindrome is longer
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
};