document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelectorAll('audio')
  const buttons = document.querySelectorAll('button')
  console.log(audio, buttons)

  const styleButton = (e) => {
    e.target.style.fontWeight = 'bold'
    e.target.style.color = 'white'
    e.target.style.backgroundColor = 'red'
  }


  function play(audio){
    if(audio.paused) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }

  buttons.forEach(function(button, index){
    console.log(index)
    console.log(audio[index])
    button.addEventListener('click', () => {
      play(audio[index])
    })
  })

})
