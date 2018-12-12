document.addEventListener('DOMContentLoaded', () => {
  const choices =
  [
    {name: 'rock', beats: ['scisors','lizard']},
    {name: 'paper', beats: ['rock','spock']},
    {name: 'scisors', beats: ['paper','lizard']},
    {name: 'lizard', beats: ['paper','spock']},
    {name: 'spoke', beats: ['scissors', 'rock']}
  ]
  const displayChoicePlayer1 = document.getElementById('player1Result')
  const displayChoicePlayer2 = document.getElementById('player2Result')
  const displayScorePlayer1 = document.getElementById('player1Score')
  const displayScorePlayer2 = document.getElementById('player2Score')
  const displayWhoWin = document.getElementById('winner')
  const buttons = document.querySelectorAll('.bottom button')
  const throwsSelection = document.getElementById('nbThrows')
  const resetButton = document.getElementById('reset')

  let nbOfThrows = throwsSelection.value

  function changeNbThrows(e){
    nbOfThrows = e.target.value
  }

  function findWinnerofThrow(player1, player2){
    if(player1.name === player2.name){
    } else if(player1.beats.includes(player2.name)){
      displayScorePlayer1.innerText ++
    } else{
      displayScorePlayer2.innerText ++
    }
  }

  function findWinnerOfGame(){
    if(displayScorePlayer1.innerText >= nbOfThrows){
      stopGame('Player 1')
    } else if (displayScorePlayer2.innerText >= nbOfThrows){
      stopGame('Player 2')
    }
  }

  function stopGame(winner){
    displayWhoWin.innerText = winner
    buttons.forEach(button => button.setAttribute('disabled','true'))
    resetButton.removeAttribute('disabled')
  }

  function reset(){
    resetButton.setAttribute('disabled','true')
    buttons.forEach(button => button.removeAttribute('disabled','false'))
    throwsSelection.removeAttribute('disabled')
    displayChoicePlayer1.innerText = ''
    displayChoicePlayer2.innerText = ''
    displayScorePlayer1.innerText = '0'
    displayScorePlayer2.innerText = '0'
    displayWhoWin.innerText = ''
  }

  function play(e){
    throwsSelection.setAttribute('disabled', 'true')
    const player2 = choices[Math.floor(Math.random()*5)]
    const player1 = choices[e.target.id]
    displayChoicePlayer1.innerText = player1.name
    displayChoicePlayer2.innerText = player2.name
    findWinnerofThrow(player1, player2)
    findWinnerOfGame()
  }

  buttons.forEach(button => {
    button.addEventListener('click', play)
  })

  throwsSelection.addEventListener('change', changeNbThrows)

  resetButton.addEventListener('click', reset)

})
