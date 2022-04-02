const { generateLink } = require("./utils");
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return [];
  let count = 1;
  let curNode = head;
  while (curNode && curNode.next) {
    curNode = curNode.next;
    count++;
  }
  if (count == n) return head.next;

  // 如果删除链表中的某一个节点必须记录他的父节点
  let parentNode = head
  let current = head.next;
  while (true) {
    count--;
    if (count == n) {
      parentNode.next = current.next;
      return head
    } else {
      parentNode  = current
      current = current.next;
    }
  }
};
// @lc code=end
let link = generateLink([1, 2, 3, 4, 5]);

// let node = link.next
// let parentNode = link
// while(true) {
//   if(node.val ==3) {
//     parentNode.next = node.next
//     break
//   }
//   parentNode = node
//   node = node.next
// }
// console.log(link)

console.dir(removeNthFromEnd(link, 1));
