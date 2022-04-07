/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  if (nums[0] >= target) return nums[0] + nums[1] + nums[2];
  if (nums[nums.length - 1] < target)
    return (
      nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3]
    );
  let ans = nums[0];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == target) return sum;
      if ((sum + ans) / 2 > target) {
        ans = Math.min(ans, sum);
      } else if ((sum + ans) / 2 < target) {
        ans = Math.max(ans, sum);
      } else {
        ans = sum;
      }
      while (nums[left] == nums[left + 1]) {
        left++;
      }
      while (nums[right] == nums[right - 1]) {
        right--;
      }
      left++;
      right--;
    }
  }

  return ans;
};
// @lc code=end

console.log(threeSumClosest([-1,2,1,-4], 1));
