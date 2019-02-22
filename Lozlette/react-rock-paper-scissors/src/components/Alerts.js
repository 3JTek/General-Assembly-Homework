import React from 'react'

const Alerts = (props) => {

  return (
    <div>
      <div>
        <p className="Winner">{props.winner}</p>
      </div>
      <div>
        <p className="Player1">{props.player1Choice}</p>
      </div>
      <div>
        <p className="Player2">{props.player2Choice}</p>
      </div>
    </div>
  )
}

export default Alerts
