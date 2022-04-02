/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n == 0) return [];
  if (n == 1) return ["()"];
  let ans = [];
  let Parenthesis = ["(", ")"];

  //   function backTrack(str) {
  //     if (str.length == 2 * n) {
  //       if (checkParenthesis(str)/** 这里可以优化 */) {
  //         ans.push(str);
  //       }
  //       return;
  //     }
  //     for (let i = 0; i < 2; i++) {
  //       str += Parenthesis[i];
  //       backTrack(str);
  //       str = str.slice(0, str.length - 1);
  //     }
  //     function checkParenthesis(str) {
  //       if (str[0] == ")") return false;
  //       if (str[str.length - 1] == "(") return false;
  //       let count = 0;
  //       let index = 0;
  //       while (index < str.length) {
  //         if (str[index] == "(") {
  //           count++;
  //         } else {
  //           if (count == 0) {
  //             return false;
  //           } else {
  //             count--;
  //           }
  //         }
  //         index++;
  //       }
  //       return count == 0 ? true : false;
  //     }
  //   }
  let stack = 0;
  function backTrack(str) {
    if (str.length == 2 * n) {
      if (stack == 0) {
        ans.push(str);
      }
      return;
    }
    for (let i = 0; i < 2; i++) {
      if (Parenthesis[i] == "(") {
        stack++;
      } else {
        if (stack == 0) return;
        else stack--;
      }
      str += Parenthesis[i];
      if (str == "((()))") debugger;
      backTrack(stack, str);
      str = str.slice(0, str.length - 1);
    }
  }
  backTrack("");
  return ans;
};
// @lc code=end

console.log(generateParenthesis(3));
