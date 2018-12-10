document.addEventListener('DOMContentLoaded', () => {

  const choices = ['worm', 'pigeon', 'shotgun']

  const cpuChoice = choices[Math.floor((Math.random() * choices.length) + 0)]

  let userChoice

  let playAgain

  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      userChoice = button.value
      compare(userChoice, cpuChoice)
      playAgain = confirm('Would you like to play again?')
      if(playAgain) {
        location.reload()
      } else {
        alert('Thanks for playing!')
      }
    })
  })

  const compare = function(userChoice, cpuChoice) {
    if(userChoice===cpuChoice) {
      alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. The result is a tie!')
    } else {
      switch(userChoice+cpuChoice){
        case 'wormshotgun': case 'shotgunworm':
          return alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. Worm crawls inside the shotgun and jams it!')
        case 'wormpigeon': case 'pigeonworm':
          return alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. Pigeon eats the worm!')
        default: return alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. Shotgun shoots the pigeon!')
      }
    }
  }
})
