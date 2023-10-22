const reverseString = function(string) {
  let revStr = [];
  for (let i = string.length - 1; i >= 0; --i) {
    revStr.push(string[i]);
  }
  return revStr.join('');
};
// Do not edit below this line
module.exports = reverseString;
