/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('removeBlank', () => {
  it('should remove all empty values EXCEPT 0 from an array', () => {
    expect(removeBlank([0, NaN, undefined, false, '', null, 'Kevin'])).to.deep.equal([0, 'Kevin'])
  })
  it('should be able to handle complex data types', () => {
    expect(removeBlank([0,[],{}])).to.deep.equal([0,[],{}])
  })
})

describe('randomElement', () => {
  it('should return a random element from an array', () => {
    expect(randomElement(['red', 'green', 'blue'])).to.be.oneOf(['red', 'green', 'blue'])
  })
})

describe('secondLowestSecondHighest', () => {
  it('should return the second highest and second lowest numbers of an array', () => {
    expect(secondLowestSecondHighest([99,2000,-93,40,-761115,11])).to.deep.equal([-93,99])
  })
})

xdescribe('coins', () => {
  it('should return the coins needed to make up the price supplied', () => {
    expect(coins(1.50)).to.deep.equal([100, 50])
  })
  it('should use the smallest number of coins possible', () => {
    expect(coins(1.99)).to.deep.equal([100, 50, 20, 20, 5, 2, 2])
    expect(coins(2.88)).to.deep.equal([100, 100, 50, 20, 10, 5, 2, 1])
  })
})

describe('mergeUnique', () => {
  it('should merge two arrays', () => {
    expect(mergeUnique([1,2,3], [4,5,6])).to.deep.equal([1,2,3,4,5,6])
  })
  it('should remove duplicates', () => {
    expect(mergeUnique(['Mike', 'Emily', 'Eduardo'], ['Eduardo', 'Will', 'Emily'])).to.deep.equal(['Mike', 'Emily', 'Eduardo', 'Will'])
    expect(mergeUnique([5,10,15,20], [10,20,30,40])).to.deep.equal([5,10,15,20,30,40])
  })
})

describe('arrayToObjects', () => {
  it('should convert an array of strings to an array of objects', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city')[0]).to.be.an('object')
  })
  it('should have one object for each string in the original array', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city').length).to.equal(2)
  })
  it('each object should have the supplied key, and the value of the original array', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city')[0].city).to.equal('Paris')
    expect(arrayToObjects(['Paris', 'New York'], 'city')[1].city).to.equal('New York')
  })
})

xdescribe('objectToArray', () => {
  it('should convert an object into an array', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })).to.be.an('array')
  })
  it('should have one array element for each key/value pair', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' }).length).to.equal(2)
  })
  it('each element should be an array of two elements', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0].length).to.equal(2)
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1].length).to.equal(2)
  })
  it('should contain the data in the correct format', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0]).to.deep.equal(['name', 'Will Smith'])
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1]).to.deep.equal(['dob', '15-09-1968'])
  })
})

describe('fibonacci', () => {
  it('should return the first n fibonacci numbers', () => {
    expect(fibonacci(8)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13])
    expect(fibonacci(1)).to.deep.equal([0])
    expect(fibonacci(50)).to.deep.equal([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049])
  })
})

xdescribe('daysBetween', () => {
  it('should return the number of days between two dates', () => {
    expect(daysBetween('2017-02-01', '2017-01-01')).to.equal(31)
  })
  it('should not return negative numbers', () => {
    expect(daysBetween('2017-01-01', '2017-02-01')).to.equal(31)
  })
})

xdescribe('secondsBetween', () => {
  it('should return the number of seconds between to times', () => {
    expect(secondsBetween('12:00:00', '12:00:01')).to.equal(1)
  })
  it('should not return negative numbers', () => {
    expect(secondsBetween('12:00:01', '12:00:00')).to.equal(1)
  })
  it('should handle 12-hour and 24-hour format', () => {
    expect(secondsBetween('7:30:00pm', '8:00:00pm')).to.equal(1800)
    expect(secondsBetween('17:30:00', '18:00:00')).to.equal(1800)
    expect(secondsBetween('5:30:00pm', '18:00:00')).to.equal(1800)
  })
  it('should throw an error if time format is wrong', () => {
    expect(secondsBetween.bind(window, '1 o\'clock', '13-45-00')).to.throw(Error)
  })
})
