import React from 'react'


const Button = ({display, player, computer, playerWon, computerWon}) =>{
  return(
    <div>
      <p>Player chose: <span>{player}</span> <span>{playerWon}</span></p>
      <p>Computer chose: <span>{computer}</span> <span>{computerWon}</span></p>
      <h2>{display}</h2>
    </div>

  )
}

export default Button
