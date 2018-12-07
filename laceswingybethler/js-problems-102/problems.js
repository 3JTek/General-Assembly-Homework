/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];

//PSEUDO CODE
//define empty values exclusive of 0
//filter them from an array
//return the array
function removeBlank(array) {
  const emptyValues = [null, undefined, '', NaN, false, [], {}]
  return array.filter((el)=> !emptyValues.includes(el))
}
// const emptyValues = [null, undefined, '', NaN, false, [], {}]
// // return array.filter((ele) => !== elem inside[emptyValues]
// return array.filter(function(ele) {
//   return !emptyValues.includes(ele)
// })
// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomInt = [Math.floor(Math.random()*array.length)]
  console.log(randomInt)
  return array[randomInt]
}
//PSEUDO
//create a random integer randomInt between 0 and array.length
// return the value of the element with an randomNum as its index


// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  // let newArray = array.map((el)=> parseInt(el))
  array.sort((a,b) => a-b)

  // array.sort()
  // console.log(array)
  return [array[1], array[array.length-2]]
}
//PSEUDO:
//sort the array
//return array[1] and array[array.length-2] (can use a array.filter?)


// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  const arrayOfCoins = [100, 50, 20, 10, 5, 2, 1]
  let pennyAmount = price * 100
  return coinOptions.reduce((changeWallet, coin)) => {
  const coinAmount = Math.floor(pennyAmount/coin)
  for (let i=0; i<coinAmount; i++) {
    changeWallet.push(coin)
  }
  pennyAmount = pennyAmount%coinAmount
  return changeWallet
  }, [])
}
//EASIER TO UNDERSTAND CODE OPTION
function coins(price) {
  let pence = price * 100
  const coins = [100, 50, 20, 10, 5, 2, 1]
  const result = []

  coins.forEach((coin) => {
    while(pence - coin >=0) {
      pence -=coin
      result.push(coin)
    }
  })
  return result
}

//PSEUDO METHOD - use forEach method if possible.
//sort the coins from largest to smallest
//loop through the coins (using an array method?)
//compare coin value to remaining price (remainingPrice)
//if coin value is less than remaining price, push the coin to the array
//reduce remainingPrice by the value of the coins and repeat


// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
// [1,2],[3,4]
function mergeUnique(arr1, arr2) {
  // const catArray = arr1.concat(arr2)
  return arr1.concat(arr2).reduce((acc,el)=> acc.includes(el) ? acc : acc.concat(el), [])
}

//to remove duplicates, accumulate (el) then push if not found

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  console.log(array.map((el)=> {key:el}))
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {

}
//PSEUDO
//get the keys from an object
//make it into Array1
//get the values from an object
//make that into Array2
//return the array [array1, array2]

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const fibSeries =[]
  for(let i=0;i<n;i++) {
    if(i<2){
      fibSeries.push(i)
      console.log(fibSeries)
    }else {
      fibSeries.push(fibSeries[i-2] +fibSeries[i-1])
    }
  }
  return fibSeries
}
//could we use a reduce for this?
array.reduce((el, i) => , 0)

//PSEUDO
//create an array
//for number (n) iterations, loop through and add the numbers together
//push the value of the sum to the end of the array
//if n is 0 or 1, just push the index value



//////////////
//HARDEST PROBLEMS
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
