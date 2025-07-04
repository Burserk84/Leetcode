/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
    let maxLength = 0;
    const stack = [-1]; // Start with -1 to handle edge cases like "()"

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else { // s[i] === ')'
            stack.pop();
            if (stack.length === 0) {
                // This ')' is not matched, push its index as the new base
                stack.push(i);
            } else {
                // A valid pair is found
                // The length is current index minus the index of the last unmatched '('
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
};