/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length || nums[0] > target || nums[nums.length - 1] < target)
    return [-1, -1];
  if (nums.indexOf(target) < 0) return [-1, -1];

  //#region 双指针
  //   let ans = [null, null];
  //   let left = 0;
  //   let right = nums.length - 1;
  //   while (left <= right) {
  //     if (ans[0] !== null && ans[1] !== null) break;
  //     if (nums[left] == target) {
  //       ans[0] = left;
  //       if (ans[1] !== null) return ans;
  //     } else left++;
  //     if (nums[right] == target) {
  //       ans[1] = right;
  //       if (ans[0] !== null) return ans;
  //     } else right--;
  //   }
  //   return [-1, -1];
  //#endregion

  //#region 二分查找
  /**
   * 一旦找到等于targte的元素后，以该元素的下标为中心
   * 向两边扩散查找，直到两边的值不等于target为止
   */
  function binarySearch(startIndex, endIndex) {
    if (endIndex - startIndex == 1) {
      if (nums[endIndex] == target && nums[startIndex] == target)
        return [startIndex, endIndex];
      if (nums[startIndex] !== target && nums[endIndex] != target)
        return [-1, -1];
      if (nums[startIndex] == target && nums[endIndex] != target)
        return [startIndex, startIndex];
      if (nums[endIndex] == target && nums[startIndex] != target)
        return [endIndex, endIndex];
    }

    let middleIndex = (startIndex + endIndex) >> 1;
    let middleNum = nums[middleIndex];
    if (middleNum == target) {
      let left = middleIndex;
      let right = middleIndex;

      //  only one
      if (nums[left - 1] != target && nums[right + 1] != target)
        return [middleIndex, middleIndex];

      // only & on side
      if (
        (left - 1 < 0 && nums[right + 1] !== target) ||
        (right + 1 >= nums.length && nums[left - 1] !== target)
      ) {
        return [middleIndex, middleIndex];
      }

      while (
        (nums[left] == target && left >= 0) ||
        (nums[right] == target && right <= nums.length - 1)
      ) {
        if (nums[left] == target) left--;
        if (nums[right] == target) right++;
      }
      return [left + 1, right - 1];
    }
    if (middleNum > target) {
      return binarySearch(startIndex, middleIndex);
    } else {
      return binarySearch(middleIndex, endIndex);
    }
  }

  return binarySearch(0, nums.length - 1);
  //#endregion
};
// @lc code=end
console.log(
  searchRange([0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 6, 8, 9, 9, 9], 0)
);
