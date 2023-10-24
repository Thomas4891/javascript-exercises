const sumAll = function(num1, num2) {
  let sumAll = 0;
  if (typeof num1 === 'number' && typeof num2 === 'number' && num1 > 0 &&
      num2 > 0) {
    if (num1 > num2) {
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }
    for (let i = 1; i <= num2; ++i) {
      sumAll += i;
    }
    return sumAll;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
