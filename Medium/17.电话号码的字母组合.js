/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  let ans = [];
  if (digits.length == 0) return [];
  if (digits.length == 1) return map[digits[0] - 2].split("");

  let strList = [];
  let str = "";
  for (let i = 0; i < digits.length; i++) {
    strList.push(map[digits[i] - 2]);
    str += map[digits[i] - 2];
  }

  function backtrack(step, list) {
    if (list.length == digits.length) {
      let listStr = list.slice().join("");
      if (!ans.includes(listStr)) {
        ans.push(listStr);
      }
      return;
    }

    for (let i = 0; i < strList[step].length; i++) {
      list.push(strList[step][i]);
      backtrack(step + 1, list);
      list.pop();
    }
  }
  backtrack(0, []);
  return ans;
};
// @lc code=end
