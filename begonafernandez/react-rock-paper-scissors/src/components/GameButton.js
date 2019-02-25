import React from 'react'

const GameButton = ({handleClick, id, src}) => {
  return(
    <div onClick={handleClick} className="weapon" id={id}>
      <img id={id} src= {src}/>
    </div>
  )
}
export default GameButton
