import React from 'react'

const MessageResponse = ({ translatedMessage }) => {
  return(
    <section className="section">
      <div className="container">
        <h2 className="subtitle">{translatedMessage && `${translatedMessage} ✅`}</h2>
      </div>
    </section>
  )
}

export default MessageResponse
