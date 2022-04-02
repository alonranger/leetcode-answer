/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 双指针
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) return [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return ans;
    if (nums[i] == nums[i - 1] && i > 0) continue;
    let left = i + 1;
    let right = nums.length - 1;
    // 利用双指针前后匹配，中间跳过重复数字
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        // 遇到重复的数字直接跳过
        while (nums[left] == nums[left + 1]) {
          left++;
        }
        while (nums[right] == nums[right - 1]) {
          right--;
        }
        right--;
        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;

  // 回溯
  // if (nums.length < 3) return [];
  // let ans = [];
  // nums.sort((a, b) => a - b);
  // if (nums[0] > 0) return [];

  // function backtrack(index, list) {
  //   if (list.length == 3) {
  //     let sum = list.reduce((current, next) => (current += next), 0);
  //     if (sum == 0) {
  //       ans.push([...list]);
  //     }
  //     return;
  //   }
  //   for (let i = index; i < nums.length; i++) {
  //     if (nums[i] == nums[i - 1] && i > index) continue;
  //     list.push(nums[i]);
  //     backtrack(i + 1, list);
  //     list.pop();
  //   }
  // }
  // backtrack(0, []);
  // return ans;
};

// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
