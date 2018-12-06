document.addEventListener('DOMContentLoaded', () => {

  console.log('hello')

  const buttons = document.querySelectorAll('button')

  function playMusic(e) {
    const lyrics = e.target.textContent
    var wordToWav = lyrics.toLowerCase().split(' ').join('_')
    const song = document.querySelector('audio')
    song.src = './sounds/' + wordToWav + '.wav'
    console.log(wordToWav)
    song.play()
  }

  buttons.forEach(button => {
    button.addEventListener('click', playMusic)
  })

})