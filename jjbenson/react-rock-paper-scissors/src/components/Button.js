import React from 'react'

const Button = ({handleClick, value}) => {
  return(
    <button key={value} onClick={handleClick} value={value}>{value}</button>
  )
}

export default Button
