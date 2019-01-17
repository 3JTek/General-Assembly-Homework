import React from 'react'

const ButtonOne = ({handleClick}) => {
  return (
    <form>
      <button value='rock' onClick={handleClick}>Rock</button>
      <button value='paper' onClick={handleClick}>Paper</button>
      <button value='scissors' onClick={handleClick}>Scissors</button>
    </form>
  )
}


export default ButtonOne
