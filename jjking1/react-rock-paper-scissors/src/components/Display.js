import React from 'react'

const Display = (props) => {

  console.log(props)
  const {currentResult, userChoice, cpuChoice, cpuScore, userScore } = props
  return (
    <div className='display'>
      <p> {currentResult}</p>
      <p> You chose {userChoice} </p>
      <p> Opponent Chose {cpuChoice} </p>
      <p> Your Score: {userScore} </p>
      <p> Opponent Score: {cpuScore} </p>
    </div>
  )
}


export default Display
