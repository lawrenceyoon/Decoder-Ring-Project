// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius');

// Encoding
describe('polybius function: encoding', () => {
  it('Should convert each letter to the proper number pair', () => {
    const actual = polybius('we');

    expect(actual).to.include('2551');
  });
  it('Should translate either chars "i" or "j" to 42', () => {
    const actual = polybius('hi');

    expect(actual).to.include('3242');
  });
  it('Should preserve spaces', () => {
    const actual = polybius('h i');
    expect(actual).to.include('32 42');
  });
});

// Decoding
describe('polybius function: decoding', () => {
  it('Should convert each pair number to proper letter', () => {
    const input = '2551';
    const expected = 'we';
    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });
  it('Should translate 42 to (i/j)', () => {
    const input = '3242';
    const expected = 'h(i/j)';
    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });
  it('Should preserve spaces', () => {
    const input = '32 42';
    const expected = 'h (i/j)';
    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });
  it('Should return false if length of numbers in input param is odd', () => {
    const input = '324';
    const actual = polybius(input, false);

    expect(actual).to.be.false;
  });
});

// describe('polybius function: decoding', () => {
//   // decode
//   it('converts each number pair to the proper letter', () => {
//     const expected = 'he';
//     const actual = polybius('3251');

//     expect(actual).to.equal(expected);
//   });
// });
