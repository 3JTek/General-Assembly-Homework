/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return (radius * radius * Math.PI)
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(temp) {
  return temp * 9 / 5 + 32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const reversed = number.toString().split('').reverse().join('')
  return Math.sign(number) * parseFloat(reversed)
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(str) {
  return str.split(' ').join('') === str.split(' ').join('').split('').reverse().join('')
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string){

}


// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string){

}



// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}


// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  const newString = string.split('')
  console.log(newString)
  let count = 0
  for(let i = 0; i <= newString.length; ++i){
    if( newString[i] === 'a' ) {
      count++
      return count
    }
  }
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             *************
