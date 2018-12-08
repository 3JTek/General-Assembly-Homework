/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('randomGenerator', () => {
  it('should randomly return a string of \'rock\', \'paper\' or \'scissors\'', () => {
    expect(randomGenerator()).to.be.a('string')
  })

  it('should return either \'rock\', \'paper\' or \'scissors\'', () => {
    expect(randomGenerator()).to.be.oneOf(['rock', 'paper', 'scissors'])
  })
})

describe('beats', () => {
  it('should return an array', () => {
    expect(beats('rock')).to.be.a('array')
  })
  it('it should return who it beats', () => {
    expect(beats('rock')).to.deep.equal(['scissors'])
    expect(beats('paper')).to.deep.equal(['rock'])
    expect(beats('scissors')).to.deep.equal(['paper'])
  })
})

describe('winner', () => {
  it('should return a number', () => {
    expect(winner('rock','paper')).to.be.a('number')
  })

  it('it should return wether the cpu (0) or player (1) is the winner', () => {
    expect(winner('rock','paper')).to.deep.equal(1)
    expect(winner('paper','scissors')).to.deep.equal(1)
    expect(winner('scissors','rock')).to.deep.equal(1)

    expect(winner('paper','rock')).to.deep.equal(0)
    expect(winner('scissors','paper')).to.deep.equal(0)
    expect(winner('rock','scissors')).to.deep.equal(0)
  })
})
