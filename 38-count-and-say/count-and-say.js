/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // Base case: The first term is "1"
    if (n === 1) {
        return "1";
    }

    // Start with the first term
    let currentSequence = "1";

    // Loop n-1 times to generate the nth term
    for (let i = 1; i < n; i++) {
        const nextSequenceParts = [];
        let j = 0;

        // Scan the currentSequence to build the next one
        while (j < currentSequence.length) {
            let currentChar = currentSequence[j];
            let count = 1;

            // Count consecutive identical characters
            while (j + 1 < currentSequence.length && currentSequence[j] === currentSequence[j + 1]) {
                j++;
                count++;
            }

            // Append the count and the character to our parts array
            nextSequenceParts.push(count.toString());
            nextSequenceParts.push(currentChar);
            
            j++;
        }

        // Join the parts to form the next sequence for the next iteration
        currentSequence = nextSequenceParts.join('');
    }

    return currentSequence;
};