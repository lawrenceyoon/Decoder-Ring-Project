const { expect } = require('chai');
const { substitution } = require('../src/substitution');

// Write your tests here!

// INPUTS & ALPHABET PARAMS
describe('substitution function: Inputs and alphabets', () => {
  // INPUTS & ALPHABETS
  it('Should return false if value of param input and/or alphabet is missing', () => {
    const actual = substitution('random');

    expect(actual).to.be.false;
  });
  it('Should return false if value of param alphabet is !== 26 chars', () => {
    const word = 'hello';
    const word2 = 'goodbye';
    const actual = substitution(word, word2);

    expect(actual).to.be.false;
  });
  it('Should return false if substitution alphabet has repeated chars', () => {
    const expected = false;
    const actual = substitution('hello', 'aabc');

    expect(actual).to.equal(expected);
  });
});

// Encoding
describe('substitution function: encoding', () => {
  it('Should encode message by using the given value in param alphabet', () => {
    const expected = 'xyz';
    const actual = substitution('abc', 'xyzdefghijklmnopqrstuvwabc');

    expect(actual).to.equal(expected);
  });
  it('Should work with unique characters as a key', () => {
    const expected = 'v!<>.';
    const actual = substitution('vwxyz', 'abcdefghijklmnopqrstuv!<>.');

    expect(actual).to.include(expected);
  });
  it('Should preserve spaces', () => {
    const expected = 'x y z';
    const actual = substitution('a b c', 'xyzdefghijklmnopqrstuvwabc');

    expect(actual).to.equal(expected);
  });
});

// Decoding
describe('substitution function: decoding', () => {
  it('Should decode message by using the given value in param alphabet', () => {
    const input = 'xyz';
    const alphabet = 'xyzdefghijklmnopqrstuvwabc';
    const expected = 'abc';
    const actual = substitution(input, alphabet, false);

    expect(actual).to.include(expected);
  });
  it('Should work with unique characters as a key', () => {
    const input = 'v!<>.';
    const alphabet = 'abcdefghijklmnopqrstuv!<>.';
    const expected = 'vwxyz';
    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });
  it('Should preserve spaces', () => {
    const input = 'x y z';
    const alphabet = 'xyzdefghijklmnopqrstuvwabc';
    const expected = 'a b c';
    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });
});
