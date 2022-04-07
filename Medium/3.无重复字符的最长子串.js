/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let maxLen = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) !== -1) {
      maxLen = Math.max(str.length, maxLen);
      str = str.slice(str.indexOf(s[i]) + 1);
    } 
    str += s[i];
  }
  return Math.max(str.length, maxLen);
};
// @lc code=end
