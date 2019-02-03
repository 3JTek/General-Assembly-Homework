import React from 'react'

const Form = ({ handleSubmit }) => {
  return (
    <form>
      <div className="field">
        <div className="control">
          <textarea className="textarea is-warning" placeholder="Warning textarea">
            Enter text to translate
          </textarea>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-info">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
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
