import React from 'react'

const Form = ({ submitHandler, changeHandler, message, langs }) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="field">
        <div className="control">
          <input
            value={message}
            onChange={changeHandler}
            name="message"
          />
        </div>
      </div>
      <div className="field">
        <div className="select">
          <label className="label">Select a language</label>
          <div className="control">
            <select
              onChange={changeHandler}
              name="lang"
            >
              { Object.keys(langs).map((lang, i) =>
                <option
                  key={i}
                  value={lang}
                >
                  {langs[lang]}
                </option>
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-info">Send Message</button>
        </div>
      </div>
    </form>
  )
}

export default Form
