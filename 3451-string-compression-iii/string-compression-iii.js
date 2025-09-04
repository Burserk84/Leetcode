/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    // This string will hold our final compressed result.
    let compressed = "";
    
    // Use 'i' as a pointer to our current position in the original word.
    let i = 0;

    // Loop as long as our pointer is inside the word's bounds.
    while (i < word.length) {
        const currentChar = word[i];
        let count = 0;
        
        // Use 'j' as a look-ahead pointer to count repetitions.
        let j = i;
        
        // This inner loop counts how many times 'currentChar' repeats.
        // It stops if the character changes OR the count hits 9.
        while (j < word.length && word[j] === currentChar && count < 9) {
            count++;
            j++;
        }
        
        // Append the count and the character to our result.
        // e.g., if we counted 3 'a's, this appends "3a".
        compressed += count + currentChar;
        
        // IMPORTANT: Move our main pointer 'i' to where the look-ahead 'j' left off.
        // This is how we avoid re-counting characters.
        i = j;
    }
    
    return compressed;
};