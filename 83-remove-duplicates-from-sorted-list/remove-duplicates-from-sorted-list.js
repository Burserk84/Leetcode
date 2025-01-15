/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    if (!head) return head; // If the list is empty, return it

    let current = head; // Start with the head of the list
    while (current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // Skip the duplicate
        } else {
            current = current.next; // Move to the next node
        }
    }
    return head; // Return the modified list
};

