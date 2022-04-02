function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const generateLink = (nums) => {
  let root = new ListNode();
  let curNode = root;
  let index = 0;
  while (index < nums.length) {
    curNode.val = nums[index];
    if (index == nums.length - 1) {
      break;
    }
    curNode.next = new ListNode();
    curNode = curNode.next;
    index++;
  }
  return root;
};

module.exports = {
  generateLink,
};
