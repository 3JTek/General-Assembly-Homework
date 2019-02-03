import React from 'react'

const Form = ({handleChange, handleSubmit, langauges}) =>{
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Number To</label>
        <div className="control">
          <input onChange={handleChange} name="to" className="input is-medium" type="number" placeholder="0" min="0" />
        </div>
      </div>

      <div className="field">
        <label className="label">Translation</label>
        <div className="control">
          <div className="select">
            <select name="lang" onChange={handleChange}>
              <option value=''>Please Pick a languge</option>
              {Object.keys(langauges).map(lang =>
                <option key={lang} value={lang}>{langauges[lang]}</option>
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea  onChange={handleChange} name="message" className="textarea has-fixed-size" placeholder="Fixed size textarea"/>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </form>

  )
}

export default Form
