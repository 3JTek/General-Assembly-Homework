import React from 'react'

const Alerts = (player1Choice, player2Choice, {makeChoice, findWinner}) => {

  return (
    <div>
      <div>
        <p className="Winner">{findWinner(player1Choice, player2Choice)}</p>
      </div>
      <div>
        <p className="Player1">{}</p>
      </div>

      <div>
        <p className="Player2">{makeChoice}</p>
      </div>
    </div>
  )
}

export default Alerts
