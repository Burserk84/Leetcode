/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        // 1. Create a new row of the correct length (i + 1) and fill it with 1s.
        // This automatically handles the first and last '1' of every row.
        const newRow = Array(i + 1).fill(1);

        // 2. Calculate the middle values by overwriting the 1s.
        // This inner loop only runs for the third row (i=2) and onwards.
        for (let j = 1; j < i; j++) {
            const prevRow = triangle[i - 1];
            newRow[j] = prevRow[j - 1] + prevRow[j];
        }

        triangle.push(newRow);
    }

    return triangle;
};