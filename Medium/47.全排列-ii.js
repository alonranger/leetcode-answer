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
  // let set = new Set();
  // function backTrack(list, source) {
  //   if (list.length == nums.length) {
  //     let str = list.slice().join("");
  //     if (!set.has(str)) {
  //       ans.push(list.slice());
  //       set.add(str);
  //     }
  //     return;
  //   }
  //   for (let i = 0; i < source.length; i++) {
  //     list.push(source[i]);
  //     let newSource = source.slice();
  //     newSource.splice(i,1)
  //     backTrack(list, newSource);
  //     list.pop();
  //   }
  // }

  // 优化后
  let visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  function backTrack(list, visited) {
    if (list.length == nums.length) {
      ans.push(list.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // nums[i] == nums[i - 1] && visited[i - 1] == false 跳过当前层级循环中相等的元素
      // 如果visited[i-1]==true说明当前元素是在前一个元素的下一级
      if (
        (i > 0 && nums[i] == nums[i - 1] && visited[i - 1] == false) ||
        visited[i]
      )
        continue;
      list.push(nums[i]);
      visited[i] = true;
      backTrack(list, visited);
      list.pop();
      visited[i] = false;
    }
  }
  backTrack([], visited);

  backTrack([], nums);
  return ans;
};
// @lc code=end

console.log(permuteUnique([1, 1, 2]));
