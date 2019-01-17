import React from 'react'

const GameButtons = ({ handleClick }) => {
  return(
    <div className='console'>
      <h3>Choose your weapon</h3>
      <div className='weapons'>
        <div onClick={handleClick} className="weapon" id="paper">
          <img id="paper"src= "./assets/paper.png"/>
        </div>
        <div onClick={handleClick} className="weapon" id="rock">
          <img id="rock" src= "./assets/rock.png"/>
        </div>
        <div onClick={handleClick} className="weapon" id="scissors">
          <img id="scissors" src= "./assets/scissors.png"/>
        </div>
      </div>
    </div>
  )
}
export default GameButtons
