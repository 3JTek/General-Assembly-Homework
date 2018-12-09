document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.btn')
  const reset = document.querySelectorAll('#reset')[0]
  const content = document.querySelectorAll('p')


  let rand = 0, total =0, playerWon=0, computerWon=0, winnerIndex=0, userIndex =0
  const arrayOption = ['Rock', 'Paper','Scissor','Lizard','Spock',' ']
  //Game Rule: Winning Condition
  //rock beat siccior  = [0,2], rock beats lizard = [0, 3]
  //paper beats rock = [1,0] , paper beats spock = [1,4]
  //sissicor beats lizard = [2,3], sissicor beats paper = [2,1]
  //lizard beats spock = [3,4], lizard beats paper = [3,1]
  //spock beats Rock = [4,0], spock beats scissor = [4,2]
  const computerCondition = [[0,2],[0,3],[1,0],[1,4],[2,3],[2,1],[3,4],[3,1],[4,0],[4,2]]
  const explanation = ['smashes','crushes','covers','disproves','decapitates','cuts','poisons','eats','vaporizes','smashes', ' ']

  //game display the Winner and explanation
  const display = function(e,outcome){
    if(outcome ==='It\'s a draw both picked' || outcome ===' '){
      content[1].innerText = arrayOption[e]
      content[4].innerText = arrayOption[e]
      content[2].innerText = outcome +` ${arrayOption[e]}`
    }else{
      computerCondition.forEach((element,index) => {
        if(element.toString() === e.toString()){
          winnerIndex = index
        }
      })
      content[1].innerText = arrayOption[userIndex]
      content[4].innerText = arrayOption[rand]
      content[2].innerText = `${outcome} Won, ${arrayOption[e[0]]} ${explanation[winnerIndex]} ${arrayOption[e[1]]}`
    }
  }

  //display the score board
  const displayScore =function(){
    content[6].innerText = playerWon
    content[8].innerText = computerWon
    content[10].innerText = total


  }

  //Game logic
  const logic = function(e){
    total++
    rand = Math.floor(Math.random()*5)
    userIndex = parseInt(e.target.id)
    if(rand === userIndex){
      display(rand, 'It\'s a draw both picked')
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
  option.forEach((option,index) => {
    option.addEventListener('click', logic)
    console.log(index)
    option.style.backgroundImage = 'url(\'images/'+index+'.png\')'
    option.style.backgroundRepeat= 'no-repeat'
    option.style.backgroundSize = 'contain'
    option.style.backgroundPosition= 'center'
  })

  reset.addEventListener('click', ()=> {
    total =0, playerWon=0, computerWon=0, winnerIndex=0
    display(5,' ')
    displayScore()
  })



  // setting the game
  display(5,' ')
  displayScore()

})
