/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return radius*radius*Math.PI
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return celcius*1.8 +32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(n) {
  n = n + ''
  return parseFloat(n.split('').reverse().join(''))
}


// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  //Strip all non-word characters from the string
  const plainText = /[\W_]/g
  //Convert string to lower case
  const lowerCase = string.toLowerCase().replace(plainText, '')
  //Reverse string
  const reverseString = lowerCase.split('').reverse().join('')
  //Compare reverseString to lowerCase string
  return reverseString === lowerCase
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  const plainText = /[\W_]/g
  const lowerCase = string.toLowerCase().replace(plainText, '')
  return lowerCase.split('').sort().join('')
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  return string.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  }, {})
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  var stringText = string.split(' ')
  for (var i = 0; i < stringText.length; i++) {
    stringText[i] = stringText[i].charAt(0).toUpperCase()
  }
  return stringText.join(' ')
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  var vowels = string.match(/[aeiouAEIOU]/gi)
  return vowels === null ? 0 : vowels.length
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {

}
