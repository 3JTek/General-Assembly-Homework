document.addEventListener('DOMContentLoaded', () => {

  function playMusic(e){

    const lyric = e.target.textContent.toLowerCase().split(' ').join('_')
    const track = document.querySelector('audio')
    track.src = './sounds/'+ lyric + '.wav'
    track.play()
  }

  function displayFillMurray(e){
    const buttons = document.querySelectorAll('button')

    let reset = 0
    buttons.forEach(button => reset = button.style.backgroundImage ? reset + 1 : reset)
    if(reset === 16){
      buttons.forEach(button => button.style.backgroundImage='')
      buttons.forEach(button => button.classList.toggle('lyricsHidden'))
    }

    const imageNb = (Math.floor(Math.random()*100)+1) + 100
    const imageUrl = `http://www.fillmurray.com/${imageNb}/${imageNb}`
    e.target.style.backgroundImage = `url(${imageUrl})`
    e.target.classList.toggle('lyricsHidden')
  }

  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', displayFillMurray)
    button.addEventListener('click', playMusic)

  })
})
