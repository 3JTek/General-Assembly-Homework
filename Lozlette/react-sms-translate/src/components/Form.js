import React from 'react'


const Form = ({ handleToChange, handleLangChange, handleMessageChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input className="input is-info is-rounded"
            placeholder="Enter your mobile number"
            onChange={handleToChange}>
          </input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input is-info is-rounded"
            placeholder="Language eg. ru for Russian"
            onChange={handleLangChange}>
          </input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea is-info is-rounded"
            placeholder="Type your message here"
            rows="10"
            onChange={handleMessageChange}>
          </textarea>
        </div>
      </div>
      <button className="button is-info">Send</button>
    </form>
  )
}

export default Form
