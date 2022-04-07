/*
 * @lc app=leetcode.cn id=2 lang=javascript
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let retNodeList = null;
  let remainder = 0;
  let list1 = l1;
  let list2 = l2;
  /**
   * 循环遍历两个链表，直到两个链表的next都为null
   *
   */
  while (list1 || list2) {
    let current1 = list1 ? list1.val : 0;
    let current2 = list2 ? list2.val : 0;
    let val = current1 + current2 + remainder;
    remainder = Math.floor(val / 10);
    if (!retNodeList) {
      retNodeList = new ListNode(val % 10, new ListNode());
    } else {
      // 每次新增节点需要遍历当前结果链表
      let tempNode = retNodeList;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.val = val % 10;
      // 这里会链表增加一个多余的节点，该节点可作为最后进位
      tempNode.next = new ListNode();
    }
    list1 = list1 ? list1.next : null;
    list2 = list2 ? list2.next : null;
  }

  let tempNode = retNodeList;
  let parentNode = retNodeList;
  while (tempNode.next) {
    parentNode = tempNode;
    tempNode = tempNode.next;
  }
  // 如果最后两个或者一个节点和余数相加大于10
  // 将结果添加到最后一个点，否则删除最后一个节点
  if (remainder > 0) {
    tempNode.val = remainder;
  } else {
    parentNode.next = null;
  }
  return retNodeList;
};
// @lc code=end
