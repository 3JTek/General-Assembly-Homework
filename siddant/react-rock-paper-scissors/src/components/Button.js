import React from 'react'


const Button = ({handelEvent}) =>{
  return(
    <div>
      <button onClick={handelEvent}>rock</button>
      <button onClick={handelEvent}>paper</button>
      <button onClick={handelEvent}>scissors</button>
      <button onClick={handelEvent}>lizard</button>
      <button onClick={handelEvent}>spock</button>
    </div>

  )
}

export default Button
