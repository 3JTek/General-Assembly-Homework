/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */


// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {


  return array.filter((value) => {
    return value === 0 || !!value
  })
  /*
  //create store to store non empty values
  const store = []

  //for each element in array
  array.forEach((elem, index) => {

  //If 0 store
  if(elem === 0)store.push(elem)

  //If Truthy store
  if(!!elem) store.push(elem)
})

//return array
return store
*/
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {

  return array[Math.floor(Math.random() * array.length)]

  /*
  //get length of arra
  const len = array.length

  //get random number from 0 to length
  const rdm = Math.floor(Math.random())*len

  // return item with index random
  return array[rdm]*/
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {

  const orderedArray = array.sort((a,b) => {
    return a - b
  })
  return [orderedArray[1], orderedArray[array.length-2]]

  /*
  function highestValue(array){
  const maxVal = Math.max(...array)
  return array.indexOf(maxVal)
}

function lowestValue(array){
const maxVal = Math.min(...array)
return array.indexOf(maxVal)
}

//create arrays to hold
const hiArr = array
const loArr = array
const store = []

//remove highest value from array
hiArr.splice(highestValue(hiArr), 1)

//get the new highest value and store in array
store.unshift(hiArr[highestValue(hiArr)])

//remove lowest value
loArr.splice(lowestValue(loArr), 1)

//get the new lowest value and store in array
store.unshift(loArr[lowestValue(loArr)])

return store
*/
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {

  let pence = price * 100
  const coins = [100,50,20,10,5,2,1]
  const result = []

  coins.forEach((coin) =>{
    while(pence-coin >= 0){
      pence -= coin;
      result.push(coin)
    }
  })

  return result
  /*
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

//Return array
return store
*/
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(...args) {

  Array.from(new Set(...args))
  //
  // //Create an array to return
  // const store = []
  //
  // //For each array given as an argument loop
  // args.forEach(array =>{
  //
  //   //for each element
  //   array.forEach(elem => {
  //
  //     //If the store includes element, do nothing, else push the element
  //     store.includes(elem)? false : store.push(elem)
  //
  //   })
  // })

  //return array
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

  // const accum =[]
  // while(n) accum.unshift(Math.round(((Math.pow((1 + Math.sqrt(5))/2,--n)-Math.pow((1 - Math.sqrt(5))/2,n))/Math.sqrt(5))))
  // console.log(accum)
  // return accum


//
// while(true) n ? accum.unshift(Math.round(((Math.pow((1 + Math.sqrt(5))/2,--n)-Math.pow((1 - Math.sqrt(5))/2,n))/Math.sqrt(5)))): return accum
//  while(true) n>0

  // const array = Array(n)
  // console.log(array)
  // array.reduce((accum, elem, i) => {
  //   // accum.push(Math.round(((Math.pow((1 + Math.sqrt(5))/2,i)-Math.pow((1 - Math.sqrt(5))/2,i))/Math.sqrt(5))))
  //   // return accum
  //   const A = Math.pow((1 + Math.sqrt(5))/2,i)
  //     const B = Math.pow((1 - Math.sqrt(5))/2,i)
  //     const X = Math.round(((A-B)/Math.sqrt(5)))
  //      accum.push(X)
  //      console.log(accum)
  //     return accum
  // } ,[])
  // console.log(array)

  //
  // const array = []
  // for(let i=0;i<n;i++){
  //   const A = Math.pow((1 + Math.sqrt(5))/2,i)
  //   const B = Math.pow((1 - Math.sqrt(5))/2,i)
  //   const X = Math.round(((A-B)/Math.sqrt(5)))
  //   array.push(X)
  // }
  // console.log(array)
  //   return array

  // console.log(13/8)
  // console.log(8/5)
  // console.log(5/3)
  //
  // const array = [0,1]
  // for(let i=1;i<n;i++){
  //   array.push(Math.floor(i*1.618033988749895))
  // }
  // console.log(array)
  //
  // return array
  //
  //



  //Create store for accum
  //const store = 0

  //Create starting array of fibonacci
  const array = [0,1]

  //loop from 2 to n
  for(let i=2;i<n;i++){
    //Add previous 2 values and push into the array
    array.push((array[i-1])+(array[i-2]))

  }



  //  Only return array of length n
  console.log(array)


  return array.splice(0,n)

  // //Create starting array of fibonacci
  // const array = []
  //
  // for(let i=0;i<n;i++)array.push((i?array[i-1]:0)+(i>1?array[i-2]:i?1:0))
  //
  // return array
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

  //If the arguments don't contain two ':'s then throw Error
  if(time1.split(':').length !== 3) throw Error('Invalid Format')
  if(time2.split(':').length !== 3) throw Error('Invalid Format')

  //Convert 12 hour clock to 24hour clock
  function convert12To24(time){

    //Get the last 2 characters
    const lastCharacter = time.substr(time.length-2,time.length)

    //If it is 12hr clock, set is12hr to AM or PM otherwise, false
    const is12hr = lastCharacter === 'am' ? 'am':lastCharacter === 'pm' ? 'pm': false

    //If it is 12hour
    if(is12hr){
      //Remove last two characters and return array
      time = time.split('').slice(0,7)

      //if it is PM
      if(is12hr === 'pm'){

        //if PM add 12 hours
        time[0] = parseInt(time[0])
        time[0] += 12
      }

      //Join array back to time
      time = time.join('')
    }

    //return time
    return time
  }

  //Function to convert 12 hour or 24hour string to seconds
  function convertToSeconds(string){
    //Convert to 24hour
    const time = convert12To24(string)

    //split into array of hours mis secondLowestSecondHighest
    const timeArray = time.split(':')

    //hrs to secs = 60*60
    timeArray[0] = timeArray[0]*60*60

    //mins to secs= 60
    timeArray[1] = timeArray[1]*60

    //secs
    timeArray[2] = parseInt(timeArray[2])

    //Add all secs together
    const timeSecs = timeArray.reduce((acc,num) => acc+num,0)

    //Return sum
    return timeSecs
  }

  //Find absolute difference between two times
  const diff = Math.abs( convertToSeconds(time1) - convertToSeconds(time2) )

  //return the difference
  return diff
}
