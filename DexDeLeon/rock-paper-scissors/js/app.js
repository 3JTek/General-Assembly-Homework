document.addEventListener('DOMContentLoaded', () => {

  const gameBoard = document.getElementById('gameBoard')
  const choices = [
    {
      name: 'rock',
      beats: 'scissors',
      check(choice){
        return this.beats === choices[choice].name
      }
    },
    {
      name: 'paper',
      beats: 'rock',
      check(choice){
        return this.beats === choices[choice].name
      }
    },
    {
      name: 'scissors',
      beats: 'paper',
      check(choice){
        return this.beats === choices[choice].name
      }
    }
  ]

  choices.forEach((choice, i) => {
    const button = document.createElement('button')
    button.innerText = `${choice.name}`.toUpperCase()
    button.setAttribute('value', choice.name)
    button.dataset.id = i

    // Each time the button is clicked
    button.addEventListener('click', function(){

      // The computer makes a random choice
      const oppChoice = Math.floor(Math.random()*3)

      // Choices logged
      console.log(`The computer chose ${choices[oppChoice].name}`)
      console.log(`You chose ${choices[i].name}`)

      // If the choices are the same, then the game is a tie...
      choices[i].name === choices[oppChoice].name ? console.log('It\'s a tie!') :
        // ...otherwise use the object's check method to see if it is the winning choice
        choices[i].check(oppChoice) ? console.log('You win') : console.log('You lose')
    })
    gameBoard.append(button)
  })
})
