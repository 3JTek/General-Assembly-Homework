document.addEventListener('DOMContentLoaded', () => {
  console.log('hello')
  const option = document.querySelectorAll('.btn')
  const status = document.querySelector('#outcome')
  let rand = 0
  const winCondition = [[0, 1]]
  //const arrayOption = ['rock', 'paper','c']

  const logic = function(e){
    rand = Math.floor(Math.random()*3)
    console.log(`computer choice ${rand}, your ${e.target.id}` )
    //winCondition.some(elemnt => )
    console.log(`${winCondition[0].toString() === [rand, e.target.id].toString()}`)
    if(rand === parseInt(e.target.id)){
      status.value = 'its a draw'
    }else if(winCondition[0].toString() === [rand, e.target.id].toString()){
      status.value = 'some one won'

    }
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
