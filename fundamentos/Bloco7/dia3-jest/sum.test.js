const {sum, myRemove, myFizzBuzz} = require('./sum');
describe('Validation of sum', () => {
  it('sum returns  9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  
  it('sum return 0 when a and b equal 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  it('Throw error when param different number', () => {
    expect(() => {sum(4, "5")}).toThrow('parameters must be numbers');
  })
})

describe('Removes items', () => {
  it('return expected array', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  })
  it('not return array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('return expected array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  })
})

describe('fizzBuzz divide for 3 and 5', () => {
  it('return fizzbuzz', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15));
  })
  it('return fizz', () => {
    expect('fizz').toEqual(myFizzBuzz(9));
  })
  it('return buzz', () => {
    expect('buzz').toEqual(myFizzBuzz(25));
  })
})