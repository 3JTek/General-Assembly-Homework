document.addEventListener('DOMContentLoaded', () => {
  //getting scores from HTML
  const userSpan = document.getElementById('user-score')
  const compSpan = document.getElementById('comp-score')
  //result
  const result = document.querySelector('#result > p')
  //buttons
  const rock = document.getElementById('r')
  const paper = document.getElementById('p')
  const scissors = document.getElementById('s')
  const lizard = document.getElementById('l')
  const spock = document.getElementById('x')
  const reset = document.querySelector('.reset')
  //scores

  let userScore = 0
  let compScore = 0

  function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'x']
    const randomNo = Math.floor(Math.random() * 5)
    return choices[randomNo]
  }

  function convertToWord(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 'p') return 'Paper'
    if (letter === 's') return 'Scissors'
    if (letter === 'l') return 'Lizard'
    return 'Spock'
  }

  function win(user, comp) {
    userScore++
    userSpan.innerHTML= ' ' + userScore + ' '
    compSpan.innerHTML = ' ' + compScore + ' '
    result.innerHTML = `You win! ${convertToWord(user)} beats ${convertToWord(comp)}. `
  }

  function lose(user, comp) {
    compScore++
    userSpan.innerHTML= ' ' + userScore + ' '
    compSpan.innerHTML = ' ' + compScore + ' '
    result.innerHTML = `Computer wins! ${convertToWord(comp)} beats ${convertToWord(user)}.`
  }

  function draw(user, comp) {
    result.innerHTML = `It's a draw! ${convertToWord(user)} equals ${convertToWord(comp)}.`
  }

  function game (userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
      case 'rl':
      case 'lx':
      case 'xs':
      case 'sl':
      case 'lp':
      case 'px':
      case 'xr':
        win(userChoice, computerChoice)
        break
      case 'rp':
      case 'ps':
      case 'sr':
      case 'lr':
      case 'xl':
      case 'sx':
      case 'ls':
      case 'pl':
      case 'xp':
      case 'rx':
        lose(userChoice, computerChoice)
        break
      case 'rr':
      case 'pp':
      case 'ss':
      case 'll':
      case 'xx':
        draw(userChoice, computerChoice)
        break
    }
  }

  game()

  function main () {
    rock.addEventListener('click', () => game('r'))
    paper.addEventListener('click', () => game('p'))
    scissors.addEventListener('click', () => game('s'))
    lizard.addEventListener('click', () => game('l'))
    spock.addEventListener('click', () => game('x'))
    reset.addEventListener('click', () => gameOver())
  }

  main()

  function gameOver () {
    userScore = 0 + ' '
    compScore = ' ' + 0
    userSpan.innerHTML= userScore
    compSpan.innerHTML = compScore
    result.innerHTML = 'Make your move!'
  }

})
