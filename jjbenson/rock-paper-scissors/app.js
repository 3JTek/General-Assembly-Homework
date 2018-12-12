
//Comment this out for testing
window.addEventListener('DOMContentLoaded', () => {

  // create array to hold all button elements
  const buttonsArr = document.querySelectorAll('button')

  //get the container elment of the two fighters
  const fighters = document.querySelector('.fighters')

  //get the play and cpu image elements
  const playerImg = document.querySelector('.player-image')
  const cpuImg = document.querySelector('.cpu-image')

  //Get the side box elements
  const playerWeaponText = document.querySelector('.player-weapon-text')
  const cpuWeaponText = document.querySelector('.cpu-weapon-text')

  //These were for text that appears above the fighters, not used anymore
  // const playerImageWeapon = document.querySelector('.player-image-weapon')
  // const cpuImageWeapon = document.querySelector('.cpu-image-weapon')

  //Get the health bar elements
  const playerHealthBar = document.querySelector('.player-health-bar-inner')
  const cpuHealthBar = document.querySelector('.cpu-health-bar-inner')

  //Get the bottom result text element
  const resultText = document.querySelector('.result')

  //Array of winners or draw
  const players = ['cpu','player','draw']

  //Aarray of 'weapons'
  const weaponsArr = ['scissors','paper','rock','lizard','spock']
  const numWeapons = weaponsArr.length

  //Game Object
  let game ={
    //String of current weapons
    playerWeapon: '',
    cpuWeapon: '',

    //Number of current healths
    playerHealth: 10,
    cpuHealth: 10,

    //Array to hold histories
    playerHistory: [],
    cpuHistory: [],

    //Winner of the last combat
    winner: '',

    //Is the game over? Used to disable the buttons
    gameOver: 'false',

    //
    // images: {
    //   rock: 'images/rock.png',
    //   paper: 'images/paper.png',
    //   scissors: 'images/scissors.png'
    // },

    //Function to randomly generate CPU weapon
    getCPUWeapon: function(){
      const index = Math.floor(Math.random()*numWeapons)
      game.cpuWeapon = weaponsArr[index]

      return weaponsArr[index]
    },

    //Returns an array of weapons that the given weapon can beat
    whatCanThisBeat: function(weapon){
      const beatsArr = []
      //beatsArr.push(weapon === 'rock'? 'scissors': weapon === 'scissors'? 'paper': 'rock')

      //When each weapon is given an index, it can beat the weapon with an index one greater and three greater, wrapping around the total number of options.
      const firstBeatsIndex = (weaponsArr.indexOf(weapon)+1)%numWeapons
      const secondBeatsIndex = (weaponsArr.indexOf(weapon)+3)%numWeapons

      beatsArr.push(weaponsArr[firstBeatsIndex])
      beatsArr.push(weaponsArr[secondBeatsIndex])

      return beatsArr

    },

    //Returns the index of the winner, either 0:CPU, 1:Player 2:Draw
    whoWins: function(){
      let theWinner
      //If weapons are the same call a draw
      if(this.cpuWeapon === this.playerWeapon){
        theWinner = 2
      }else{
        //If the cpuWeapon 'beats' array contains the player weapon, return the CPU, else the player
        theWinner =  this.whatCanThisBeat(this.playerWeapon).includes(this.cpuWeapon) ? 1: 0
      }

      this.winner = theWinner
      return theWinner
    },
    //Update the health of the CPU and Player
    updateHealth: function(){
      //CPU wins
      if(this.winner === 0){
        //reduce players Health
        this.playerHealth--
      } else if(this.winner === 1){
        //reduce cpu health
        this.cpuHealth--
      }
    },
    //Store the currnt weapons in their history Arrays and limit to a length of 18
    weaponsHistory: function(){
      const historyLen = 18

      //Add current weapon to front of array
      this.playerHistory.unshift(this.playerWeapon)
      this.cpuHistory.unshift(this.cpuWeapon)

      //If too big, limit the size of the arrays
      if(this.playerHistory.length>=historyLen){
        this.playerHistory = this.playerHistory.splice(0,historyLen)
        this.cpuHistory = this.cpuHistory.splice(0,historyLen)
      }

    },
    //Reset all variables
    reset: function(){
      console.log('RESET GAME')
      this.cpuWeapon =  ''
      this.playerWeapon = ''
      this.winner = ''
      this.cpuHealth = 10
      this.playerHealth = 10
      this.playerHistory = []
      this.cpuHistory = []
      //updateDisplay()
      init()
      game.gameOver = 'false'
    }
  }

  //Reset game display
  function init(){
    //Clear text
    playerWeaponText.innerText = ''
    cpuWeaponText.innerText = ''

    //Show starting text
    resultText.innerHTML = 'Get ready to <span class = \'cpu\'>FIGHT!</span>'

    //Clear animation classes
    playerImg.className = 'player-image'
    cpuImg.className = 'cpu-image'

    playerImg.classList.add('stance')
    cpuImg.classList.add('stance')

    //Reset health bars
    playerHealthBar.style.width = '100%'
    cpuHealthBar.style.width = '100%'



    // playerImg.classList.remove('lose')
    // cpuImg.classList.remove('lose')

    //Send fighters back to the sides
    fighters.style.width = '100%'

    //recenter the fighters
    fighters.style.left = 0

  }

  //On load init
  init()

  //Update the display!
  function updateDisplay(){

    //Bring fighters together
    fighters.style.width = '25%'

    //Array of the lengths of the animations for the timeout call backs
    const timingArr = {
      rock: 300,
      paper: 500,
      scissors: 500,
      spock: 400,
      lizard: 500
    }

    //Move the characters left or right depending on who is winning
    const fightersLeft = `${(game.playerHealth*20) - (game.cpuHealth*20)}px`
    fighters.style.left = fightersLeft

    //Add weapon specific animiations

    //Remove any old classes except 'player-image' and 'stance'
    const playerClasses = playerImg.classList
    console.log('James',playerClasses)
    for(let i = 2; i<playerClasses.length; i++){
      playerImg.classList.remove(playerClasses[i])
    }

    //Remove any old classes except 'cpu-image' and 'stance'
    const cpuClasses = cpuImg.classList
    console.log('cpu',cpuClasses)
    for(let i = 2; i<cpuClasses.length; i++){
      cpuImg.classList.remove(cpuClasses[i])
    }

    //Add weapon class for animation
    playerImg.classList.add(game.playerWeapon)

    //Set timeout to remove animation class
    setTimeout(function() {
      playerImg.classList.remove(game.playerWeapon)

    }, timingArr[game.playerWeapon])


    //Add weapon class for animation
    cpuImg.classList.add(game.cpuWeapon)

    //Set timeout to remove animation class
    setTimeout(function() {
      cpuImg.classList.remove(game.cpuWeapon)
    }, timingArr[game.cpuWeapon])

    //Create empty strings for history
    let playerHistory = ''
    let cpuHistory = ''

    //For every entry in history arrays add a p tag on a new line
    //P tag is used to style the first child i.e. current weapons
    for(const i in game.playerHistory){
      playerHistory += `<p>${game.playerHistory[i]}</p>\n`
      cpuHistory += `<p>${game.cpuHistory[i]}</p>\n`
    }

    //Set the side bar text to show historys
    playerWeaponText.innerHTML = playerHistory
    cpuWeaponText.innerHTML = cpuHistory

    //Update health bars
    playerHealthBar.style.width = (game.playerHealth*10) + '%'
    cpuHealthBar.style.width = (game.cpuHealth*10) + '%'


    //Update text
    //If same weapon call a draw
    if(players[game.winner]=== 'draw'){

      //If draw
      resultText.innerHTML = `<span class = 'player'>${game.playerWeapon}</span> and <span class = 'cpu'>${game.cpuWeapon}</span> draw<br>Great block!!`

    }else if(players[game.winner]==='player'){

      //Payer Wins
      resultText.innerHTML = `<span class = 'player'>${game.playerWeapon}</span> beats <span class = 'cpu'>${game.cpuWeapon}</span><br><span class = 'player'>Player1</span> landed a hit!!'`

    }else {

      //CPU wins
      resultText.innerHTML = `<span class = 'cpu'>${game.cpuWeapon}</span> beats <span class = 'player'>${game.playerWeapon}</span><br><span class = 'cpu'>CPU</span> landed a hit!!'`

    }

    //If the player health reaches 0, show lose message and add lose class for kneel
    if(game.playerHealth === 0){

      game.gameOver = true
      resultText.innerHTML = `<span class = 'cpu'>${game.cpuWeapon}</span> beats <span class = 'player'>${game.playerWeapon}</span><br><span class = 'cpu'>You lose!</span>`
      
      //Add lose animation
      playerImg.classList.add('lose')

    }else if (game.cpuHealth === 0){

      //If the cpu health reaches 0, show lose message and add lose class for kneel
      game.gameOver = true
      cpuImg.classList.add('lose')
      resultText.innerHTML= '<span class = \'player\'>Player1</span> wins!'

    }

  }

  //Main game funciton
  function playGame(){

    //Generate cpu weapon
    game.getCPUWeapon()

    //Update histories
    game.weaponsHistory()

    //Work out who won
    game.whoWins()

    //Update losers health
    game.updateHealth()

    //Update the display
    updateDisplay()
  }

  //For every button add a click event
  buttonsArr.forEach((button) => {
    button.addEventListener('click', (e)=>{

      //Which button was pressed
      const thisValue = e.target.value

      //If this is the reset button reset and return
      if(thisValue === 'reset'){
        game.reset()
        return
      }

      //If the game isn't over, update the player weapon to this buttons value
      if(game.gameOver==='false'){
        //update player weapon
        game.playerWeapon = thisValue

        //Run the main game function
        playGame()
      }
    })
  })

  //Comment this out for testing
})
