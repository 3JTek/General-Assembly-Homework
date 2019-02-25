import React from 'react'

const Choice = ({ id, image, choice, message }) => {
  return (
    <div className={id + ' choice'}>
      <img src={image} alt={choice} />
      <h3>{message}</h3>
    </div>
  )
}

export default Choice
