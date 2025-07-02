/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// تابع کمکی برای بررسی اعتبار (دقیقا مشابه نسخه قبل)
function isValid(board, row, col, charNum) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === charNum || board[i][col] === charNum) {
            return false;
        }
        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const boxCol = 3 * Math.floor(col / 3) + i % 3;
        if (board[boxRow][boxCol] === charNum) {
            return false;
        }
    }
    return true;
}

// تابع اصلی و بهینه که با اولین جواب متوقف می‌شود
function solveSudoku(board) {
    
    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const charNum = String(num);
                        if (isValid(board, row, col, charNum)) {
                            board[row][col] = charNum; // انتخاب

                            // اگر ادامه مسیر به جواب رسید، true برگردان
                            if (solve()) {
                                return true;
                            } else {
                                // در غیر این صورت، عقب‌گرد کن
                                board[row][col] = '.';
                            }
                        }
                    }
                    // اگر هیچ عددی برای این خانه کار نکرد، false برگردان
                    return false;
                }
            }
        }
        // اگر تمام خانه‌ها پر بود، یعنی به جواب رسیدیم
        return true;
    }
    
    solve(); // شروع فرآیند
    return board; // برگرداندن جدول حل‌شده
}

/*
// نحوه استفاده:
const myBoard = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

const solvedBoard = solveSudoku(myBoard);
console.log(solvedBoard);
*/