/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  //use filter
  return array.filter(element => !!element || element === 0)
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  //return array whose elements have been turned into a whole numbers using Math.floor and math.random to choose random elements.
  return array[Math.floor((Math.random()*array.length))]
}


// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
//put array in ascending order
  //const sortedArray = array.sort((a, b) => a - b))
  //find index[1] and array.length-1 of sortedArray

//return number at index 1 and second to last index of array??
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {

}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  return arr1.concat(arr2).filter((elem, index, arr)=> arr.indexOf(elem)=== index)

}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  const newObject =  array.map(name => {
    return {[key]: name}
  })
  return newObject
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
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  fib.pop()
  return fib
}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {
  //turn strings into arrays
  const newDate1 = date1.split('-')
  const newDate2 = date2.split('-')
  //minus the number at 0 index of newDate2 from same of newDate1, and do the same for indexes 1 and 2 and return the values.
  return ((newDate1[0] - newDate2[0]) * 365 + (newDate1[1] - newDate2[1]) * 31 + (newDate1[2] - newDate2[2]))
}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {

}
