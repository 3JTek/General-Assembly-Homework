/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI*(radius*radius)
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return celcius*9/5+32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const reversed = number.toString().split('').reverse().join('')
  return Math.sign(number) * parseFloat(reversed)
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  const reversed = string.split('').reverse().join('')
  return string.replace(/ /g, '') === reversed.replace(/ /g, '')

}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  const alphabetical = string.replace(/ /g, '').toLowerCase()
  return alphabetical.split('').sort().join('')
  //split, sort alphabetically then join the string back together again.


}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  const characterObj = {}
  string.toLowerCase().replace(/ /g, '').split('').forEach(letter => {
    if(characterObj[letter]){
      characterObj[letter]+=1
    } else {
      characterObj[letter]=1
    }
  })
  return characterObj
}

//globally replace all letters with empty string


//    = string.toLowerCase().split('').join('')
//
//   for(let i = 0; i < string.length; i++){
//     if(!characterObj.hasOwnProperty(string[i])){
//       characterObj[string[i]] = 1
//     }else{
//       characterObj[string[i]] += 1
//     }
//   }
//   return characterObj
// }


// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {

}

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
