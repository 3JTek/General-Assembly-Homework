import React from 'react'

const ChoicesButtons = ({handleCombat, reset}) => {
  return(
    <div>
      <button onClick={handleCombat} value='rock'>rock</button>
      <button onClick={handleCombat} value='paper'>paper</button>
      <button onClick={handleCombat} value='scissors'>scissors</button>
      <div>
        <button className='reset' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}


export default ChoicesButtons
