import React from 'react'

const Form = ({ handleSubmit, handleTextChange, handleLangChange, handleNrChange }) => {
  return (
    <form
      onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input onChange={handleNrChange} className="input is-danger" type="text" placeholder="Contact number">
          </input>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <textarea name="text" className="textarea is-warning" placeholder="Text text text" onChange={handleTextChange}>

          </textarea>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-info">

            <select onChange={handleLangChange}>
              <option defaultValue value="de">German</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary">
            Submit
        </button>
      </div>
    </form>
  )
}

export default Form
