/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const filtered = [null, undefined, '', NaN, false]
  return array.filter((el) => !filtered.includes(el))
}

// This is saying

/* const newArray = array.filter(function(el) {
    return !emptyValues.includes(el)
  })

  return newArray
}
*/


// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  // make random number
  const randomIndex = array[Math.floor(Math.random() * array.length)]
  // return the new variable
  return randomIndex
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]

function secondLowestSecondHighest(array) {

  const sortedArray = array.sort((el, i) => el - i)
  return [sortedArray[1], sortedArray[array.length - 2]]
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  price = price * 100
  const coinsAvailable = [100, 50, 20, 10, 5, 2, 1]
  const coinJar = []
  // while (newArray.reduce(((acc , el) => acc + el, 0)) <= max) {
  coinsAvailable.forEach(el => {
    while (price >= el) {
      coinJar.push(el)
      price = price - el
    }
  })
  return coinJar
}



// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {

  const arr3 = arr1.concat(arr2)
  // sorry James this was the only code I could use.... was struggling!
  const arr4 = [...new Set(arr3)]

  return arr4
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {

  const newArray = array.map(name => {
    return {
      [key]: name
    }
  })
  return newArray
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
  let fibArray = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2] || 1)
    // return fibonacci(n - 1) + fibonacci(n - 2)
  }
  fibArray.pop()
  return fibArray
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