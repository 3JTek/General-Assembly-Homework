import React from 'react'

const Buttons = (props) => {
  return(
    <div className="buttons">
      <button value="rock" onClick={props.handleChoice}>Rock</button>
      <button value="paper" onClick={props.handleChoice}>Paper</button>
      <button value="scissors" onClick={props.handleChoice}>Scissors</button>
    </div>
  )
}

export default Buttons
