/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */

// تابع کمکی برای ادغام دو لیست
function mergeTwoLists(l1, l2) {
    const dummyHead = new ListNode();
    let tail = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 !== null ? l1 : l2;
    return dummyHead.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) { // <-- تغییر نام در این خط
    if (!lists || lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        const mergedLists = [];
        
        for (let i = 0; i < lists.length; i += 2) {
            const list1 = lists[i];
            const list2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(list1, list2));
        }
        
        lists = mergedLists;
    }
    
    return lists[0];
};