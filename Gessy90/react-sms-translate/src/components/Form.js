import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Number</label>
          <input className="input is-danger" name="to" placeholder="Number" onChange={handleChange} />
        </div>
        <div>
          <label className="label">Enter text here</label>
          <input className="input is-danger" name="message" placeholder="Type your text" onChange={handleChange} />
        </div>
        <div>
          <label onChange={handleChange}>
          Pick the Language:
            <select name="lang" >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="it">Italian</option>
              <option value="es">Spanish</option>
              <option value="ru">Russian</option>
            </select>
          </label>
        </div>

        <button className="button is-primary">Submit</button>
      </form>
    </div>
  )
}
export default Form
