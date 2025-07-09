/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * راه حل بهینه با استفاده از خود آرایه
 * Time: O(n), Space: O(1)
 */
const firstMissingPositive = (nums) => {
    const n = nums.length;

    // 1. پاکسازی آرایه از اعداد نامرتبط
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }

    // 2. علامت‌گذاری اعداد دیده شده با منفی کردن مقدار ایندکس متناظر
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num > n) {
            continue;
        }
        const index = num - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    // 3. پیدا کردن اولین ایندکس با مقدار مثبت
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    // 4. اگر همه اعداد 1 تا n موجود بودند
    return n + 1;
};