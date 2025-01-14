/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    // Trim the string to remove trailing spaces
    s = s.trim();
    
    // Split the string into words
    const words = s.split(' ');
    
    // Return the length of the last word
    return words[words.length - 1].length;
}