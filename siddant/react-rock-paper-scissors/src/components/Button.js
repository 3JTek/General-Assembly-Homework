import React from 'react'


const Button = ({handelEvent, restEvent}) =>{
  return(
    <div>
      <button onClick={handelEvent}>rock</button>
      <button onClick={handelEvent}>paper</button>
      <button onClick={handelEvent}>scissors</button>
      <button onClick={restEvent}>Reset</button>

    </div>

  )
}

export default Button
