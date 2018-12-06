/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"

// Setting a default value for string if no argument is passed
function hello(string='World') {
  // return Hello string! if an argument is passed, otherwise return Hello World!
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI*(Math.pow(radius, 2))
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return celcius*(9/5)+32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {

  // convert the number into a string, read its digits into an array with split, reverse the array with reverse, then convert into a string with join; parseFloat returns a number
  return parseFloat(number.toString().split('').reverse().join(''))
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {

  //string is split into an array and reversed, then compared to its original order, this returns true if it is the same (a palindrome) or false if it isn't
  // split(' ') included to remove spaces from string to compare phrases as well as words
  return string.split(' ').join('').split('').reverse().join('') === string.split(' ').join('')
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {

  // string is converted to lowercase, then split into an array without spaces, the array is sorted, then joined back into a string to be returned
  return string.toLowerCase().split(' ').join('').split('').sort().join('')
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }

function numOfOccurances(string) {

  // empty object created to hold characters and their occurances
  const counter = {}

  // characters of string split into an array without spaces
  const characters = string.toLowerCase().split(' ').join('').split('')

  // REGULAR EXPRESSION REPLACE
  // .replace(/ /g, '')

  // for each character in the array...
  characters.forEach((char) => {
    // forEach can use arrow functions!


    // if the character is already present as a key in the object...
    if (Object.keys(counter).includes(char)){
      // ...add 1 to its value

      // Obj.key WILL NOT WORK HERE because the .key is recognised literally and not replaced by the current variable
      counter[char] += 1
      // otherwise
    } else {
      // add the character as a key in the object and set its value to one (first occurance)
      counter[char] = 1
    }
  })
  // return the object with the counts
  return counter
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  // create an array holding each word in the string
  const words = string.split(' ')
  // for each word
  for (let i=0;i<words.length;i++){
    // reassign the current word to its capitalized version
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  // return the array joined back into a string with spaces
  return words.join(' ')
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {

  // create variable to hold count
  let count = 0
  // for each character in the string
  for (let i=0;i<string.length;i++){
    // if the character is a vowel
    if (['a', 'e', 'i', 'o', 'u'].includes(string.charAt(i).toLowerCase())){
      // increase count by one
      count+=1
    }
  }
  return count
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************

function frame(string) {
  // the top and bottom line of the fram is a number of *s equal to the length of the string plus 4
  const line = '****' + '*'.repeat(string.length)
  // the middle line of the frame is the string itself with a * to each side separated by a space
  const middleLine = ('* ' + string + ' *')
  // return the framed string, line by line
  return line + '\n'+ middleLine + '\n' + line
}
