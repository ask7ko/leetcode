class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode l = new ListNode();
        ListNode r = new ListNode();
        ListNode tl = l, tr = r;
        for (; head != null; head = head.next) {
            if (head.val < x) {
                tl.next = head;
                tl = tl.next;
            } else {
                tr.next = head;
                tr = tr.next;
            }
        }
        tr.next = null;
        tl.next = r.next;
        return l.next;
    }
}
