import React from 'react'

const Buttons = ({clickButton, makeChoice}) => {

  return (
    <div>

      <button onClick={clickButton, makeChoice}>Rock</button>
      <button onClick={clickButton, makeChoice}>Paper</button>
      <button onClick={clickButton, makeChoice}>Scissors</button>
    </div>
  )
}

export default Buttons
