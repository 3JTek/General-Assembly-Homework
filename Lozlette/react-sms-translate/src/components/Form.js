import React from 'react'


const Form = ({ handleToChange, handleLangChange, handleMessageChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your mobile number"
        onChange={handleToChange}>
      </input>
      <input
        placeholder="Language eg. ru for Russian"
        onChange={handleLangChange}>
      </input>
      <textarea
        placeholder="Type your message here"
        onChange={handleMessageChange}>
      </textarea>
      <button>Send</button>
    </form>
  )
}

export default Form
