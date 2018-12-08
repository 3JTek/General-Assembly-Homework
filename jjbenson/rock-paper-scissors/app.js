
//Comment this out for testing
window.addEventListener('DOMContentLoaded', () => {


  const buttonsArr = document.querySelectorAll('button')
  const playerImg = document.querySelector('.player-image')
  const cpuImg = document.querySelector('.cpu-image')
  const resultText = document.querySelector('.result')


  const players = ['cpu','player','draw']
  const weaponsArr = ['rock','paper','scissors']
  const numWeapons = weaponsArr.length

  let game ={
    playerWeapon: '',
    cpuWeapon: '',
    winner: '',
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
      updateDisplay()
    }
  }


  //0 rock
  //1 Paper
  //2 Scissors
  // 0 -> 1 -> 2 -> 0









  function updateDisplay(){
    //Update Images
    playerImg.src = game.images[game.playerWeapon]
    cpuImg.src = game.images[game.cpuWeapon]

    //Update text
    //If first fight
    if(game.winner===''){
      resultText.innerText = 'Get ready to fight!'
    }else if(players[game.winner]=== 'draw'){
      //If draw
      resultText.innerText = 'It was a draw!'
    }else{
      //If not a draw display winner
      resultText.innerText = players[game.winner] + ' won!'
    }

  }

  function playGame(){
    //get getCPUWeapon
    //
    game.getCPUWeapon()
    game.whoWins()
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

      //update player weapon
      game.playerWeapon = thisValue

      //playGame
      playGame()
    })
  })



  //Comment this out for testing
})
