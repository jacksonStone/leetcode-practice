/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const results = new ListNode();
    let carry = 0;
    let currentl1 = l1;
    let currentl2 = l2;
    let currentResult = results;
    while(currentl1 && currentl2) {
        let result = currentl1.val + currentl2.val + carry;
        carry = 0;
        if(result >= 10) {
            result = result % 10;
            carry = 1;
        }
        currentResult.val = result;
        currentl1 = currentl1.next
        currentl2 = currentl2.next
        if(currentl1 || currentl2) {
            if (!currentl1) {
               currentl1 = new ListNode(0, undefined)
            } else if(!currentl2) {
                currentl2 = new ListNode(0, undefined)
            }
            currentResult.next = new ListNode()
            currentResult = currentResult.next;
            
        }

        
    }
    if(carry) { 
        currentResult.next = new ListNode(1, undefined)
    }
    return results
};
