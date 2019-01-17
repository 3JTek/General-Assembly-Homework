import React from 'react'

const Display = (props) => {

  console.log(props)
  const {currentResult, userChoice, cpuChoice, cpuScore, userScore } = props
  return (
    <div>
      <p> {currentResult}</p>
      <p> {userChoice} </p>
      <p> {cpuChoice} </p>
      <p> {userScore} </p>
      <p> {cpuScore} </p>
    </div>
  )
}


export default Display
