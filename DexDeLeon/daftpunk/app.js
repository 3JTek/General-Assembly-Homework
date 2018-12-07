document.addEventListener('DOMContentLoaded', () => {

  // now realising that I could've used a loop to create all the audio tags in the HTML with the createElement function
  const audio = document.querySelectorAll('audio')

  const buttons = document.querySelectorAll('button.button')
  console.log(audio, buttons)

  function playAudio(audio){
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
      playAudio(audio[index])
    })
    button.addEventListener('mousedown', () =>{
      button.style.background = 'radial-gradient(#832a25 35%, #0f0)'
      button.style.textShadow = '1px 1px 3px #fff'
      button.style.fontSize = '1.8em'
    })
    button.addEventListener('mouseup', () =>{
      button.style.background = 'radial-gradient(#000 35%, #832a25)'
      button.style.textShadow = 'none'
      button.style.fontSize = '1em'
    })
  })

})
