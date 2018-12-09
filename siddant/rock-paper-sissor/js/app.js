document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.btn')
  const reset = document.querySelectorAll('#reset')[0]

  let rand = 0, total =0, playerWon=0, computerWon=0, average=0, winner=0
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
          winner = index
          return index
        }
      })
      console.log(`${outcome} Won, ${arrayOption[e[0]]} ${explanation[winner]} ${arrayOption[e[1]]}`)
    }
  }

  //display the score board
  const displayScore =function(user, computer, total){
    average =  playerWon / total
    console.log(`The total outcome is You has won ${user} Games`)
    console.log(`The Computer has won ${computer} Games`)
    console.log(`The total game played is ${total}`)
    if(isFinite(average)){
      console.log(`Your Average win-rate is  ${average.toFixed(2)}`)
    }else{
      console.log(`Your Average win-rate is  ${0}`)
    }
  }

  //Game logic
  const logic = function(e){
    total++
    rand = Math.floor(Math.random()*5)
    if(rand === parseInt(e.target.id)){
      display(rand, 'draw')
    }else if(computerCondition.some(elem => elem.toString() === [rand, e.target.id].toString())){
      computerWon++
      display([rand, e.target.id], 'Computer')
    }else{
      playerWon++
      display([e.target.id,rand], 'You')
    }
    displayScore(playerWon, computerWon, total)
  }

  //Event Listner
  option.forEach(option => {
    option.addEventListener('click', logic)
  })

  reset.addEventListener('click', ()=> {
    console.log('hello')
    console.log(`computer won ${computerWon}, your ${playerWon}, ${total} , ${average}`  )
    total =0, playerWon=0, computerWon=0, average=0, winner=0
  })

})
