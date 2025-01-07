/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let i = 0;  // Left pointer of the window
    let j = 0;  // Right pointer of the window
    let maxLength = 0;  // To track the length of the longest substring
    let uniqueChars = new Set();  // To store unique characters in the current window
    
    while (j < s.length) {
        if (!uniqueChars.has(s[j])) {
            uniqueChars.add(s[j]);
            j++;  
            maxLength = Math.max(maxLength, j - i); 
        } else {
            uniqueChars.delete(s[i]);
            i++;  
        }
    }
    
    return maxLength;
};