/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length <= 1) return 0;
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let h = Math.min(height[left], height[right]);
    let w = right - left;
    max = Math.max(w * h, max);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max
};
// @lc code=end

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
