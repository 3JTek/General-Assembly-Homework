document.addEventListener('DOMContentLoaded', () => {
  const choices =
  [
    {name: 'rock', beats: ['scisors','lizard']},
    {name: 'paper', beats: ['rock','spock']},
    {name: 'scisors', beats: ['paper','lizard']},
    {name: 'lizard', beats: ['paper','spock']},
    {name: 'spoke', beats: ['scissors', 'rock']}
  ]

  const displayResults = document.querySelectorAll('.right h2')
  const displayChoicePlayer1 = displayResults[0]
  const displayChoicePlayer2 = displayResults[1]
  const displayWhoWin = displayResults[2]
  const buttons = document.querySelectorAll('button')

  function findWinner(player1, player2){
    console.log(player1.beats + player2.name);

    if(player1.name === player2.name){
      displayWhoWin.innerText = 'Ties'
    } else if(player1.beats.includes(player2.name)){
      displayWhoWin.innerText = 'Player 1 wins'
    } else{
      displayWhoWin.innerText = 'Player 2 wins'
    }
  }
  function play(e){
    const player2 = choices[Math.floor(Math.random()*5)]
    const player1 = choices[e.target.id]
    displayChoicePlayer1.innerText = player1.name
    displayChoicePlayer2.innerText = player2.name
    findWinner(player1, player2)
  }

  buttons.forEach(button => {
    button.addEventListener('click', play)
  })

})
