document.addEventListener('DOMContentLoaded', () => {


  console.log('hello')

  const buttons = document.querySelectorAll('button')

  function playMusic(e) {
    const lyrics = e.target.textContent
    var newLyric = lyrics.toLowerCase().split('').join('')
    const song = document.querySelector('audio')
    song.src = './sounds/' + newLyric + '.wav'
    song.play()
  }

  buttons.forEach(button => {
    button.addEventListener('click', playMusic)
  })

})