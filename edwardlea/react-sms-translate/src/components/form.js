import React from 'react'

const Form = ({ handleSubmit, handleChange, to, message, lang }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">To</label>
        <div className="control">
          <input className="input" onChange={handleChange} value={to} name="to" type="text" placeholder="Telephone Number" />
        </div>
      </div>
      <div className="field">
        <label className="label">Langage</label>
        <div className="control">
          <div className="select">
            <select className="input" onChange={handleChange} value={lang} name="lang" type="text" placeholder="Language">
              <option>Select dropdown</option>
              <option value="en">English</option>
              <option value="bn">Bengali</option>
              <option value="zh">Chinese</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="pl">Polish</option>
              <option value="es">Spanish</option>
              <option value="gr">Greek</option>
              <option value="it">Italian</option>

            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <textarea className="textarea" name="message" onChange={handleChange} value={message} placeholder="e.g. Hello world"></textarea>
      </div>
      <div className="control">
        <button className="button is-dark">Submit</button>
      </div>
    </form>
  )
}

export default Form
