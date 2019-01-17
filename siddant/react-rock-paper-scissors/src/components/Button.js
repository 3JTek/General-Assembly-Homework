import React from 'react'


const Button = ({handelEvent, restEvent, choices}) =>{
  return(
    <div>
      {choices.map((elemnr,index) => <button key={index} onClick={handelEvent}>{elemnr}</button>)}
      <button onClick={restEvent}>Reset</button>

    </div>

  )
}

export default Button
