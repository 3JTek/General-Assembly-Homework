document.addEventListener('DOMContentLoaded', () => {

  //place event listeners on three weapon buttons (rock paper and scissors)
  //when user clicks on any of the weapons initiate a function
  //the function should create randomly chosen option from array: rock paper or scissors
  //rock beats scissors
  //scissors beat paper
  //paper beats rock
  //if user wins, display youWon image inside top img (innerHTML?)
  //if user loses, display youLose inside top img (innerHTML?)
  //if user clicks 'resetButton', clear top image

  const weapons = document.querySelectorAll('button.weapon')
  const weaponOptions = ['rock', 'paper', 'scissors']
  const resetButton = document.querySelector('button.reset')

  function computerPlay() {
    return weaponOptions[Math.floor(Math.random()*3)]
  }

  weapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      computerPlay()
      console.log(computerPlay())
    })
  })



})
