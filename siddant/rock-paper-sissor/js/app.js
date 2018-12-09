document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.btn')
  const reset = document.querySelectorAll('#reset')[0]

  let rand = 0, total =0, playerWon=0, computerWon=0, winnerIndex=0, userIndex =0
  const arrayOption = ['Rock', 'Paper','Scissor','Lizard','Spock']
  //Game Rule: Winning Condition
  //rock beat siccior  = [0,2], rock beats lizard = [0, 3]
  //paper beats rock = [1,0] , paper beats spock = [1,4]
  //sissicor beats lizard = [2,3], sissicor beats paper = [2,1]
  //lizard beats spock = [3,4], lizard beats paper = [3,1]
  //spock beats Rock = [4,0], spock beats scissor = [4,2]
  const computerCondition = [[0,2],[0,3],[1,0],[1,4],[2,3],[2,1],[3,4],[3,1],[4,0],[4,2]]
  const explanation = ['smashes','crushes','covers','disproves','decapitates','cuts','poisons','eats','vaporizes','smashes']

  //game display the Winner and explanation
  const display = function(e,outcome){
    if(outcome ==='draw'){
      console.log(`It's a draw both picked ${arrayOption[e]}`)
    }else{
      computerCondition.forEach((element,index) => {
        if(element.toString() === e.toString()){
          winnerIndex = index
        }
      })
      console.log(`${outcome} Won, ${arrayOption[e[0]]} ${explanation[winnerIndex]} ${arrayOption[e[1]]}`)
    }
  }

  //display the score board
  const displayScore =function(){
    console.log(`The total outcome is You have won ${playerWon} Games`)
    console.log(`The Computer have won ${computerWon} Games`)
    console.log(`The total game played is ${total}`)
    console.log(`The computer index ${rand}`)
    console.log(`human index  ${userIndex}`)

  }

  //Game logic
  const logic = function(e){
    total++
    rand = Math.floor(Math.random()*5)
    userIndex = parseInt(e.target.id)
    console.log(`You Picked ${arrayOption[userIndex]} Computer Picked ${arrayOption[rand]} `)
    if(rand === userIndex){
      display(rand, 'draw')
    }else if(computerCondition.some(elem => elem.toString() === [rand, userIndex].toString())){
      computerWon++
      display([rand, userIndex], 'Computer')
    }else{
      playerWon++
      display([userIndex,rand], 'You')
    }
    displayScore()
  }

  //Event Listner
  option.forEach(option => {
    option.addEventListener('click', logic)
  })

  reset.addEventListener('click', ()=> {
    console.log(`computer won ${computerWon}, you Won ${playerWon}, ${total} `)
    total =0, playerWon=0, computerWon=0, winnerIndex=0
  })

})
