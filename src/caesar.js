// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // your solution code here
  function caesar(input, shift, encode = true) {
    // what if they put numbers, booleans, null? input length is 0?
    if (typeof input !== 'string' || input.length === 0) {
      return false;
    }
    // check if shift value is in proper range
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // if encode is false => shift to left. DEFAULT shift is right
    if (!encode) {
      shift = shift * -1;
    }

    // turns into array with separate characters
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz';
    const inputArray = input.toLowerCase().split('');

    const newArr = [];
    for (let character of inputArray) {
      if (alphabetArray.includes(character)) {
        const characterIndex = alphabetArray.indexOf(character);
        let newIndex = characterIndex + shift;
        if (newIndex >= 0) {
          newIndex = newIndex % 26;
        } else {
          newIndex = newIndex + 26;
        }
        const shiftedCharacter = alphabetArray[newIndex];
        newArr.push(shiftedCharacter);
      } else {
        newArr.push(character);
      }
    }
    return newArr.join('');
  }
  return { caesar };
})();

module.exports = { caesar: caesarModule.caesar };
