document.addEventListener('DOMContentLoaded',() => {

  //Number of buttons
  const btnNum = 16

  //List of words
  const wordsArr = ['work it','make it','do it','makes us','harder','better','faster','stronger','more than','hour','our','never','ever','after','work is','over']

  //Array of src file names
  const srcArray = wordsArr.map(elem => elem.split(' ').join('_') + '.wav')

  //Create audio object
  const player = document.createElement('audio')

  //Get Button Container
  const container = document.querySelector('.container')

  //Store for buttons to acces later
  const buttonArray = []

  //Loop around the number of buttons
  //To create 16 buttons
  for(let i=0; i<btnNum;i++){

    //Create a button
    const button = document.createElement('button')

    //Set the text of the button
    button.innerHTML = '<div class=\'text\' data-id='+i+'>'+wordsArr[i]+'</div>'
    //set the button id and data-id
    button.id='button'+i
    button.dataset.id = i

    button.classList.add('action'+(i%3))

    //Add mouse click event listener
    button.addEventListener('click', (e) => {

      //get this Id
      const thisId = e.target.dataset.id

      //set the src to the correct file
      player.src = 'sounds/'+srcArray[thisId]

      //play sound
      player.play()

      //For each button
      buttonArray.forEach(elem => {
        //Remove 'pressed' class from all other buttons
        elem.classList.remove('pressed')
      })

      //Add 'pressed' class to this button
      buttonArray[thisId].classList.add('pressed')

      //Remove 'pressed' class after 1 second
      setTimeout(function(){
        buttonArray[thisId].classList.remove('pressed')
      }, 1000)

    })

    //Add this button to the main
    container.appendChild(button)

    // //Push button into buttonArray
    buttonArray.push(button)

  }

})
