import React from 'react'

const DrawResults = ({playerChoice, cpuChoice, winnerText}) => {
  return(
    <div>
      <h1 id="player">Player Choice: {playerChoice}</h1>
      <h1 id="cpu">Computer Choice: {cpuChoice}</h1>
      <h1 id="winner">{winnerText}</h1>
    </div>
  )
}

export default DrawResults
