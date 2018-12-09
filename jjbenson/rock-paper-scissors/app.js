
//Comment this out for testing
window.addEventListener('DOMContentLoaded', () => {


  const buttonsArr = document.querySelectorAll('button')

  const fighters = document.querySelector('.fighters')

  const playerImg = document.querySelector('.player-image')
  const cpuImg = document.querySelector('.cpu-image')

  // const playerHealth = document.querySelector('.player-health')
  // const cpuHealth = document.querySelector('.cpu-health')

  const playerImageWeapon = document.querySelector('.player-image-weapon')
  const playerWeaponText = document.querySelector('.player-weapon-text')

  const cpuImageWeapon = document.querySelector('.cpu-image-weapon')
  const cpuWeaponText = document.querySelector('.cpu-weapon-text')

  const playerHealthBar = document.querySelector('.player-health-bar-inner')
  const cpuHealthBar = document.querySelector('.cpu-health-bar-inner')


  const resultText = document.querySelector('.result')


  const players = ['cpu','player','draw']
  const weaponsArr = ['scissors','paper','rock','lizard','spock']
  const numWeapons = weaponsArr.length

  let game ={
    playerWeapon: '',
    cpuWeapon: '',
    playerHealth:10,
    cpuHealth:10,
    playerHistory: [],
    cpuHistory: [],
    winner: '',
    gameOver: 'false',
    images: {
      rock: 'images/rock.png',
      paper: 'images/paper.png',
      scissors: 'images/scissors.png'
    },
    getCPUWeapon: function(){
      const index = Math.floor(Math.random()*numWeapons)
      game.cpuWeapon = weaponsArr[index]

      return weaponsArr[index]
    },
    whatCanThisBeat: function(weapon){
      const beatsArr = []
      //beatsArr.push(weapon === 'rock'? 'scissors': weapon === 'scissors'? 'paper': 'rock')

      //const weaponIndex =weaponsArr.indexOf(weapon)
      //const beatsIndex = weaponsArr.indexOf(beatsArr[0])//
      const firstBeatsIndex = (weaponsArr.indexOf(weapon)+1)%weaponsArr.length
      const secondBeatsIndex = (weaponsArr.indexOf(weapon)+3)%weaponsArr.length

      beatsArr.push(weaponsArr[firstBeatsIndex])
      beatsArr.push(weaponsArr[secondBeatsIndex])


      return beatsArr
      /*
      console.log(`weapon:${weapon}`)
      const beatsArr = []

      const weaponIndex = weaponsArr.indexOf(weapon)


      //Every weapon beats the weapon with number one greater, except the last which wraps and defeats the first
      const beatsIndex = (weaponIndex+1)%numWeapons
      beatsArr.push(weaponsArr[beatsIndex])

      return beatsArr*/
    },
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
    updateHealth: function(){
      //WHATS HAPPENING HERE??
      if(this.winner === 0){
        //reduce players Health
        this.playerHealth--


      } else if(this.winner === 1){
        //reduce cpu health
        this.cpuHealth--
      }
    },
    logWeapons: function(){
      const historyLen = 18
      this.playerHistory.unshift(this.playerWeapon)
      this.cpuHistory.unshift(this.cpuWeapon)
      if(this.playerHistory.length>=historyLen){
        this.playerHistory = this.playerHistory.splice(0,historyLen)
        this.cpuHistory = this.cpuHistory.splice(0,historyLen)
      }

    },
    reset: function(){
      console.log('RESET GAME')
      this.cpuWeapon =  ''
      this.playerWeapon = ''
      this.winner = ''
      this.cpuHealth = 10
      this.playerHealth = 10
      //updateDisplay()
      init()
      game.gameOver = 'false'
    }
  }


  //0 rock
  //1 Paper
  //2 Scissors
  // 0 -> 1 -> 2 -> 0

  function init(){

    game.playerHealth = 10
    game.cpuHealth = 10


    playerImageWeapon.innerText = ''
    playerWeaponText.innerText = ''

    cpuImageWeapon.innerText = ''
    cpuWeaponText.innerText = ''


    // playerHealth.innerText = game.playerHealth
    // cpuHealth.innerText = game.cpuHealth


    resultText.innerText = 'Get ready to fight!'

    game.playerHistory = []
    game.cpuHistory = []

    playerImg.className = 'player-image'
    cpuImg.className = 'cpu-image'

    playerHealthBar.style.width = '100%'
    cpuHealthBar.style.width = '100%'

    playerImg.classList.add('stance')
    cpuImg.classList.add('stance')

    playerImg.classList.remove('lose')
    cpuImg.classList.remove('lose')

      fighters.style.width = '100%'

      fighters.style.left = 0

  }
  init()






  function updateDisplay(){
    //Update Images
    //playerImg.src = game.images[game.playerWeapon]
    //cpuImg.src = game.images[game.cpuWeapon]
    // if(game.gameOver==='false'){
    fighters.style.width = '25%'

    const timingArr = {
      rock: 300,
      paper: 500,
      scissors: 500,
      spock: 400,
      lizard:500
    }

    //fighters.style.left = 'calc(33%)'//-(game.playerHealth-game.cpuHealth)
    // let fightersLeft = fighters.style.left
    // fightersLeft = fightersLeft
    // console.log(fighters.style.left)
    const fightersLeft = `${(game.playerHealth*20) - (game.cpuHealth*20)}px`
    console.log(fightersLeft)
    fighters.style.left = fightersLeft

    console.log("HERE",game.winner)
    playerImg.classList.add(game.playerWeapon)
    console.log(game.playerWeapon)
    setTimeout(function() {
      playerImg.classList.remove(game.playerWeapon)
      //playerImg.classList.add('stance')

    }, timingArr[game.playerWeapon])

    cpuImg.classList.add(game.cpuWeapon)
    setTimeout(function() {
      cpuImg.classList.remove(game.cpuWeapon)
      //cpuImg.classList.add('stance')
    }, timingArr[game.cpuWeapon])

    // playerImageWeapon.classList.add('active')
    // setTimeout(function() {
    //   playerImageWeapon.classList.remove('active')
    // }, 500)
    //
    //
    //
    // cpuImageWeapon.classList.add('active')
    // setTimeout(function() {
    //   cpuImageWeapon.classList.remove('active')
    // }, 500)
    // }

    playerImageWeapon.innerText = game.playerWeapon
    cpuImageWeapon.innerText = game.cpuWeapon

    let playerHistory = ''
    let cpuHistory = ''

    for(const i in game.playerHistory){
      playerHistory += `<p>${game.playerHistory[i]}</p>\n`
      cpuHistory += `<p>${game.cpuHistory[i]}</p>\n`
    }

    playerWeaponText.innerHTML = playerHistory
    cpuWeaponText.innerHTML = cpuHistory

    // playerWeaponText.innerText += game.playerWeapon+'\n'

    // cpuWeaponText.innerText += game.cpuWeapon+'\n'


    // playerHealth.innerText = game.playerHealth
    // cpuHealth.innerText = game.cpuHealth

    playerHealthBar.style.width = (game.playerHealth*10) + '%'
    cpuHealthBar.style.width = (game.cpuHealth*10) + '%'



    //Update text
    //If first fight
    if(players[game.winner]=== 'draw'){
      //If draw
      resultText.innerHTML = `<span class = 'player'>${game.playerWeapon}</span> and <span class = 'cpu'>${game.cpuWeapon}</span> draw<br>Great block!!`
    }else if(players[game.winner]===1){
      //Payer Wins
      resultText.innerHTML = `<span class = 'player'>${game.playerWeapon}</span> beats <span class = 'cpu'>${game.cpuWeapon}</span><br>Player1 landed a hit!!'`
    }else {
      //CPU wins
      resultText.innerHTML = `<span class = 'cpu'>${game.cpuWeapon}</span> beats <span class = 'player'>${game.playerWeapon}</span><br>CPU landed a hit!!'`
    }

    if(game.playerHealth === 0){
      game.gameOver = true
      resultText.innerText = 'You lose!'
      playerImg.classList.add('lose')
    }else if (game.cpuHealth === 0){
      game.gameOver = true
      cpuImg.classList.add('lose')
      resultText.innerText = 'player1 wins!'
    }

  }

  function playGame(){
    //get getCPUWeapon
    //
    game.getCPUWeapon()
    game.logWeapons()
    game.whoWins()
    game.updateHealth()
    updateDisplay()
    //console.log(`CPU:${game.cpuWeapon} PLAYER:${game.playerWeapon} = ${players[game.winner]} `)
  }

  //for every button add a click event
  buttonsArr.forEach((button) => {
    button.addEventListener('click', (e)=>{

      //Which button was pressed
      const thisValue = e.target.value

      //If this is the reset button reset and return
      if(thisValue === 'reset'){
        game.reset()
        return
      }
      if(game.gameOver==='false'){
        //update player weapon
        game.playerWeapon = thisValue

        playGame()
      }

    })
  })



  //Comment this out for testing
})
