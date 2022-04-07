/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  //#region 双重循环
  // function isPalindrome(s) {
  //   let midIndex = s.length >> 1;
  //   for (let i = 0; i <= midIndex; i++) {
  //     if (s[i] != s[s.length - 1 - i]) return false;
  //   }
  //   return true;
  // }
  // if (isPalindrome(s)) return s;
  // let maxLenStr = "";
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = s.length; j >= i; j--) {
  //     let str = s.slice(i, j);
  //     if (isPalindrome(str)) {
  //       maxLenStr = maxLenStr.length > str.length ? maxLenStr : str;
  //     }
  //   }
  // }
  //#endregion
  if (s.length <= 1) return s;
  if (s.length == 2 && s[0] == s[1]) return s;
  let pos = [0, 0];
  for (let i = 1; i < s.length - 1; i++) {
    let left = i;
    let right = i;
    if (s[i] !== s[i - 1] && s[i] !== s[i + 1]) {
      left = i - 1;
      right = i + 1;
      pos[0] = i;
      pos[1] = i;
    } else {
      if (s[i] == s[i - 1]) {
        left = i - 2;
        right = i + 1;
        pos[0] = i - 1;
        pos[1] = i;
      } else if (s[i] == [i + 1]) {
        left = i - 1;
        right = i + 2;
        pos[0] = i;
        pos[1] = i + 1;
      }
    }

    while (s[left] == s[right] && left >= 0 && right <= s.length - 1) {
      if (left == 0 || right == s.length - 1) break;
      left--;
      right++;
    }

    if (right - left > pos[1] - pos[0]) {
      pos[0] = left;
      pos[1] = right;
    }

    console.log(left, right);
  }
  console.log(s.slice(pos[0], pos[1] + 1));
  // return s.slice(pos[0], pos[1] + 1);
};
// @lc code=end

longestPalindrome("pwwkekw");
