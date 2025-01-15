/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) {
            sum += Number(a[i--]); // Convert char to int
        }
        if (j >= 0) {
            sum += Number(b[j--]); // Convert char to int
        }
        result = (sum % 2) + result; // Prepend the binary result
        carry = Math.floor(sum / 2); // Calculate carry
    }

    return result;
}