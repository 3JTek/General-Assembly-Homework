import React from 'react'

const Buttons = ({clickButton}) => {
  
  return (
    <div>
      <button onClick={clickButton}>Rock</button>
      <button onClick={clickButton}>Paper</button>
      <button onClick={clickButton}>Scissors</button>
    </div>
  )
}

export default Buttons
