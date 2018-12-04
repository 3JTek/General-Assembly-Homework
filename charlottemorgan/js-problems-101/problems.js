/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return (`Hello ${string}!`)

}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius=4) {
  return radius * radius * Math.PI

}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return celcius*9/5+32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  return parseFloat(String(number).split('').reverse().join(''))
}


// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  const reversed = string.split('').reverse().join('')
  return string.replace(/ /g,'') === reversed.replace(/ /g,'')

}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  const alphabetical = string.replace(/ /g,'').toLowerCase()
  return alphabetical.split('').sort().join('')

  // const string.toLowerCase('').localeCompare(b.toLowerCase(''))
}


// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  const counter = {}
  const characters = string.toLocaleLowerCase().split(' ').join('').split('')
  for (let i=0;i<characters.length;i++){
    if (Object.keys(counter).includes(characters[i])) {
      counter[characters[i]] += 1
    } else {
      counter[characters[i]] = 1
    }
  }
  return counter

}


// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  const splitString = string.toLowerCase().split(' ')
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
  }
  return splitString.join(' ')

}
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  let vowelsCount = 0
  //turn the input into a string
  const makeString = string.toString()
  //loop through the string
  for (let i = 0; i <= string.length - 1; i++) {
  //if a vowel, add to vowel count
    if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u') {
      vowelsCount += 1
    }
  }
  return vowelsCount
}


// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  let sum = '****'
  for(let i=0; i<string.length; i++) {
    sum += '*'
  }
  const middleLine = ('* ' + string + ' *')
  return sum + '\n'+ middleLine + '\n' + sum
}
