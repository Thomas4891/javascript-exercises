const sumAll = function(num1, num2) {
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let sumAll = 0;

  for (let i = 1; i <= num2; ++i) {
    sumAll += i;
  }
  return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
