import React from 'react'

const Successful = ({submitted}) => {
  if(!submitted) return null
  if (submitted) {
    return(
      <div className="container">
        <div className="box has-text-centered">
          <p>Your text has been sent</p>
        </div>
      </div>
    )
  }
}

export default Successful
