/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  //create a variable that contains an array of empty values
  const emptyValues = [null, undefined, '', NaN, false]
  // return an array that does not contain the empty emptyValues
  return array.filter((element) => !emptyValues.includes(element))
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomIndex = array[Math.floor(Math.random() * array.length)]
  // return the new variable
  return randomIndex
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  //sort array in ascending order
  const sortedArray = array.sort((function(a, b){return a-b}))
  //return value at index 1 and value at -2 as we start the array at 0
  return [sortedArray[1],sortedArray[array.length-2]]
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  // //convert the price into a whole number by multiplying it by 100 to get the value in pennies
  const convertToPennies = price * 100
  // //create array of available coins
  const numberOfCoins = [100, 50, 20, 20, 5, 2, 2]
  // //loop through the array and add elements until
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const concArray = arr1.concat(arr2)
  return concArray.filter((element, index, array) => {
    return array.indexOf(element) === index
  })
}


// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {

}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {

}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {

}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {

}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {

}
