/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2)
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return (celcius * (9/5)) + 32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const string = number.toString()
  return parseFloat(string.split('').reverse().join(''))
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  const noSpaceString = string.replace(/\s/g,'')
  if(noSpaceString === noSpaceString.split('').reverse().join('')){
    return true
  } else{
    return false
  }

}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  const noSpaceString = string.replace(/\s/g,'').toLowerCase()
  return noSpaceString.split('').sort().join('')
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  const noSpaceString = string.replace(/\s/g,'')

}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  let upperCase = []
  const splitString = string.split(' ')
  for(var i = 0 ; i < splitString.length ; i++){
    upperCase.push(splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1))
  }
  return upperCase.join(' ')
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {

  let numberOfVowels = 0
  for(var i = 0 ; i < string.length ; i++){
    if (['a', 'e', 'i', 'o', 'u'].includes(string[i].toLowerCase())){
      numberOfVowels ++
    }
  }
  return numberOfVowels
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {

}
