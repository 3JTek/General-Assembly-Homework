
document.addEventListener('DOMContentLoaded',() => {

  const workIt = document.getElementById('button1')
  console.log(workIt)

  const makeIt = document.getElementById('button2')
  console.log(makeIt)

  const doIt = document.getElementById('button3')
  console.log(doIt)

  const makesUs = document.getElementById('button4')
  console.log(makesUs)

  workIt.addEventListener('click', playWorkIt)
  makeIt.addEventListener('click', playMakeIt)
  doIt.addEventListener('click', playDoIt)
  makesUs.addEventListener('click', playMakeUs)

  function playWorkIt (){
    const workItAudio = document.querySelector('#audio1')
    workItAudio.play()
  }

  function playMakeIt (){
    const makeItAudio = document.querySelector('#audio2')
    makeItAudio.play()
  }
  function playDoIt (){
    const doItAudio = document.querySelector('#audio3')
    doItAudio.play()
  }
  function playMakeUs (){
    const makeUsAudio = document.querySelector('#audio4')
    makeUsAudio.play()
  }

})


// const MakeIt = document.querySelector('button')
// const button = document.querySelector('button')
// const button = document.querySelector('button')
// //document.addEventListner('DOMContentLoaded', () => {
//   const buttons = document.querySelectorAll('button')
//
//   const styleButton = (e) => {
//     e.target.style.fontWeight = 'bold'
//     e.target.style.color = 'white'
//     e.target.style.backgroundcolor = 'red'
//   }
//
//   buttons.forEach(button=> {
//     button.addEventListner('click', styleButton)
//   })
//
//   buttons[0].addEventListner('click', () => console.log('hahahhaa'))
// })
