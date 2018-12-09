document.addEventListener('DOMContentLoaded', () => {

  const message = document.getElementById('message'),
    gameBoard = document.getElementById('gameBoard'),
    reset = document.createElement('button'),
    reloadPage = () => window.location.reload(),
    playerAction = document.querySelector('h3.player.choiceLabel'),
    playerChoice = document.querySelector('div.player.choice img'),
    computerAction = document.querySelector('h3.computer.choiceLabel'),
    computerChoice = document.querySelector('div.computer.choice img'),
    actionMessage = document.querySelector('#actionMessage'),
    sprEf = '\nIt\'s super effective!',

    check = function(choice1, choice2){
      return choice1.beats.includes(choice2.name)
    },

    getAction = function(choice1, choice2){
      return choice1.name === choice2.name ? choice1.action[2] : choice1.action[choice1.beats.indexOf(choice2.name)]
    },

    choices = [
      {
        name: 'rock',
        beats: ['scissors', 'lizard'],
        image: 'images/rock.png',
        action: [
          `The rock used body slam on the scissors.${sprEf}`,
          `The rock used crush on the lizard.${sprEf}`,
          'The rocks smash against each other, but nothing happens...'
        ]
      },
      {
        name: 'paper',
        beats: ['rock', 'spock'],
        image: 'images/paper.png',
        action: [
          `The paper used cover on the rock.${sprEf}`,
          `The paper used disprove on Spock.${sprEf}`,
          'The two sheets of paper lie awkwardly on top of each other, but nothing happens...'
        ]
      },
      {
        name: 'scissors',
        beats: ['paper', 'lizard'],
        image: 'images/scissors.png',
        action: [
          `The scissors used cut on the paper.${sprEf}`,
          `The scissors used decapitate on the lizard.${sprEf}`,
          'The scissors snip angrily at each other, but nothing happens...'
        ]
      },
      {
        name: 'lizard',
        beats: ['paper', 'spock'],
        image: 'images/lizard.png',
        action: [
          `The lizard used devour on the paper.${sprEf}`,
          `The lizard used poison on Spock.${sprEf}`,
          'The lizards seem cool with each other; I think they might be friends now...'
        ]
      },
      {
        name: 'spock',
        beats: ['rock', 'scissors'],
        image: 'images/spock.png',
        action: [
          `Spock used disintigrate on the rock.${sprEf}`,
          `Spock used smash on the scissors.${sprEf}`,
          'The two Spocks exchange their ideas and logical observations...'
        ]
      }
    ]

  choices.forEach((choice, i) => {
    const button = document.createElement('button')
    button.innerText = `${choice.name}`.toUpperCase()
    button.setAttribute('value', choice.name)
    button.dataset.id = i

    // Each time the button is clicked
    button.addEventListener('click', function(){

      // Assign that button's value as the player's choice
      const plChoice = choices[i]
      // The computer makes a random choice
      const oppChoice = choices[Math.floor(Math.random()*5)]

      // Choices displayed
      computerAction.innerText = `Computer chose ${oppChoice.name.toUpperCase()}`
      computerChoice.setAttribute('src', oppChoice.image)
      computerChoice.style.display = 'block'

      playerAction.innerText = `You chose ${plChoice.name.toUpperCase()}`
      playerChoice.setAttribute('src', choices[i].image)
      playerChoice.style.display = 'block'

      // Check if the game is a tie
      if (plChoice.name === oppChoice.name){
        message.innerText = 'It\'s a tie! 😕'
        actionMessage.innerText = getAction(plChoice, oppChoice)

      // Check if the player's choice is the winning choice
      } else if (check(plChoice, oppChoice)) {
        // if it is the winner then display the appropriate messages
        message.innerText = 'You win!! 😄'
        actionMessage.innerText = getAction(plChoice, oppChoice)

      } else if (check(oppChoice, plChoice)){
        // otherwise, it's a losing choice, display the appropriate messages
        message.innerText = 'You lose... 😭'
        actionMessage.innerText = getAction(oppChoice, plChoice)
      }
    })
    gameBoard.append(button)
    reset.innerText = 'Reset'
    reset.setAttribute('id', 'resetButton')
    reset.addEventListener('click', reloadPage)
    gameBoard.append(reset)
  })
})
