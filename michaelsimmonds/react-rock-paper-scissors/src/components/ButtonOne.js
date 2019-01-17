import React from 'react'

const ButtonOne = ({handleClick}) => {
  return (
    <form>
      <button value='Rock' onClick={handleClick}>Rock</button>
      <button value='Paper' onClick={handleClick}>Paper</button>
      <button value='Scissors' onClick={handleClick}>Scissors</button>
    </form>
  )
}

export default ButtonOne
