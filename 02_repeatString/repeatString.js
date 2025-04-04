const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  let strFinal = "";
  for (let i = 0; i < num; i++) {
    strFinal += string;
  }
  return strFinal;
};

// Do not edit below this line
module.exports = repeatString;
