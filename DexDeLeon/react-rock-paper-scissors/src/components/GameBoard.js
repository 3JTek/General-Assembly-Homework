import React from 'react'

const GameBoard = ({ options, handleClick }) => {
  return (
    <div id="gameBoard">
      {options.map((option, index) =>
        <button value={option.name} key={index} data-id={index} onClick={handleClick}>
          {option.name.toUpperCase()}
        </button>
      )}
    </div>
  )
}

export default GameBoard
