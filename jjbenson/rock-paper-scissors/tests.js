/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('getCPUWeapon', () => {
  it('should randomly return a string of \'rock\', \'paper\' or \'scissors\'', () => {
    expect(getCPUWeapon()).to.be.a('string')
  })

  it('should return either \'rock\', \'paper\' or \'scissors\'', () => {
    expect(getCPUWeapon()).to.be.oneOf(['rock', 'paper', 'scissors'])
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

describe('whoWins', () => {
  it('should return a number', () => {
    expect(whoWins('rock','paper')).to.be.a('number')
  })

  it('it should return wether the cpu (0) or player (1) is the winner', () => {
    expect(whoWins('rock','paper')).to.deep.equal(1)
    expect(whoWins('paper','scissors')).to.deep.equal(1)
    expect(whoWins('scissors','rock')).to.deep.equal(1)

    expect(whoWins('paper','rock')).to.deep.equal(0)
    expect(whoWins('scissors','paper')).to.deep.equal(0)
    expect(whoWins('rock','scissors')).to.deep.equal(0)
  })
})
