/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let ret = "";
  //   1000
  function repeatM(num, ret) {
    let repeatNum = Math.floor(num / 1000);
    ret += "M".repeat(repeatNum);
    return repeatC(num - repeatNum * 1000, ret);
  }

  //   100
  function repeatC(num, ret) {
    if (num == 0) return ret;
    let repeatNum = Math.floor(num / 100);
    if (num >= 900) {
      ret += "CM";
    } else if (num >= 400 && num < 500) {
      ret += "CD";
    } else if (num >= 500) {
      ret += "D" + "C".repeat(repeatNum - 5);
    } else {
      ret += "C".repeat(repeatNum);
    }
    return repeatX(num - repeatNum * 100, ret);
  }

  //   10
  function repeatX(num, ret) {
    if (num == 0) return ret;
    let repeatNum = Math.floor(num / 10);
    if (num >= 90) {
      ret += "XC";
    } else if (num >= 40 && num < 50) {
      ret += "XL";
    } else if (num >= 50) {
      ret += "L" + "X".repeat(repeatNum - 5);
    } else {
      ret += "X".repeat(repeatNum);
    }
    return repeatI(num - repeatNum * 10, ret);
  }

  //   1
  function repeatI(num, ret) {
    if (num == 0) return ret;
    if (num == 9) {
      ret += "IX";
    } else if (num == 4) {
      ret += "IV";
    } else if (num >= 5) {
      ret = ret + "V" + "I".repeat(num - 5);
    } else {
      ret += "I".repeat(num);
    }
    return ret;
  }

  if (num >= 1000) {
    return repeatM(num, ret);
  } else if (num >= 100) {
    return repeatC(num, ret);
  } else if (num >= 10) {
    return repeatX(num, ret);
  } else {
    return repeatI(num, ret);
  }
};
// @lc code=end

console.log(intToRoman(1994))