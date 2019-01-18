import React from 'react'

const Buttons = ({moves, handleClick}) => {
  return(
    <div>
      {moves.map((move, index) => <button
        key={index}
        onClick={handleClick}
      >{move}</button>)}
    </div>
  )
}

export default Buttons
