/* global describe, xdescribe, it */
/* eslint-disable no-undef */
const chai  = window.chai
const expect = chai.expect
describe('hello', () => {
  it('should return "Hello World!" if no argument is passed', () => {
    expect(hello()).to.equal('Hello World!')
  })
  it('should return "Hello <argument>!" if one is passed', () => {
    expect(hello('Mike')).to.equal('Hello Mike!')
  })
})
describe('areaOfCircle', () => {
  it('should find the area of a circle given a radius', () => {
    expect(areaOfCircle(4)).to.equal(50.26548245743669)
    expect(areaOfCircle(10)).to.equal(314.1592653589793)
    expect(areaOfCircle(1)).to.equal(3.141592653589793)
  })
})
describe('celciusToFarenheit', () => {
  it('should convert celcius to farenheit', () => {
    expect(celciusToFarenheit(0)).to.equal(32)
    expect(celciusToFarenheit(-40)).to.equal(-40)
    expect(celciusToFarenheit(100)).to.equal(212)
  })
})
describe('numberReverse', () => {
  it('should reverse a number', () => {
    expect(numberReverse(123)).to.equal(321)
    expect(numberReverse(4001)).to.equal(1004)
  })
  it('should handle decimals', () => {
    expect(numberReverse(78.567)).to.equal(765.87)
  })
})
describe('palindromeCheck', () => {
  it('should check if a word is a palindrome', () => {
    expect(palindromeCheck('pop')).to.be.true
    expect(palindromeCheck('dog')).to.be.false
  })
  it('should check if a phrase is a palindrome', () => {
    expect(palindromeCheck('nurses run')).to.be.true
    expect(palindromeCheck('will not work')).to.be.false
  })
})
describe('orderStringAlphabetically', () => {
  it('should order a word alphabetically', () => {
    expect(orderStringAlphabetically('happy')).to.equal('ahppy')
  })
  it('should order a phrase alphabetically', () => {
    expect(orderStringAlphabetically('javascript is cool')).to.equal('aacciijlooprsstv')
  })
  it('should be case insensive', () => {
    expect(orderStringAlphabetically('Testing Rocks')).to.equal('cegiknorsstt')
  })
})
describe('numOfOccurances', () => {
  it('should return the number of occurances of each letter of a string', () => {
    expect(numOfOccurances('this is great')).to.deep.equal({ t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 })
  })
  it('should be case insensive', () => {
    expect(numOfOccurances('Feeling Like A Pro')).to.deep.equal({ f: 1, e: 3, l: 2, i: 2, n: 1, g: 1, k: 1, a: 1, p: 1, r: 1, o: 1 })
  })
})
describe('titleCase', () => {
  it('should capitalize the first letter of each word', () => {
    expect(titleCase('this is it')).to.equal('This Is It')
  })
})
describe('numOfVowels', () => {
  it('should count the number of vowels in a string', () => {
    expect(numOfVowels('yellow submarine')).to.equal(6)
  })
  it('should be case insensive', () => {
    expect(numOfVowels('Yellow Submarine')).to.equal(6)
  })
})
describe('frame', () => {
  it('should frame a string in asterisks', () => {
    expect(frame('Rumplestiltskin')).to.equal('*******************\n* Rumplestiltskin *\n*******************')
    expect(frame('Hello Kitty')).to.equal('***************\n* Hello Kitty *\n***************')
  })
})
