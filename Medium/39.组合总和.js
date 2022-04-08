/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (!candidates.length) return [];
  candidates.sort((a, b) => a - b);
  if (candidates[0] > target) return [];
  let ans = [];
  let set = new Set();
  function backtrack(list) {
    if (list.length) {
      let sum = list.reduce((cur, pre) => (cur += pre), 0);
      if (sum == target) {
        let str = list
          .slice()
          .sort((a, b) => a - b)
          .join("");
        if (!set.has(str)) {
          ans.push(list.slice());
          set.add(str);
        }
        return;
      }
      if (sum > target) return;
    }
    for (let i = 0; i < candidates.length; i++) {
      list.push(candidates[i]);
      backtrack(list);
      list.pop();
    }
  }
  backtrack([]);
  return ans;
};
// @lc code=end

console.log(combinationSum([2, 3, 5], 8));
