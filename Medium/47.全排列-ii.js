/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!nums.length) return nums;
  let ans = [];
  let set = new Set();
  function backTrack(list, source) {
    if (list.length == nums.length) {
      let str = list.slice().join("");
      if (!set.has(str)) {
        ans.push(list.slice());
        set.add(str);
      }
      return;
    }
    for (let i = 0; i < source.length; i++) {
      list.push(source[i]);
      let newSource = source.slice();
      newSource.splice(i,1)
      backTrack(list, newSource);
      list.pop();
    }
  }
  backTrack([], nums);
  return ans;
};
// @lc code=end

console.log(permuteUnique([1, 1, 2]));
