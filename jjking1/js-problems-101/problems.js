/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
const hello = (string='World') => {
  return (`Hello ${string}!`)
}

// write a function that will calculate the area of a circle, given the radius
const areaOfCircle = (radius) => {
  return Math.PI * Math.pow(radius, 2)
}

// write a function to convert celcius to farenheit
const celciusToFarenheit = (celcius) => {
  return (celcius * 1.8) + 32
}

// write a function that will reverse a number (eg. 456733 become 337654)
const numberReverse = (number) => {
  return parseFloat(number.toString().split('').reverse().join(''))

}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
const palindromeCheck = (string) => {
  return string.split(' ').join('').split('').reverse().join('') === string.split(' ').join('')
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
const orderStringAlphabetically = (string) => {
  return string.toLocaleLowerCase().split(' ').join('').split('').sort().join('')
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
const numOfOccurances = (string) => {
  // form empty object
  const characterObj = {}
  // remove spaces and change case
  string = string.toLowerCase().replace(/ /g,'').split('')
  string.forEach(function(letter){
    characterObj[letter] ? characterObj[letter]+=1 : characterObj[letter] = 1
  })
  return characterObj
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
const titleCase = (string) => {
  // separate each word into an array
  string = string.split(' ')
  // iterate through the words in the array
  for(let i = 0; i < string.length; i++){
    // modify the first letter charAt(0) to uppercase then add the rest of the word back
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1)
    // .substring adds on the remainder of a string starting at the index given
  }
  // turn the array back into a string with spaces
  string = string.join(' ')
  return string
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
const numOfVowels = (string) => {
  // make regex, store matches in array
  const vowels = string.match(/[aeiou]/gi)
  // i ignores case, g makes sure to check for all possible matches,
  // length of array = number of vowels
  return vowels.length
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
const frame = (string) => {
  // 2 spaces extra characters needed to make the border expand by 4. 2 on each side. set as length const
  const length = string.length+4
  // set top and bottom borders to repeat as long as the words + 4. save as frame const
  const frame = '*'.repeat(length)
  // frame top + left border + string + right border + bottom frame border
  return frame+'\n* '+string+' *\n'+frame
}
