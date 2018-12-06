document.addEventListener('DOMContentLoaded',() => {

  const btnNum = 16

  //LIST WORDS
  const wordsArr = ['work it','make it','do it','makes us','harder','better','faster','stronger','more than','hour','our','never','ever','after','work is','over']

  //Array of src file names
  const srcArray = wordsArr.map(elem => elem.split(' ').join('_') + '.wav')

  const player = document.createElement('audio')

  //Get Button Container
  const container = document.querySelector('.container')

  //CREATE 16 BUTTONS
  // const buttonArray = []

  for(let i=0; i<btnNum;i++){
    //Create a button
    const button = document.createElement('button')

    //Add this buttons word
    button.innerText = wordsArr[i]

    //set the button id
    button.dataset.id = i

    //Add mouse click event listener
    button.addEventListener('click', (e) => {

      //set the src to the correct file
      player.src = 'sounds/'+srcArray[e.target.dataset.id]

      //play sound
      player.play()
    })

    //Add thi button to the main
    container.appendChild(button)
    //
    // //Puch button into buttonArray
    // buttonArray.push(button)
  }


})
