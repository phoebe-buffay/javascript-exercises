const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    Number.isInteger(num1) == false ||
    Number.isInteger(num2) == false ||
    typeof num1 === "string" ||
    typeof num2 === "string" ||
    typeof num1 === [] ||
    typeof num2 === []
  ) {
    return "ERROR";
  }

  if (num1 > num2) {
    let oldNum1 = num1;
    num1 = num2;
    num2 = oldNum1;
  }

  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
