/**
 * راه حل بهینه با استفاده از پنجره لغزان (Sliding Window)
 * @param {string} s رشته اصلی
 * @param {string[]} words آرایه کلمات
 * @return {number[]} آرایه‌ای از ایندکس‌های شروع
 */
var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) {
        return [];
    }

    const wordLength = words[0].length;
    const numWords = words.length;
    const totalLength = wordLength * numWords;
    const result = [];

    if (s.length < totalLength) {
        return [];
    }

    // 1. دیکشنری اصلی کلمات و تعداد تکرارشان را بساز
    const wordsMap = new Map();
    for (const word of words) {
        wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
    }

    // 2. یک حلقه اصلی برای پوشش دادن تمام حالت‌های شروع ممکن
    // (فقط به تعداد طول یک کلمه، چون بقیه حالت‌ها تکراری هستند)
    for (let i = 0; i < wordLength; i++) {
        let left = i; // اشاره‌گر سمت چپ پنجره
        let wordsFound = 0; // تعداد کلمات معتبر پیدا شده در پنجره
        const windowMap = new Map(); // دیکشنری برای کلمات داخل پنجره فعلی

        // 3. پنجره را روی رشته حرکت بده (هر بار به اندازه یک کلمه)
        for (let right = i; right <= s.length - wordLength; right += wordLength) {
            const word = s.substring(right, right + wordLength);

            // اگر کلمه استخراج شده، جزو کلمات مورد نظر ما بود
            if (wordsMap.has(word)) {
                windowMap.set(word, (windowMap.get(word) || 0) + 1);
                wordsFound++;

                // اگر از یک کلمه بیش از حد مجاز در پنجره داشتیم، پنجره را از چپ کوچک کن
                while (windowMap.get(word) > wordsMap.get(word)) {
                    const leftWord = s.substring(left, left + wordLength);
                    windowMap.set(leftWord, windowMap.get(leftWord) - 1);
                    wordsFound--;
                    left += wordLength;
                }

                // اگر تعداد کلمات در پنجره دقیقاً برابر با تعداد مورد نیاز بود، یک جواب پیدا شده
                if (wordsFound === numWords) {
                    result.push(left);
                    // برای پیدا کردن جواب‌های بعدی، پنجره را یک واحد از چپ حرکت بده
                    const leftWord = s.substring(left, left + wordLength);
                    windowMap.set(leftWord, windowMap.get(leftWord) - 1);
                    wordsFound--;
                    left += wordLength;
                }
            } else {
                // اگر کلمه در لیست ما نبود، پنجره نامعتبر است. آن را ریست کن
                windowMap.clear();
                wordsFound = 0;
                left = right + wordLength;
            }
        }
    }

    return result;
};