import React from 'react'

const Button = ({handelEvent, restEvent, choices}) =>{
  return(
    <div>
      {choices.map((element,index) => <button key={index} onClick={handelEvent}>{element}</button>)}
      <button onClick={restEvent}>Reset</button>
    </div>
  )
}

export default Button
