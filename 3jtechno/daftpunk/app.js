document.addEventListener('DOMContentLoaded', () => {

  function playMusic(e){

    const lyric = e.target.textContent

    const song = document.querySelector('audio')
    var lyrics = lyric.toLowerCase().split(' ').join('_')
    console.log(lyrics)
    song.src = './sounds/'+ lyrics + '.wav'
    song.play()
  }

  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => {
    console.log(button);
    button.addEventListener('click', playMusic)
  })

})
