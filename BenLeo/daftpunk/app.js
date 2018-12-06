document.addEventListener('DOMContentLoaded', () => {

  // const workItBtn = document.querySelector('button.workIt')
  // const workItAud = document.querySelector('audio.workIt')
  // workItBtn.addEventListener('click', () => {
  //   if(workItAud.paused) {
  //     workItAud.play()
  //   } else {
  //     workItAud.pause()
  //     workItAud.currentTime = 0
  //   }
  // })
  //
  // const makeItBtn = document.querySelector('button.makeIt')
  // const makeItAud = document.querySelector('audio.makeIt')
  // makeItBtn.addEventListener('click', () => {
  //   if(makeItAud.paused) {
  //     makeItAud.play()
  //   } else {
  //     makeItAud.pause()
  //     makeItAud.currentTime = 0
  //   }
  // })

  const buttons = document.getElementsByTagName('button')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      // console.log(buttons[i].parentElement.children[1])
      (buttons[i].parentElement.children[1]).play()
    })
  }

})
