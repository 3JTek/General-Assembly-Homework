import React from 'react'

const Buttons = ({clickButton, clickButton2, clickButton3}) => {

  return (
    <div>
      <button onClick={clickButton}>Rock</button>
      <button onClick={clickButton2}>Paper</button>
      <button onClick={clickButton3}>Scissors</button>
    </div>
  )
}

export default Buttons
