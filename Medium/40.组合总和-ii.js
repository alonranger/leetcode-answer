/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (!candidates.length) return [];
  let ans = [];
  candidates.sort((a, b) => a - b);
  if (candidates[0] > target) return [];

  let endIndex = candidates.length;
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] >= target) {
      endIndex = i + 1;
      break;
    }
  }

  function backtrack(index, list) {
    let sum = list.reduce((cur, pre) => (cur += pre), 0);
    if (sum == target) {
      ans.push(list.slice());
      return;
    }
    if (sum > target) return;
    for (let i = index; i < endIndex; i++) {
      if (candidates[i] == candidates[i - 1] && i > index) continue;
      list.push(candidates[i]);
      backtrack(i + 1, list);
      list.pop();
    }
  }

  backtrack(0, []);

  return ans;
};
// @lc code=end

console.log(
  combinationSum2(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    30
  )
);
