import React from 'react'

import GameButton from './GameButton'

const GameButtons = ({ handleClick }) => {
  return(
    <div className='console'>
      <h3>Choose your weapon</h3>
      <div className='weapons'>
        <GameButton handleClick={handleClick} id={'paper'} src={'./assets/paper.png'}/>
        <GameButton handleClick={handleClick} id={'rock'} src={'./assets/rock.png'}/>
        <GameButton handleClick={handleClick} id={'scissors'} src={'./assets/scissors.png'}/>
      </div>
    </div>
  )
}
export default GameButtons
