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


  const weaponOptions = [
    {name: 'rock',
      beats: 'scissors',
      image: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg'},
    {name: 'paper',
      beats: 'rock',
      image: 'https://www.custompackagingandproducts.com/wp-content/uploads/2016/06/white-12x12.png'},
    {name: 'scissors',
      beats: 'paper',
      image: 'https://cdn.pixabay.com/photo/2016/03/31/23/11/scissors-1297454__340.png'}]

  const resetButton = document.querySelector('button.reset')
  const arena = document.querySelector('img.arena')
  const arenaText = document.querySelector('h2.arenaText')
  const weapons = document.querySelectorAll('button.weapon')




  function computerPlay() {
    return weaponOptions[Math.floor(Math.random()*3)]
  }

  weapons.forEach((weapon) => {
    weapon.addEventListener('click', (e) => {
      const play = computerPlay()
      let btn = document.querySelector('button[name="'+e.target.name+'"]')
      console.log(btn)

      arena.src = play.image
      console.log('computer played ' + play.name)
      // const computerWeapon = computerPlay().name
      // const userWeapon = e.target.name
      console.log('you played ' + e.target.name)
      if (play.name === e.target.name) {
        arenaText.innerText = 'You played ' + e.target.name + '. You drew'
        backToWhite()
        btn.style.backgroundColor = 'orange'
      }else if (play.beats === e.target.name){
        arenaText.innerText = 'You played ' + e.target.name + '. You Lose!'
        backToWhite()
        btn.style.backgroundColor = 'red'
      }else {
        arenaText.innerText = 'You played ' + e.target.name + '. You Win!'
        backToWhite()
        btn.style.backgroundColor = 'green'
      }
    })
  })

  function backToWhite() {
    return weapons.forEach((weapon) => weapon.style.backgroundColor = 'white')
  }

  resetButton.addEventListener('click',() => {
    arena.src = 'https://media.giphy.com/media/b0I9c0NXRMS1W/giphy.gif'
    arenaText.innerText = 'I challenge you to a duel.'
    backToWhite()
  })

})