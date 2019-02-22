import React from 'react'


const Buttons = ({clickHandle}) => {

  return (


    <div>
      <button className="options" onClick={clickHandle} value='Rock'>Rock</button>
      <button className="options" onClick={clickHandle} value='Paper'>Paper</button>
      <button className="options" onClick={clickHandle} value='Scissors'>Scissors</button>
      <button className="options" onClick={clickHandle} value='Reset'>Reset</button>
    </div>
  )
}

export default Buttons
