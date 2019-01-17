import React from 'react'

const Buttons = ({handleSubmit}) => {
  return (
    <div>
      <button onClick={handleSubmit} value="Rock">Rock</button>
      <button onClick={handleSubmit} value="Paper">Paper</button>
      <button onClick={handleSubmit} value="Scissors">Scissors</button>
    </div>
  )
}

export default Buttons
