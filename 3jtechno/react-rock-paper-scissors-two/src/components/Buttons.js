import React from 'react'

const Button = (probs) => {

  return (
    <button onClick={probs.handleClick} value={probs.name}>{probs.name}</button>
  )

}

export default Button
