/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string = 'World') {
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
// (c*1.8)+32
function areaOfCircle(radius) {
  return (radius * radius) * Math.PI
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return (celcius * 1.8) + 32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  number = number + ''
  return parseFloat(number.split('').reverse().join(''))
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  // Remove unwanted characters
  const remove = /[\W_]/g
  // lowercase characters and remove empty space
  const replace = string.toLowerCase().replace(remove, '')
  //split in to array, flip, then join
  const flip = replace.split('').reverse().join('')
  // check if new string matches
  return flip === replace
}



// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  // giv argument a value and replace characters with space, also lowercase string
  string = string.replace(/\s+/g, '').toLocaleLowerCase()
  // return with a split, sort in order than rejoin
  return string.split('').sort().join('')
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  // remove any unwanted characters
  const remove = /[\W_]/g
  // lowercase characters and remove empty space
  const replace = string.toLowerCase().replace(remove, '')
  // make characters in to an array
  const array = replace.split('')
  // Loop through the array and create an object where the key is the letter
  // and the count is the value
  // if there is no value then initialise with a 1, if not increase the count
  const result = array.reduce((obj, letter) => {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1
    return obj
  }, {})
  return result
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'

function titleCase(string) {
  // split the string
  const split = string.toLowerCase().split(' ')
  // loop through the new array
  for (var i = 0; i < split.length; i++) {
    // You do not need to check if i is larger than split length, as your for does that for you
    // Assign it back to the array
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1)
  }
  // Directly return the joined string
  return split.join(' ')
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  // *g makes it search the whole string* *i makes it case-insensitive)*
  const search = string.match(/[aeiou]/gi)
  // return the number of matches. Check for null incase there are no matches (ie no vowels), and return 0 in that case.
  return search === null ? 0 : search.length
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  // make the width of the frame to be string + 4
  const frameSize = string.length + 4

  return `${'*'.repeat(frameSize)}\n* ${string} *\n${'*'.repeat(frameSize)}`

}