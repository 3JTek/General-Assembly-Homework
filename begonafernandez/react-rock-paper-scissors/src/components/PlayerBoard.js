import React from 'react'

const PlayerBoard = ({ type, move }) => {
  return(
    <div className='playerBoard'>
      <div>{type}</div>
      <div className='playerMove' id={move}></div>
      <div>Move</div>
    </div>
  )
}

export default PlayerBoard
