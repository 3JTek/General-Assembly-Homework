document.addEventListener('DOMContentLoaded', () => {
  console.log('hello')
  const option = document.querySelectorAll('.btn')
  const status = document.querySelector('#outcome')
  let rand = 0
  //const arrayOption = ['rock', 'paper','siccior']

  const logic = function(e){
    rand = Math.floor(Math.random()*3)
    console.log(rand)
    //status.value = arrayOption[rand]
    // if((rand - parseInt(e.target.id))){
    //   status.value = 'its a draw'
    // }else{
    //   console.log(parseInt(e.target.id) - rand)
    // }

  }

  option.forEach(option => {
    option.addEventListener('click', logic)
  })
})
