/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let i1 = 1; // مقدار برای n=1
    let i2 = 2; // مقدار برای n=2
    let ans = 0;

    // حلقه از i=3 شروع می‌شود
    for (let i = 3; i <= n; i++) {
        ans = i1 + i2; // ans جدید = مجموع دو مقدار قبلی
        i1 = i2;       // مقدار قدیمی‌تر به‌روز می‌شود
        i2 = ans;      // مقدار جدیدتر به‌روز می‌شود
    }
    return ans;
};