import React from 'react'

const Buttons = ({handleChoice, resetGame}) => {
  return (
    <div className="buttons">
      <button value="rock" onClick={handleChoice}>Rock</button>
      <button value="paper" onClick={handleChoice}>Paper</button>
      <button value="scissors" onClick={handleChoice}>Scissors</button>
      <button id="reset" onClick={resetGame}>Reset</button>
    </div>
  )
}

export default Buttons
