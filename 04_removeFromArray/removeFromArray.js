const removeFromArray = function(array, ...item) {
  return array.filter(x => !item.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
