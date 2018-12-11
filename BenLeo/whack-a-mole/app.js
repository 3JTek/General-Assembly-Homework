document.addEventListener('DOMContentLoaded', () => {
  //RANDOM NUMBER GENERATOR
  let rng
  let playerScore = 0

  //SELECTIONS
  const passiveDivs = document.querySelectorAll('.passive')
  const activeMole = document.querySelector('.activeMole')
  const score = document.querySelector('#playerScore')


  //FUNCTIONS
  const addMole = function () {
    rng = Math.floor(Math.random()*9)
    passiveDivs[rng].classList.add('activeMole')
  }

  const removeMole = function () {
    passiveDivs[rng].classList.remove('activeMole')
  }

  const interateScore = function(e) {
    if(parseInt(e.target.id) === rng) {
      playerScore++
      score.innerText = playerScore
    }
  }

  //PROBABLY WRAP THIS IN ANOTHER FUNCTION
  addMole()
  setInterval(() => {
    removeMole()
    addMole()
  }, 1000)

  //LISTENERS
  passiveDivs.forEach((div) => div.addEventListener('click', interateScore))


})
