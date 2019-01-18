document.addEventListener('DOMContentLoaded', () => {

  // --------- BUTTON SELECTORS ----------
  const btn = document.querySelectorAll('.btn')
  const sound = document.querySelector('#sound')

  //loop through each button
  btn.forEach(btn => {
  //add addEventListener to and pass in the event argue
    btn.addEventListener('click', (e) => {
      //when the button is clicked set the e.target.value and concat to sounds/....wav
      //set src attr to sounds/'+e.target.value+'
      sound.setAttribute('src','sounds/'+e.target.value+'.wav')
      sound.play()
      btn.classList.add('playing')
    })
  })

  function removeTransition(e){
    // skip if it is not a transform
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
  }

  // add elistener to each btns and pass in removeTransition()
  btn.forEach(btn => {
    btn.addEventListener('transitionend', removeTransition)
  })

})
