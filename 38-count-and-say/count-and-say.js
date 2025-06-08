/**
 * @param {number} n
 * @return {string}
 */
const countAndSayCache = ["1"];

var countAndSay = function(n) {
    // If the value is already in our cache, return it instantly.
    // n is 1-indexed, so we check for cache[n-1].
    if (countAndSayCache[n - 1]) {
        return countAndSayCache[n - 1];
    }

    // Get the last sequence we computed to avoid starting from scratch.
    let currentSequence = countAndSayCache[countAndSayCache.length - 1];

    // Compute new terms only from where we left off.
    for (let i = countAndSayCache.length; i < n; i++) {
        let nextSequence = "";
        let j = 0;
        
        while (j < currentSequence.length) {
            const charToMatch = currentSequence[j];
            let count = 1;
            
            // Count consecutive identical characters
            while (j + 1 < currentSequence.length && currentSequence[j + 1] === charToMatch) {
                j++;
                count++;
            }
            
            // Append the count and the character. Modern JS engines are highly
            // optimized for string concatenation.
            nextSequence += count + charToMatch;
            j++;
        }
        
        // Update the current sequence and save it to the cache.
        currentSequence = nextSequence;
        countAndSayCache.push(currentSequence);
    }

    return currentSequence;
};