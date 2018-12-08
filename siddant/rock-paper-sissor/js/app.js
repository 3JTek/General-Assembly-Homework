document.addEventListener('DOMContentLoaded', () => {
  console.log('hello')
  const option = document.querySelectorAll('.btn')
  const status = document.querySelector('#outcome')
  let rand = 0
  const computerCondition = [[1, 0],[2,1],[0,2]]
  const arrayOption = ['rock', 'paper','scissor']
  //rock beat siccior  = [0,2]
  //sissicor beats paper = [2,1]
  //paper beats rock = [1,0]
  const logic = function(e){
    rand = Math.floor(Math.random()*3)
    //winCondition.some(elemnt => )

    if(rand === parseInt(e.target.id)){
      console.log('it\'s a draw')
      console.log(`computer choice ${arrayOption[rand]}, your ${arrayOption[e.target.id]}` )

    }else if(computerCondition.some(elem => elem.toString() === [rand, e.target.id].toString())){
      console.log('computer won')
      console.log(`computer choice ${arrayOption[rand]}, your ${arrayOption[e.target.id]}` )
    }else{
      console.log('you won')
      console.log(`computer choice ${arrayOption[rand]}, your ${arrayOption[e.target.id]}` )

    }


  }

  option.forEach(option => {
    option.addEventListener('click', logic)
  })
})
