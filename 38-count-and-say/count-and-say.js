/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    let currentSequence = "1";

    // n-1 بار تکرار برای رسیدن به جمله n-اُم
    for (let i = 1; i < n; i++) {
        const nextSequenceParts = [];
        let j = 0;
        
        while (j < currentSequence.length) {
            let count = 1;
            while (j + 1 < currentSequence.length && currentSequence[j] === currentSequence[j + 1]) {
                j++;
                count++;
            }
            nextSequenceParts.push(String(count), currentSequence[j]);
            j++;
        }
        currentSequence = nextSequenceParts.join('');
    }

    return currentSequence;
};