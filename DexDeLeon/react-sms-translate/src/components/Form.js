import React from 'react'

const Form = ({ submitHandler, changeHandler, message, langs }) => {
  return (
    <div className="section">
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                value={message}
                onChange={changeHandler}
                name="message"
                placeholder="Enter your message here..."
                className="input is-large"
              />
            </div>
            <div className="control">
              <div className="select is-large">
                <select
                  onChange={changeHandler}
                  name="lang"
                  defaultValue="Select a language..."
                >
                  <option disabled>Select a language...</option>
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
              <button className="button is-info is-large">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
