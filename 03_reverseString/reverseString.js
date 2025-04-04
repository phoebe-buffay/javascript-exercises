const reverseString = function (string) {
  let strSpl = string.split("");
  let strRev = strSpl.reverse();
  let strJoin = strRev.join("");
  return strJoin;
};

// Do not edit below this line
module.exports = reverseString;
