/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string = 'World') {
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
//A=πr^2
//A=Math.PI * Math.pow(radius, 2)
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2)
}

// write a function to convert celcius to farenheit
// (0°C × 9/5) + 32 = 32°F

function celciusToFarenheit(celcius) {
  return (celcius * 9/5) + 32
}

// write a function that will reverse a number (eg. 456733 become 337654)
//convert a num to a string with .toString
function numberReverse(number) {
  return parseFloat(number.toString().split('').reverse().join(''))
}
console.log(numberReverse(123))

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  return string.split(' ').join('').split('').reverse().join('') === string.split(' ').join('')
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'

function orderStringAlphabetically(string) {
  return string.toLowerCase().split(' ').join('').split('').sort().join('')
}
console.log(orderStringAlphabetically('Javascript is cool'))

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
// convert string into an Array? An object?

// count?
// convert to an object?
//for every character in the object [i] count?

//.includes for the Array
// Objects.keys(nameOfObject)  <-- consults the object and checks if there. then can loop through this.

function numOfOccurances(string) {
  objectForCount = {}
  // make string into an Array
  const myStringArray = string.toLowerCase().split(' ').join('').split('')
  //for each item in the array, create a property
  for (var i = 0; i < myStringArray.length; i++) {
    const letter = myStringArray[i]
    // if the item is not new increase the value by 1
    if (letter in objectForCount) {
      objectForCount[letter] +=1
      //if item is new, set value of the property to 1
    }else {
      objectForCount[letter] =1
    }
  }
  //return the answer
  return objectForCount
}
console.log(numOfOccurances('This is great'))

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
//split the string into an array of words
  const words = string.split(' ')
  let newArray = []
  //for each wordd
  for (i=0; i<words.length; i++) {
    const word = words[i]

    //get the first letter and make it uppercase
    const startOfWord = word[0].toUpperCase()
    //create a new string with the remaining letters
    const restOfWord = word.slice(1, word.length)
    //concatenate them togetehr
    const capsWord = startOfWord + restOfWord
    newArray.push(capsWord)

  }
  //join the array back into a string
  return newArray.join(' ')
}
console.log(titleCase('the lord of the rings'))



//return string


// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {

}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {

}
