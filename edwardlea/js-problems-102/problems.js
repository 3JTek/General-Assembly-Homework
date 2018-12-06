/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const emptyValues = [null, undefined, '', NaN, false]
  return array.filter((el) => !emptyValues.includes(el))
  //    const newArray = array.filter(function(el){
  //     return !emptyValues.includes(el)
  //   })
  // return newArray
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomIndex = (Math.floor(Math.random() * ((array.length-1) - 0 + 1) ) + 0)
  return array[randomIndex]
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const sortedArray = array.sort(function(a, b){return a-b})
  return [sortedArray[1],sortedArray[array.length-2]]
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  let remainingPrice = price*100
  const coinArray = []
  const arrayOfCoins = [100, 50, 20, 10, 5, 2, 1]
  arrayOfCoins.forEach(function(el){
    while(remainingPrice>=el){
      remainingPrice -= el
      coinArray.push(el)
    }
  })
  return coinArray
}


// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const mergedArray = arr1.concat(arr2)
  return mergedArray.filter((el,ind,arr) =>  arr.indexOf(el) === ind)
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  const newArray = []
  const newObject = {}
  array.forEach((el) => newArray.push({[key]: el}))
  return newArray
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  const keysArray = Object.keys(object)
  const valuesArray = Object.values(object)
  const newArray = []

  // for(var i = 0 ; i < keysArray.length ; i++){
  //   newArray.push([keysArray[i],valuesArray[i]])
  // }

  keysArray.forEach((el, ind) => newArray.push([keysArray[ind],valuesArray[ind]]))
  return newArray
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const fibSeries = []
  for(var i = 0 ; i < n ; i++){
    if(i < 2){
      fibSeries.push(i)
    }else{
      fibSeries.push(fibSeries[i-2] +fibSeries[i-1])
    }
  }
  return fibSeries
}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {
  const dateOneNumber = Date.parse(date1)
  const dateTwoNumber = Date.parse(date2)
  return Math.abs(Math.floor(dateOneNumber - dateTwoNumber)/(1000*60*60*24))
}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {
  console.log(time1)
  const time1AsNumber = time1.getTime()
  const time2AsNumber = time2.getTime()
  console.log(time1AsNumber)
  console.log(time2AsNumber)

}
