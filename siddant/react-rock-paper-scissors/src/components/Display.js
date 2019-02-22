import React from 'react'


const Button = ({player, computer, winner, playerWon, computerWon}) =>{
  return(
    <div className="result">
      <p>Player chose: <span>{player}</span> Player Wins: <span>{playerWon}</span></p>
      <p>Computer chose: <span>{computer}</span> Computer Wins: <span>{computerWon}</span></p>
      <h2>{winner}</h2>
    </div>

  )
}

export default Button
