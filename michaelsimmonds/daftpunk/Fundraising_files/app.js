document.addEventListener('DOMContentLoaded', () => {

  //add an event listener for clicks
  //when user clicks on button, add 1 to inner-bar width %
  //when user clicks on 5, add 5 to inner-bar width %
  //when user clicks on 10, add 10 to inner-bar width %
  //take class of button clicked
  //make it a number
  //create variable tracking total progress
  //initial value of this will be 47
  //class of button should be added to this when clicked
  //this new total should then be saved to total progress variable
  //total progress should be width of inner bar

const buttonArray = document.querySelectorAll('button')
const innerBar = document.querySelector('div.inner-bar')
const totalProgress = 47


  buttonArray.forEach(button => {
    button.addEventListener('click', (e) =>
    let newProgress = (e.target.className)
      // console.log(totalProgress += (e.target.className))
      // innerBar.style.width = '50%'
      // innerBar.innerText = e.target.innerText
    )
  })
})


// function startResizing(e) {
//    box.style.width = (e.clientX) + 'px';
//    box.style.height = (e.clientY) + 'px';
// }
