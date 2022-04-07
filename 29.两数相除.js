/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let divisor2 = divisor < 0 ? 0 - divisor : divisor;
  let dividend2 = dividend < 0 ? 0 - dividend : dividend;
  if (dividend2 == 0 || dividend2 < divisor2) return 0;

  /**
   * 连续将除数乘2,直到结果大于被除数，除数减去相乘的结果后再
   * 进行相同的操作，直到相减后的余数小于除数为止
   * 最后结果为2的除数乘2的次数方
   */
  function divide2(divide, divisor) {
    let times = 0;
    let divisor2 = divisor;
    while (2 * divisor2 <= divide) {
      divisor2 *= 2;
      times += 1;
    }
    if (divide - divisor2 >= divisor) {
      return Math.pow(2, times) + divide2(divide - divisor2, divisor);
    } else {
      return Math.pow(2, times);
    }
  }

  let ans = divide2(dividend2, divisor2);
  if (dividend > 0) {
    if (divisor > 0) {
      return ans > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : ans;
    } else {
      return ans > Math.pow(2, 31) - 1 ? -Math.pow(2, 31) : -ans;
    }
  } else {
    if (divisor > 0) {
      return ans > Math.pow(2, 31) - 1 ? -Math.pow(2, 31) : -ans;
    } else {
      return ans > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : ans;
    }
  }
};
// @lc code=end

console.log(divide(2147483647, 1));
