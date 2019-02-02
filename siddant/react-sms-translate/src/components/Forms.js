import React from 'react'

const Form = ({handleChange, handleSubmit}) =>{
  return(
    <form onSubmit={handleSubmit}>

      <div className="field">
        <label className="label">Number To</label>
        <div className="control">
          <input name="number" className="input" type="number" placeholder="0" min="0" />
        </div>
      </div>

      <div className="field">
        <label className="label">Translation</label>
        <div className="control">
          <div className="select">
            <select name="language">
              <option>French</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea name="message" className="textarea has-fixed-size" placeholder="Fixed size textarea"/>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </form>

  )
}

export default Form
