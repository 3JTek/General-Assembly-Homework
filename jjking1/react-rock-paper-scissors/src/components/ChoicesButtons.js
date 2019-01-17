import React from 'react'

const ChoicesButtons = ({handleCombat}) => {
  return(
    <div>
      <button onClick={handleCombat} value='rock'>rock</button>
      <button onClick={handleCombat} value='paper'>paper</button>
      <button onClick={handleCombat} value='scissors'>scissors</button>
    </div>
  )
}


export default ChoicesButtons
