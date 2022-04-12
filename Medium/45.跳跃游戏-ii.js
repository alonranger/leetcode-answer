/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  /**
   * 主要思路：以第一步跳跃的最短距离和最远距离为区间
   * 在这个区间找到一个能够跳最远的距离，继续上一个步骤
   */
  if (nums.length == 1) {
    if (nums[0] <= 1) return 0;
    return 1;
  }
  let end = nums[0];
  let maxpos = [0, nums[0]];
  let count = 1;
  if (maxpos[1] >= nums.length - 1) return count; /** 防止第一步直接跳出数组 */
  function findWay(startIndex, endIndex, count) {
    count++;
    while (startIndex <= endIndex) {
      let position = startIndex + nums[startIndex];
      if (position > maxpos[1]) {
        maxpos[0] = startIndex;
        maxpos[1] = position;
      }
      startIndex++;
      if (position >= nums.length - 1) return count;
    }
    if (maxpos[1] >= nums.length - 1) {
      return count;
    }
    return findWay(maxpos[0], maxpos[1], count);
  }
  return findWay(1 /** 默认是已经走了一步 */, end, count);
};
// @lc code=end
// console.log(jump([1, 2]));
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]));
