/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter(element => !!element || element === 0)
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomNumber = [Math.floor(Math.random()*array.length)+1]
  return array[randomNumber]
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const newArray = []
  array.sort((a, b) => a - b )
  newArray.push(array[1])
  newArray.push(array[array.length - 2])
  return newArray
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  //Define array
  const coinsAvailable = [100, 50, 20, 10, 5, 2, 1]
  const coinsNeeded = []
  price *= 100
  for(let i = 0; i < coinsAvailable.length; i++){
    if(price >= coinsAvailable[i]){
      coinsNeeded.push(coinsAvailable[i])
      price -= coinsAvailable[i]
      i--
    }
  }
  return coinsNeeded
}

// write a function to merge two arrays and remove duplicates
//eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const concArray = arr1.concat(arr2)
  return concArray.filter((element, index, array) => {
    return array.indexOf(element) === index
  })
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  const newArray = []
  array.forEach(element => {
    const resultObject = {}
    resultObject[key] = element
    newArray.push(resultObject)
  })
  return newArray
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  let myArray = []
  const myNewArray = []
  myArray = Object.keys(object)
  console.log(myArray)
  console.log(object[0])

  myArray.forEach((el,index,array) => {
    const subArray1 = []
    subArray1.push(el)
    subArray1.push(object[el])
    myNewArray.push(subArray1)
  })
  console.log(myNewArray)
  return myNewArray
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const array = [0,1,1]
  if(n < 4){
    return array.splice(0,n)
  }
  for(let i =3; i<n; i++){
    array.push(array[i-2]+array[i-1])
  }
  return array
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
