import React from 'react'


const Buttons = ({humanChoice}) => {
  console.log(humanChoice)
  return (
    <div>
      <button onClick={humanChoice}>Rock</button>
      <button onClick={humanChoice}>Paper</button>
      <button onClick={humanChoice}>Scissors</button>
    </div>
  )
}


export default Buttons
