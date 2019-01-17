import React from 'react'


const Button = (props) =>{
  return(
    <div>
      <p>Player chose: <span>{props.display.player}</span> <span>{props.display.playerWon}</span></p>
      <p>Computer chose: <span>{props.display.computer}</span> <span>{props.display.computerWon}</span></p>
      <h2>{props.display.winner}</h2>
      {console.log(props)}
    </div>

  )
}

export default Button
