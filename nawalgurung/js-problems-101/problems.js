// /* eslint-disable no-unused-vars */
//
// // write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// // eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`
}
//
// // write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
//
  return Math.PI *(Math.pow(radius, 2))
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  const farenheit = celcius * (9/5) + 32
  return farenheit
}
//
// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const reversed = number.toString().split('').reverse().join('')
  return parseFloat(reversed)
}
//
// // write a function to check if a word or phrase is a palindrome returning a boolean
// // eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  //split  is used to split a String object into individuals array of strings by separating the string
  return string.split(' ').join('') === string.split(' ').join('').split('').reverse().join('')
}
//
// // write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// // eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  return string.toLowerCase().split(' ').join('').split('').sort().join('')
}
//
// // write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  let charObj = {}
  string = string.toLowerCase().split(' ').join('')
  //loop over the string
  for(let i=0; i<string.length; i++){
    //create key value pair for each individual char
    charObj[string[i]]
    // if the individual char exist then increment
    if(string[i] in charObj){
      charObj[string[i]] ++
    }else {
      charObj[string[i]] = 1
    }
  }
  return(charObj)
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  string = string.split(' ')

  for(let i = 0; i<string.length; i++){
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
  }
  return string.join(' ')
}
//
// // write a function that returns the number of vowels in a string case insensitive
// // 'y' should not be considered a vowel
// // eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  return string.match(/[aeiou]/gi).length
}
//
// // write a function that frames a string in asterisks (*)
// //                             ***************
// // eg: frame('Hello Kitty') => * Hello Kitty *
// //                             ***************
// function frame(string) {
//
// }
