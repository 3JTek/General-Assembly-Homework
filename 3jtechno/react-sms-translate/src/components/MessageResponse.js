import React from 'react'

const MessageResponse = ({ translatedMessage }) => {
  return(
    <p>{translatedMessage && `${translatedMessage} ✅`} </p>
  )
}

export default MessageResponse
