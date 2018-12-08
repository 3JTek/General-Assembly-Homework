document.addEventListener('DOMContentLoaded', () => {

  const message = document.getElementById('message')
  const gameBoard = document.getElementById('gameBoard')
  const choices = [
    {
      name: 'rock',
      beats: 'scissors',
      image: `images/${this.name}.png`,
      check(choice){
        return this.beats === choices[choice].name
      }
    },
    {
      name: 'paper',
      beats: 'rock',
      image: `images/${this.name}.png`,
      check(choice){
        return this.beats === choices[choice].name
      }
    },
    {
      name: 'scissors',
      beats: 'paper',
      image: `images/${this.name}.png`,
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
      choices[i].name === choices[oppChoice].name ? message.innerText = 'It\'s a tie!' :
        // ...otherwise use the object's check method to see if it is the winning choice
        choices[i].check(oppChoice) ? message.innerText = 'You win' : message.innerText = 'You lose'
    })
    gameBoard.append(button)
  })
})
