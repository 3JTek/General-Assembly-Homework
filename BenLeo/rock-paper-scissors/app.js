document.addEventListener('DOMContentLoaded', () => {

  const choices = ['rock', 'paper', 'scissors']
  const cpuChoice = choices[Math.floor((Math.random() * choices.length) + 0)]
  console.log(cpuChoice)

  let userChoice

  const buttons = document.querySelectorAll('button')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      userChoice = buttons[i].value
      compare (userChoice, cpuChoice)
    })
  }

  const compare = function(userChoice, cpuChoice) {
    if(userChoice===cpuChoice) { alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. The result is a tie!')
    } else {
      switch(userChoice+cpuChoice){
        case 'rockscissors': case 'scissorsrock':
          return alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. Rock wins!')
        case 'rockpaper': case 'paperrock':
          return alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. Paper wins!')
        default: return alert('You chose ' + userChoice + ' and your opponent chose ' + cpuChoice + '. Scissors wins!')
      }
    }
}

// compare(userChoice, cpuChoice)
})
