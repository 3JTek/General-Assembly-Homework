document.addEventListener('DOMContentLoaded', () => {

  function playAudio(e) {
    const lyrics = e.target.textContent
    var wordToWav = lyrics.toLowerCase().split(' ').join('_')
    const song = document.querySelector('audio')
    song.src = './sounds/' + wordToWav + '.wav'
    song.play()
  }

  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', playAudio)
  })

})