/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Create arrays to hold sets for each row, column, and 3x3 box.
    const rows = Array(9).fill(null).map(() => new Set());
    const cols = Array(9).fill(null).map(() => new Set());
    const boxes = Array(9).fill(null).map(() => new Set());

    // Iterate through every cell on the board.
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c];

            // If the cell is empty, skip it.
            if (value === '.') {
                continue;
            }

            // --- Check for duplicates ---

            // 1. Check the current row
            if (rows[r].has(value)) {
                return false;
            }

            // 2. Check the current column
            if (cols[c].has(value)) {
                return false;
            }

            // 3. Check the current 3x3 box
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (boxes[boxIndex].has(value)) {
                return false;
            }

            // --- If no duplicates, add the value to the sets ---
            rows[r].add(value);
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    // If we get through the entire board without returning false, it's valid.
    return true;
};