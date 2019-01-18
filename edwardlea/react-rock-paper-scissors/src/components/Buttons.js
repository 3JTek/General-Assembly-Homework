import React from 'react'

const Buttons = ({ handleChoice, resetGame }) => {
  return (
    <div className="buttons">
      <div>
        <button value="rock" onClick={handleChoice}>Rock</button>
        <button value="paper" onClick={handleChoice}>Paper</button>
        <button value="scissors" onClick={handleChoice}>Scissors</button>
      </div>
      <div>
        <button id="reset" onClick={resetGame}>Reset</button>
      </div>
    </div>
  )
}

export default Buttons
