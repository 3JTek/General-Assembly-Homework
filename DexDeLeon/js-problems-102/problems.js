/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  // array of all blank elements
  const blank = [null, undefined, '', NaN, false]
  // filter array, excluding any elements that are in the blank elements array
  return array.filter(element => !blank.includes(element))
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  return array[Math.floor(Math.random()*array.length)]
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const sortedArr = array.sort((a, b) => a - b)
  return array.filter((elem, i) => i === 1 || i === array.length-2)
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  const coins = [100, 50, 20, 10, 5, 2, 1]
  const coinsUsed = []
  let sum = price*100
  coins.forEach(coin => {
    while(sum - coin >= 0){
      sum -= coin
      coinsUsed.push(coin)
    }
  })
  return coinsUsed
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  arr2.forEach((elem, i) => arr1.push(arr2[i]))
  const seen = []
  arr1.filter(elem => {
    if (!seen.includes(elem)) seen.push(elem)
  })
  return seen
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  const objects = []
  array.forEach(elem => objects.push({[key]: elem}))
  return objects
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  const arr = []
  for (const key in object){
    arr.push([key, object[key]])
  }
  return arr
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {

  // array of first two numbers in sequence
  const fibStart = [0, 1]

  // if n is less than 2, return appropriate slice of the starting array
  if (n <= 2) return fibStart.slice(0, n)
  // otherwise, starting at the 3rd term in the sequence, until the nth term in the sequence (index[2] until index[n-1])...
  else for(let i=2;i<n;i++){
    // ...push a new number which is the sum of the previous 2 in sequence
    fibStart.push(fibStart[i-1] + fibStart[i-2])
  }
  
  // return the completed array
  return fibStart
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
