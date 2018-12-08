document.addEventListener('DOMContentLoaded', () => {

  let oppChoice = Math.floor(Math.random()*3)

  const win = (choice) => this.beats === choices[choice.name] ? 1 : 0

  const choices = [
    {
      name: 'rock',
      beats: 'scissors',
      check: win(oppChoice)
    },
    {
      name: 'paper',
      beats: 'rock',
      check: win(oppChoice)
    },
    {
      name: 'scissors',
      beats: 'paper',
      check: win(oppChoice)
    }
  ]

})
