import React from 'react'

// import Button from './Button.js'

const Buttons = ({choices, handleClick, handleReset }) => {
  return(
    <div className="buttonHolder">
      {/*choices.map(val => <Button key={val} handleClick={handleClick} value={val}/>)*/}
      {choices.map(val => <button key={val} onClick={handleClick} value={val}>{val}</button>)}
      <button onClick={handleReset} className='reset'>Reset</button>
    </div>
  )
}

export default Buttons
