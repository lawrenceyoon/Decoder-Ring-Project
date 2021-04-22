// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    const coordinates = {
      11: 'a',
      12: 'f',
      13: 'l',
      14: 'q',
      15: 'v',
      21: 'b',
      22: 'g',
      23: 'm',
      24: 'r',
      25: 'w',
      31: 'c',
      32: 'h',
      33: 'n',
      34: 's',
      35: 'x',
      41: 'd',
      42: '(i/j)',
      43: 'o',
      44: 't',
      45: 'y',
      51: 'e',
      52: 'k',
      53: 'p',
      54: 'u',
      55: 'z',
    };

    // decoding => num -> str
    if (!encode) {
      // input is a string of numbers
      const splitArray = input.split(' ');
      // check length of entire splitArray, which already excludes spaces
      // if length of string is not divisible by 2 (even), return false
      if (splitArray.join('').length % 2 !== 0) {
        return false;
      }
      const numberArray = [];
      for (let i = 0; i < splitArray.length; i++) {
        const string = splitArray[i];
        for (let j = 0; j < string.length; j += 2) {
          numberArray.push(string.substring(j, j + 2));
        }
        numberArray.push(' ');
      }
      // remove last item of numberArray which will always be a space
      numberArray.pop();
      const letterArray = [];
      for (let pair of numberArray) {
        if (pair === ' ') {
          letterArray.push(pair);
        } else {
          const foundLetter = coordinates[pair];
          letterArray.push(foundLetter);
        }
      }
      return letterArray.join('');
    } else {
      // encode => str -> num
      const letterArray = input.toLowerCase().split('');
      // encode function (if encode is true, default)
      // iterating through each character in the letterArray
      const numberArray = [];
      for (let character of letterArray) {
        if (character === 'i' || character === 'j') {
          numberArray.push(42);
        } else {
          let foundNumber = Object.keys(coordinates).find(
            (key) => coordinates[key] === character
          );
          if (!foundNumber) {
            foundNumber = ' ';
          }
          numberArray.push(foundNumber);
        }
      }
      return numberArray.join('');
    }
  }
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
