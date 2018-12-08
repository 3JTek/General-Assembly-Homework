document.addEventListener('DOMContentLoaded', () => {
//
  const userSpan = document.getElementById('user-score')
  const compSpan = document.getElementById('comp-score')
//
  const scoreboard = document.querySelector('.scoreboard')
  const result = document.querySelector('#result > p')
  //buttons
  const rock = document.getElementById('r')
  const paper = document.getElementById('p')
  const scissors = document.getElementById('s')
  const reset = document.querySelector('.reset')
  //scores
  let userScore = 0
  let compScore = 0

  function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNo = Math.floor(Math.random() * 3)
    return choices[randomNo]
  }

  function convertToWord(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 'p') return 'Paper'
    return 'Scissors'
  }


  function win(user, comp) {
    userScore++
    userSpan.innerHTML= userScore
    compSpan.innerHTML = compScore
    result.innerHTML = convertToWord(user) + ' beats ' + convertToWord(comp) + '. You win!'
  }

  function lose() {
    console.log('Youve lost!')
  }

  function draw() {
    console.log('Its a draw')
  }

  function game (userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        win(userChoice, computerChoice)
        break
      case 'rp':
      case 'ps':
      case 'sr':
        lose(userChoice, computerChoice)
        break
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice, computerChoice)
        break
    }
  }
  game()

  function main () {

    rock.addEventListener('click', function () {
      game('r')
    })

    paper.addEventListener('click', function () {
      game('p')
    })

    scissors.addEventListener('click', function () {
      game('s')
    })
  }


  main()




})
