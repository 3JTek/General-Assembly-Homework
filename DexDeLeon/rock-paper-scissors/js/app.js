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

    check = function(choice, object, choices, action){
      if (object.name === choices[choice].name) object.action = action[0]
      else if (this.beats.includes(choices[choice].name)) object.action = action[1]
      return
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
        image: 'images/scissors.png',
        action: [
          `The lizard used devour on the paper.${sprEf}`,
          `The lizard used poison on Spock.${sprEf}`,
          'The lizards seem cool with each other; I think they might be friends now...'
        ]
      },
      {
        name: 'spock',
        beats: ['rock', 'scissors'],
        image: 'images/scissors.png',
        action: [
          `Spock used disintigrate on the rock.${sprEf}`,
          `Spock used smash on the scissors.${sprEf}`,
          'The two Spocks exchange their ideas and logical observations...'
        ]
      }
    ]

  let oppChoice = 0

  choices.forEach((choice, i) => {
    const button = document.createElement('button')
    button.innerText = `${choice.name}`.toUpperCase()
    button.setAttribute('value', choice.name)
    button.dataset.id = i

    // Each time the button is clicked
    button.addEventListener('click', function(){

      // The computer makes a random choice
      oppChoice = Math.floor(Math.random()*3)

      // Choices displayed
      computerAction.innerText = `Computer chose ${choices[oppChoice].name.toUpperCase()}`
      computerChoice.setAttribute('src', choices[oppChoice].image)
      computerChoice.style.display = 'block'
      console.log(choices[oppChoice].image)
      playerAction.innerText = `You chose ${choices[i].name.toUpperCase()}`
      playerChoice.setAttribute('src', choices[i].image)
      playerChoice.style.display = 'block'

      // choices[oppChoice].check(i)
      // ...otherwise use the object's check method to see if it is the winning choice
      if (check(oppChoice)) {
        message.innerText = 'You win 😄'
        actionMessage.innerText = choices[i].action
      } else if (choices[oppChoice].check(i)){
        message.innerText = 'You lose ☹️'
        actionMessage.innerText = choices[oppChoice].action

        // If the choices are the same, then the game is a tie...
      } else if (choices[i].name === choices[oppChoice].name){
        message.innerText = 'It\'s a tie! 😕'
        actionMessage.innerText = choices[i].action
      }
    })
    gameBoard.append(button)
    reset.innerText = 'Reset'
    reset.setAttribute('id', 'resetButton')
    reset.addEventListener('click', reloadPage)
    gameBoard.append(reset)
  })
})
