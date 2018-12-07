document.addEventListener('DOMContentLoaded', () => {
  const choices = [{name: 'rock', beat: 'scisors'},{name: 'paper', beat: 'rock'},{name: 'scisors', beat: 'paper'}]
  const displayResults = document.querySelectorAll('span')
  const buttons = document.querySelectorAll('button')

  function play(e){
    const player2Play = choices[Math.floor(Math.random()*3)]
    const player1Play = choices[e.target.id]
    displayResults[0].innerText = player1Play.name
    displayResults[1].innerText = player2Play.name
    if(player1Play.name === player2Play.name){
      displayResults[2].innerText = 'Ties'
    } else if(player1Play.beat === player2Play.name){
      displayResults[2].innerText = 'Player 1 wins'
    } else{
      displayResults[2].innerText = 'Player 2 wins'
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', play)
  })

})
