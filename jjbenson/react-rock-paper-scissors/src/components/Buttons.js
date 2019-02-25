import React from 'react'

import Button from './Button.js'

const Buttons = ({buttonData: {choices, handleClick }}) => {
  return(
    choices.map(val => <Button key={val} handleClick={handleClick} value={val}/>)
  )
}

export default Buttons
