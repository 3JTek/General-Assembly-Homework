import React from 'react'

const Choices = (props) => {
  return(
    <div>
      <div className="player">
        <h2>Player Choice: {props.playerChoice}</h2>
      </div>
      <div className="computer">
        <h2>Computer Choice: {props.computerChoice}</h2>
      </div>
    </div>
  )
}

export default Choices
