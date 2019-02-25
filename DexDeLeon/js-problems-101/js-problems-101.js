/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`;
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return celcius * 9 / 5 + 32;
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  return parseFloat(number.toString().split('').reverse().join(''));
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  return string.replace(/ /g, '').split('').reverse().join('') === string.replace(' ', '');
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  return string.toLowerCase().replace(/ /g, '').split('').sort().join('');
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  return string.toLowerCase().replace(/ /g, '').split('').reduce((obj, letter) => {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
    return obj;
  }, {});
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  return string.split(' ').map((word) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
  }).join(' ');
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return string.split('').reduce((count, letter) => {
    return vowels.includes(letter.toLowerCase()) ? count + 1 : count;
  }, 0);
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  const beam = new Array(string.length + 5).join('*');
  return `${beam}\n* ${string} *\n${beam}`;
}
