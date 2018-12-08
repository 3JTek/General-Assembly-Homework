
//Comment this out for testing
window.addEventListener('DOMContentLoaded', () => {


  const buttonsArr = document.querySelectorAll('button')
  const playerImg = document.querySelector('.player-image')
  const cpuImg = document.querySelector('.cpu-image')
  const playerHealth = document.querySelector('.player-health')
  const cpuHealth = document.querySelector('.cpu-health')
  const playerImageWeapon = document.querySelector('.player-image-weapon')
  const playerWeaponText = document.querySelector('.player-weapon-text')
  const cpuImageWeapon = document.querySelector('.cpu-image-weapon')
  const cpuWeaponText = document.querySelector('.cpu-weapon-text')
  const resultText = document.querySelector('.result')


  const players = ['cpu','player','draw']
  const weaponsArr = ['rock','paper','scissors']
  const numWeapons = weaponsArr.length

  let game ={
    playerWeapon: '',
    cpuWeapon: '',
    playerHealth:10,
    cpuHealth:10,
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
      beatsArr.push(weapon === 'rock'? 'scissors': weapon === 'scissors'? 'paper': 'rock')
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
        theWinner =  this.whatCanThisBeat(this.cpuWeapon).includes(this.playerWeapon) ? 0: 1
      }

      this.winner = theWinner
      return theWinner
    },
    updateHealth: function(){
      if(this.winner === 0){
        //reduce players Health
        this.playerHealth--
      } else if(this.winner === 1){
        //reduce cpu health
        this.cpuHealth--
      }else{

      }


    },
    // whoWon: function(){
    //   // game.cpuWeapon = this.getCPUWeapon()
    //   //game.winner = this.whoWins(this.cpuWeapon,this.playerWeapon)
    //   console.log(`CPU:${this.cpuWeapon} PLAYER:${this.playerWeapon} = ${players[this.winner]} `)
    // },
    reset: function(){
      console.log('RESET GAME')
      this.cpuWeapon =  ''
      this.playerWeapon = ''
      this.winner = ''
      this.cpuHealth = 10
      this.playerHealth = 10
      updateDisplay()
      game.gameOver = 'false'
    }
  }


  //0 rock
  //1 Paper
  //2 Scissors
  // 0 -> 1 -> 2 -> 0









  function updateDisplay(){
    //Update Images
    //playerImg.src = game.images[game.playerWeapon]
    //cpuImg.src = game.images[game.cpuWeapon]
    if(game.gameOver==='false'){
      playerImg.classList.add(game.playerWeapon)
      setTimeout(function() {
        playerImg.classList.remove(game.playerWeapon)
      }, 150)

      cpuImg.classList.add(game.cpuWeapon)
      setTimeout(function() {
        cpuImg.classList.remove(game.cpuWeapon)
      }, 150)


      playerImageWeapon.classList.add('active')
      setTimeout(function() {
        playerImageWeapon.classList.remove('active')
      }, 500)



      cpuImageWeapon.classList.add('active')
      setTimeout(function() {
        cpuImageWeapon.classList.remove('active')
      }, 500)
    }
    
    playerImageWeapon.innerText = game.playerWeapon
    playerWeaponText.innerText = game.playerWeapon

    cpuImageWeapon.innerText = game.cpuWeapon
    cpuWeaponText.innerText = game.cpuWeapon


    playerHealth.innerText = game.playerHealth
    cpuHealth.innerText = game.cpuHealth




    console.log(playerImageWeapon)

    //Update text
    //If first fight
    if(game.winner===''){
      resultText.innerText = 'Get ready to fight!'
    }else if(players[game.winner]=== 'draw'){
      //If draw
      resultText.innerText = 'Great block!!'
    }else{
      //If not a draw display winner
      resultText.innerText = players[game.winner] + ' landed a hit!!'
    }

    if(game.playerHealth === 0){
      game.gameOver = true
      console.log('CPU WINS!')
      resultText.innerText = 'You lose!'
    }else if (game.cpuHealth === 0){
      game.gameOver = true;
      console.log('PLAYER WINS!')
      resultText.innerText = 'player1 wins!'
    }

  }

  function playGame(){
    //get getCPUWeapon
    //
    game.getCPUWeapon()
    game.whoWins()
    game.updateHealth()
    updateDisplay()
    console.log(`CPU:${game.cpuWeapon} PLAYER:${game.playerWeapon} = ${players[game.winner]} `)
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
