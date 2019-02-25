import React from 'react'

const Choices = (props) => {
  return(
    <div>
      <div className="player">
        <h2>You Chose: {props.playerChoice}</h2>
      </div>
      <div className="computer">
        <h2>Computer Chose: {props.computerChoice}</h2>
      </div>
    </div>
  )
}

export default Choices
