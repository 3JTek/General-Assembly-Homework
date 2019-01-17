/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter((value) => {
    return value === 0 || !!value;
  });
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const orderedArray = array.sort((a,b) => {
    return a - b;
  });
  return [orderedArray[1], orderedArray[array.length-2]];
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  let pence = price * 100;
  const coins = [100, 50, 20, 10, 5, 2, 1];
  const result = [];

  coins.forEach((coin) => {
    while(pence - coin >= 0) {
      pence -= coin;
      result.push(coin);
    }
  });

  return result;
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2)))
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  return array.map((string) => {
    const object = {};
    object[key] = string;
    return object;
  });
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  return Object.keys(object).map((key) => {
    return [key, object[key]];
  });
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const fib = [0];
  for (let i = 1; i < n; i++){
    fib.push(fib[i-2] + fib[i-1] || 1);
  }
  return fib;
}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {
  return Math.abs(new Date(date1) - new Date(date2)) / 1000 / 60 / 60 / 24;
}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {
  function getMoment(str) {

    if(!str.match(/[0-9]{1,2}:[0-9]{2}:[0-9]{2}(am|pm)?/)) {
      throw new Error('Invalid time format');
    }

    const info = [];
    str.split(':').forEach((t, i, array) => {
      if(t.match(/pm/)) info[0] += 12;
      info[i] = parseFloat(t);
    });

    const moment = new Date();
    moment.setHours(info[0]);
    moment.setMinutes(info[1]);
    moment.setSeconds(info[2]);
    moment.setMilliseconds(0);

    return moment;
  }

  return Math.abs(getMoment(time1) - getMoment(time2)) / 1000;
}
