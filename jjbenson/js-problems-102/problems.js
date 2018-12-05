/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */


function highestValue(array){
  // A function which takes an array of numbers and returns the index of the highest value
  //Go through the array
  let store
  //repeat
  array.forEach(elem => {
    //store first value
    if (store === undefined) store = elem
    //Compare the next value with the stored value. store the bigger value
    if (elem > store){
      store = elem
    }
  })
  //output index of the stored value
  return array.indexOf(store)
}

function lowestValue(array){
  // A function which takes an array of numbers and returns the index of the lowest value
  //Go through the array
  let store
  //repeat
  array.forEach(elem => {
    //store first value
    if (store === undefined) store = elem
    //Compare the next value with the stored value. store the smaller value
    if (elem < store){
      store = elem
    }
  })
  //output index of the stored value
  return array.indexOf(store)
}


// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const store = []
  array.forEach((elem, index) => {
    if(elem === 0)store.push(elem)
    if(!!elem) store.push(elem)
  })
  return store
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  //get length of arra
  const len = array.length
  //get random number from 0 to length
  const rdm = Math.floor(Math.random())*len
  // return item with index random
  return array[rdm]
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const hiArr = array
  const loArr = array
  const store = []

  //get highest value
  // let index = highestValue(hiArr)
  //remove highest value from array
  hiArr.splice(highestValue(hiArr), 1)
  //get highest value and store in array
  store.unshift(hiArr[highestValue(hiArr)])

  //get lowest value
  // index = lowestValue(loArr)
  //remove lowest value
  loArr.splice(lowestValue(loArr), 1)
  //get lowest value and store in array
  store.unshift(loArr[lowestValue(loArr)])

  return store

}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  //running total of what we owe
  let leftToPay = price*100

  //array to store coins paid
  const store = []

  //array of coin values
  const coins = [100,50,20,10,5,2,1]

  //for every coin value
  for(let x=0;x<coins.length;x++){

    //How many of this coin do we need?
    const coinCount = Math.floor(leftToPay/coins[x])

    //push that many into array
    for(let i=0;i<coinCount;i++){
      store.push(coins[x])
    }

    //What is the remainder?
    leftToPay = leftToPay%coins[x]
  }
  return store

}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(...args) {

  //Create an array to return
  const store = []

  //For each array given as an argument loop
  args.forEach(array =>{

    //for each element
    array.forEach(elem => {

      //If the store includes element, do nothing, else push the element
      store.includes(elem)? false : store.push(elem)

    })
  })
  return store
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  //create array to hold objects
  const store = []

  //for every element in array
  array.forEach(elem => {

    //create an object.
    const newObj = {}

    //set name property and value to element
    newObj[key] = elem

    //add to an array
    store.push(newObj)

  })

  //return array
  return store
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  //Create array
  const store = []

  //get keys
  const keys = Object.keys(object)

  for(const property in object){
    //create array for property:value pairs
    let propValArr = []
    //set first value to property string and second to value string
    propValArr = [property, object[property]]

    //store property value pair array in main array
    store.push(propValArr)
  }

  //return array
  return store
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const store = 0
  const array = [0 , 1]
  for(let i=2;i<n;i++){
    array.push(array[i-1]+ array[i-2])
  }
  return array.slice(0,n)
}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {


  //get the first date in ms
  const date1MS = Date.parse(date1)

  //get the 2nd date in ms
  const date2MS = Date.parse(date2)

  //Get the absolute difference
  const diff = Math.abs(date2MS-date1MS)

  //how many ms in a year?
  const msInADay = 1000*60*60*24

  //Convert ms to days
  return diff/msInADay

}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {


  function isTwelveHour(string){
    const lastCharacter = string.substr(string.length-2,string.length)
    let result = false;
    result = lastCharacter === 'am' ? 'am':false
    result = lastCharacter === 'pm' ? 'pm':false
    return result
  }

  const time1isTwelveHour = isTwelveHour(time1)
  // console.log(time1isTwelveHour)

  const time2isTwelveHour = isTwelveHour(time2)
    // console.log(time2isTwelveHour)

  //split into array of hours mis secondLowestSecondHighest
  const time1Array = time1.split(':')
  //convert to secs
  //hours = 60 * 60
  //if is 12 hour and is pm add 12 hours
  if(time1isTwelveHour) {
    time1Array[0] = parseInt(time1Array[0])
    time1Array[0] += 12
    //console.log(`${time1} : ${time1Array[0]}`)
  }
  console.log(`${time1} : ${time1Array[0]}`)
  time1Array[0]=time1Array[0]*60*60
  //mins = 60
  time1Array[1]=time1Array[1]*60
  //Add all secs together
  const time1Secs = time1Array.reduce((acc,num) => acc+num,0)


  const time2Array = time2.split(':')
  //convert to secs
  //hours = 60 * 60
  //if is 12 hour and is pm add 12 hours
  if(time2isTwelveHour) time2Array[0]+=12
  time2Array[0]=time2Array[0]*60*60
  //mins = 60
  time2Array[1]=time2Array[1]*60
  //Add all secs together
  const time2Secs = time2Array.reduce((acc,num) => acc+num,0)

  const diff = Math.abs(time1Secs - time2Secs)

  return diff

}
