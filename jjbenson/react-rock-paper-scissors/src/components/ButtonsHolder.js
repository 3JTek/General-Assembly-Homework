import React from 'react'

import Button from './Button.js'

const Buttons = ({choices, handleClick}) => {
  return(
    <div className="buttonHolder">
      {choices.map(val => <Button key={val} handleClick={handleClick} value={val}/>)}
    </div>
  )
}

export default Buttons
