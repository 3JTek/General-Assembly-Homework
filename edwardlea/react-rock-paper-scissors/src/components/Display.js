import React from 'react'

const Display = (props) => {
  return (
    <div>
      <h2>Player picked {props.playerChoice}</h2>
      <h2>Computer picked {props.computerChoice}</h2>
      <h2>{props.winner}</h2>
    </div>
  )
}

export default Display
