import React from 'react'

const Buttons = ({handleEvent, reset}) => {

  return (
    <div>
      <input onClick={handleEvent} type="button" value="rock" />
      <input onClick={handleEvent} type="button" value="paper" />
      <input onClick={handleEvent} type="button" value="scissors" />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Buttons
