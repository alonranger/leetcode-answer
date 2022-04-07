const { generateLink } = require("./utils");
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return [];
  if (!head.next) return head;

  let parentNode = head;
  let currentNode = head.next;

};
// @lc code=end

let link = generateLink([1, 2, 3, 4, 5]);
let ret = swapPairs(link);
console.dir(ret);
