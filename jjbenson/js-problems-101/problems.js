/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI*radius*radius
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return(celcius*1.8) + 32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  return parseFloat(number.toString().split('').reverse().join(''))
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  //remove spaces
  string = string.split(' ').join('')
  //create a variable and save reversed
  const reverse = string.split('').reverse().join('')
  //compare strings
  return (reverse === string)
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  //string lower case, spit by spaces, join without spaces, split into letters, sort and join back to string
  return string.toLowerCase().split(' ').join('').split('').sort().join('')

}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {

  //string lowercase remove spaces and create an array of letters
  const array = string.toLowerCase().split(' ').join('').split('')

  //empty object to store into later
  const object = {}

  //for every letter in the array...
  for(const i in array){

    //remove  any letters that match this letter
    const result = array.filter(char => char !== array[i])

    // work out how many were removed
    const count = array.length - result.length

    //create a property of this letter and store how many of it there were
    object[array[i]]=count
  }

  return object
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {

  //create an array of the words
  let titleArr = string.split(' ')

  let wordArr
  let result = ''

  //for each word in title
  for(const word in titleArr){

    //split into letters
    wordArr = titleArr[word].split('')

    //Uppercase first letter
    wordArr[0]=wordArr[0].toUpperCase()

    //stick letter back into words
    wordArr=wordArr.join('')

    //Stick words back into title
    result += wordArr+' '

  }
  //remove last space
  result = result.substring(0, result.length - 1)

  return result
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {

  //function that returns true if char is a vowel (from classwork)
  function isCharacterAVowel(char){
    //console.log(char.match('a'))
    return /[aeiou]/i.test(char)//i  make it case insensitive
    // return !!char.match(/[aeiou]/i) // Double bang!! makes truthy true
    //return ['a','e','i','o','u'].includes(char.toLowerCase())
  }
  //create an array of lowercase letters
  const array = string.toLowerCase().split('')
  let accum = 0

  //for every letter in array
  for(const i in array){
    //test to see if it is a vowel, if it is increase the accumulator
    if(isCharacterAVowel(array[i]))accum++
  }

  return accum
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  //get length of string
  const len = string.length
  let result = ''

  //A function that will create a line of asteriks the length of the word and padding and frame
  function asteriskLine(){
    let result = ''
    for(let i=0;i<len+4;i++){
      result += '*'
    }
    return result
  }

  //Draw top line
  result += asteriskLine()

  //create new line and draw left border and add string and draw right border
  result +=`\n* ${string} *\n`

  //Draw bottom line
  result += asteriskLine()

  //Print to console!
  console.log(result)

  return result
}
