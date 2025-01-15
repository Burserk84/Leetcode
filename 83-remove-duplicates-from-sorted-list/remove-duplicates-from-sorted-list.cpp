/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (!head) return head; // If the list is empty, return it

        ListNode* current = head; // Start with the head of the list
        while (current->next) {
            if (current->val == current->next->val) {
                current->next = current->next->next; // Skip the duplicate
            } else {
                current = current->next; // Move to the next node
            }
        }
        return head; // Return the modified list
    }
};