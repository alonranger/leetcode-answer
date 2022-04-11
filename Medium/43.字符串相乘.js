/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1[0] == "0" || num2[0] == "0") return "0";
  let remainder = 0;
  let ansStr = [];
  // 先算出相乘积的数字
  for (let i = 0; i < num1.length; i++) {
    remainder = 0;
    let numStr1 = num1[num1.length - 1 - i];
    let tempStr = "";
    for (let j = 0; j < num2.length; j++) {
      let numStr2 = num2[num2.length - 1 - j];
      let curNum = numStr1 * numStr2 + remainder;
      if (curNum >= 10) {
        tempStr = (curNum % 10) + tempStr;
        remainder = Math.floor(curNum / 10);
      } else {
        tempStr = curNum + tempStr;
        remainder = 0;
      }
    }
    tempStr = remainder > 0 ? remainder + tempStr : tempStr;
    // i 表示当前进位 Eg:如果相乘的是百位数，则乘积后面需要添加两个0
    tempStr += "0".repeat(i);
    ansStr.push(tempStr);
  }

  function composeNumber(numList) {
    let ret = "";
    while (numList.length) {
      let num = numList.pop();
      if (!ret.length) {
        ret = num;
        continue;
      } else {
        let remainder = 0;
        let currentSetpRet = "";
        // 循环对两个字符串取数，直到两个字符串取完为止
        while (num.length || ret.length) {
          let currentRetNum = ret.length ? Number(ret[ret.length - 1]) : 0;
          let currentPopNum = num.length ? Number(num[num.length - 1]) : 0;
          let sum = currentRetNum + currentPopNum + remainder;

          remainder = sum >= 10 ? Math.floor(sum / 10) : 0;

          currentSetpRet = (sum % 10) + currentSetpRet;

          ret = ret.length > 0 ? ret.slice(0, ret.length - 1) : "";
          num = num.length > 0 ? num.slice(0, num.length - 1) : "";
        }
        ret = remainder > 0 ? remainder + currentSetpRet : currentSetpRet;
      }
    }
    return ret;
  }
  return composeNumber(ansStr);
};
// @lc code=end

console.log(multiply("1657264852834752345234525", "45456423123123123123123123121212121"));
