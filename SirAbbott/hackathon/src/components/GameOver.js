import React from 'react'


const GameOver = (score) => {
  return(
    <div className="gameover-screen">
      <h2>Game Over</h2>
      <h3><strong>Your score was {this.state.score}</strong></h3>
      <Link className="play-again" to="/"> Play Again </Link>
    </div>
  )
}

export default GameOver
