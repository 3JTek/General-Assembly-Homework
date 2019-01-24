import React from 'react'

const DisplayTime = ({ timeWatched }) => {
  return(
    <h1 className="title is-1"> {(Math.round(timeWatched / 6)) / 10}h </h1>
  )
}



export default DisplayTime
