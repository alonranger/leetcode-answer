/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  let ans = [];
  nums.sort((a, b) => a - b);
  let min = nums[0] + nums[1] + nums[2] + nums[3];
  let max =
    nums[nums.length - 1] +
    nums[nums.length - 2] +
    nums[nums.length - 3] +
    nums[nums.length - 4];
  if (min > target || max < target) return [];
  function backtrack(index, list) {
    if (list.length == 4) {
      let sum = list.reduce((cur, next) => (cur += next), 0);
      //   let str = list.slice().join("");
      if (sum == target) {
        ans.push(list.slice());
        // set.add(str);
      }
      return;
    }

    for (let i = index; i < nums.length; i++) {
      // 排除同层相等的情况
      if (nums[i] == nums[i - 1] && i > index) continue;
      list.push(nums[i]);
      backtrack(i + 1, list);
      list.pop();
    }
  }
  backtrack(0, []);
  return ans;
};
// @lc code=end
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
