const removeFromArray = function(array, ...element) {
  for (let i = 0; i < element.length; ++i) {
    for (let j = 0; j < array.length; ++j) {
      if (element[i] === array[j]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
