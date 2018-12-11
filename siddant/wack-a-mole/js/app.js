document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')
  const scoredisplay = document.querySelector('#score')
  const countDisplay = document.querySelector('#countDisplay')

  let rand =0, userscore=0, count =59

  function getRandom(){
    return Math.floor( Math.random() * option.length)
  }

  function activeMole(){
    rand = getRandom()
    option[rand].classList.add('active')
    setTimeout(() => {
      option[rand].classList.remove('active')
    },850)
  }
  //console.log(option[getRandom()])


  function countdown(){
    countDisplay.textContent = count
    count--
  }


  const timerId = setInterval(() => {
    activeMole()
    countdown()
  }, 1000)


  function userClicked(e){
    if(parseInt(e.target.id) === rand){
      console.log('well done')
      userscore++
    }
    scoredisplay.innerText= `You Scored: ${userscore}`
    console.log(`score ${userscore}`)
  }

  option.forEach(option => {
    option.addEventListener('click', userClicked)
  }
  )


  setTimeout(() => {
    clearInterval(timerId)
  },60000)
})
