import React from 'react'


const Button = ({handleClick}) => {

  return (

    <div>

      <button onClick={handleClick} value='rock'>Rock</button>
      <button onClick={handleClick} value='paper'>Paper</button>
      <button onClick={handleClick} value='scissors'>Scissors</button>

    </div>
  )
}


export default Button
