import React from 'react'

const Buttons = ({handleEvent}) => {

  return (
    <div>
      <input onClick={handleEvent} type="button" value="rock" />
      <input onClick={handleEvent} type="button" value="paper" />
      <input onClick={handleEvent} type="button" value="scissors" />
    </div>
  )
}

export default Buttons
