const repeatString = function(str, repeatTimes) {
  if (repeatTimes < 0) return 'ERROR';
  let repeated = '';
  // Nothing to repeat on empty strings, better return early
  if (!str) return repeated;

  for (let i = 0; i < repeatTimes; i++) {
    repeated += str;
  }
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
