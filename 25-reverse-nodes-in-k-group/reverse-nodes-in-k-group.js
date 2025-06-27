/**
 * تعریف کلاس ListNode برای محیط‌های تستی که این کلاس را ندارند
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) {
        return head;
    }

    const dummy = new ListNode(0);
    dummy.next = head;
    
    // اشاره‌گری به نود قبل از شروع هر گروه
    let prevGroupEnd = dummy;
    let groupStart = head;

    while (true) {
        // قدم ۱: انتهای گروه فعلی (k-امین نود) را پیدا کن
        let groupEnd = groupStart;
        for (let i = 0; i < k - 1; i++) {
            groupEnd = groupEnd.next;
            if (!groupEnd) {
                // اگر نود کافی وجود نداشت، لیست را بدون تغییر برگردان
                return dummy.next;
            }
        }

        // ابتدای گروه بعدی را ذخیره می‌کنیم تا اتصال را از دست ندهیم
        const nextGroupStart = groupEnd.next;

        // قدم ۲: گروه k تایی را به صورت درجا معکوس کن
        let prev = nextGroupStart; // دُمِ جدید گروه معکوس شده، به ابتدای گروه بعدی اشاره می‌کند
        let curr = groupStart;
        while (curr !== nextGroupStart) {
            const tempNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNext;
        }

        // قدم ۳: گروه معکوس شده را دوباره به لیست اصلی وصل کن
        // `groupEnd` (که قبلا انتهای گروه بود) حالا سرِ جدید گروه معکوس شده است
        prevGroupEnd.next = groupEnd; 
        
        // قدم ۴: اشاره‌گرها را برای حلقه بعدی آماده کن
        // `groupStart` (که قبلا ابتدای گروه بود) حالا دُمِ جدید گروه معکوس شده است
        prevGroupEnd = groupStart; 
        groupStart = nextGroupStart;

        if (!groupStart) {
            break; // اگر گروه دیگری وجود نداشت، کار تمام است
        }
    }

    return dummy.next;
};