import React from 'react'

const Button = ({handleClick}) => {
  return (
    <div>
      <button onClick={handleClick} value='Rock'>Rock</button>
      <button onClick={handleClick} value='Paper'>Paper</button>
      <button onClick={handleClick} value='Scissors'>Scissors</button>
      <button onClick={handleClick} value='Reset'>Reset</button>
    </div>
  )
}

export default Button
