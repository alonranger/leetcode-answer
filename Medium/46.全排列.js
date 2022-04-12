/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums.length) return nums;
  let ans = [];
  function backTrack(list) {
    if (list.length == nums.length) {
      ans.push(list.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
        if(list.includes(nums[i])) continue
        list.push(nums[i])
        backTrack(list)
        list.pop()
    }
  }
  backTrack([]);
  return ans;
};
// @lc code=end
