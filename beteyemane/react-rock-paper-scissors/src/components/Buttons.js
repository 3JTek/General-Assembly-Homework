import React from 'react'

const Buttons = ({handleSubmit}) => {
  return (
    <div>
      <header>Rock Paper Scissors</header>
      <main>
        <button onClick={handleSubmit} value="Rock" className="choice" id="rock">Rock</button>
        <button onClick={handleSubmit} value="Paper" className="choice" id="paper">Paper</button>
        <button onClick={handleSubmit} value="Scissors" className="choice" id="scissors">Scissors</button>
      </main>
    </div>
  )
}

export default Buttons
