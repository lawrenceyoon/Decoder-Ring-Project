// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

// INPUTS AND SHIFTS PARAMS
describe('caesar function: inputs and shifts', () => {
  /* INPUTS */
  it('Should treat caps as lower case', () => {
    const upperCase = caesar('Hello WORLD', 0);
    const lowerCase = caesar('hello world', 0);

    expect(upperCase).to.equal(lowerCase);
  });
  it('account for symbols', () => {
    const actual = caesar('message!', 8);

    expect(actual).to.include('umaaiom!');
  });
  it('account for spaces', () => {
    const expected = 'b c d';
    const actual = caesar('a b c', 1);
    expect(actual).to.equal(expected);
  });
  // SHIFTS
  it('Should return false if shift is undefined', () => {
    const input = 'text';
    const expected = false;
    const shift = undefined;
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });
  it('Should return false if shift is equal to 0', () => {
    const actual = caesar('text', 0);

    expect(actual).to.be.false;
  });

  it('Should return false if shift is less than -25', () => {
    const input = 'text';
    const actual = caesar(input, -26);

    expect(actual).to.be.false;
  });
  it('Should return false if shift is greater than 25', () => {
    const actual = caesar('text', 27);

    expect(actual).to.be.false;
  });
});

// Encoding
describe('caesar function: encoding', () => {
  // shift letters to right
  it('Encoding: should encode message by shifting letters to right', () => {
    const actual = caesar('Ok', 3);

    expect(actual).to.include('rn');
  });
  it('Encoding: should handle positive shifts at end of the alphabet', () => {
    const expected = 'c';
    const actual = caesar('z', 3);

    expect(actual).to.equal(expected);
  });
});

// Decoding
describe('caesar function: decoding', () => {
  it('Decoding: should decode message by shifting letters to left', () => {
    const actual = caesar('yes', 2, false);

    expect(actual).to.include('wcq');
  });
  it('Decoding: should handle negative shifts at beginning of the alphabet', () => {
    const expected = 'z';
    const actual = caesar('c', -3);

    expect(actual).to.equal(expected);
  });
});
