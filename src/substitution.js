// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // input => thinkful, alphabet => "xoy..."
  function substitution(input, alphabet, encode = true) {
    // your solution code here

    // if our alphabet is missing or length is not 26 characters, return false
    if (!alphabet || alphabet.length % 26 !== 0) {
      return false;
    }

    // if input is missing or length is <= 0, return false
    if (!input || alphabet.length % 2 !== 0) {
      return false;
    }

    const alphabetTestArray = alphabet.split('');

    for (let letter of alphabetTestArray) {
      let letterCount = alphabetTestArray.filter(
        (character) => character === letter
      ).length;
      if (letterCount > 1) return false;
    }

    // encode
    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const substitutionAlphabet = alphabet;

    input = input.toLowerCase();

    const splitArray = input.split('');
    const encodedArray = [];
    // decode
    if (!encode) {
      // input to gibberish (could include symbols)
      for (let character of splitArray) {
        // if the sub alphabet DOES NOT include character, likely a space
        if (!substitutionAlphabet.includes(character)) {
          // just push the character as it is
          encodedArray.push(character);
        } else {
          // find the index of the character in the substition alphabet
          const foundIndex = substitutionAlphabet.indexOf(character);
          // find character in the normal alphabet at the same index
          const foundCharacter = normalAlphabet[foundIndex];
          // push the found character into the encodedArray
          encodedArray.push(foundCharacter);
        }
      }
    } else {
      // encode
      // loop through each character in the splitArray
      for (let character of splitArray) {
        // if normal alphabet DOES NOT include the character, likely a space
        if (!normalAlphabet.includes(character)) {
          // just push normal character
          encodedArray.push(character);
        } else {
          const foundIndex = normalAlphabet.indexOf(character);
          const foundCharacter = alphabet[foundIndex];
          // push found character into encodedArray
          encodedArray.push(foundCharacter);
        }
      }
    }
    return encodedArray.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
