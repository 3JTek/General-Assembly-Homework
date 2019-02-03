import React from 'react'

const Form = ({ submitHandler, changeHandler, message, langs, phone, button, status }) => {
  return (
    <div className="section">
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="field has-addons">
            <div className="control">
              <a className="button is-large is-static">
                Message
              </a>
            </div>
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
          <div className="field has-addons">
            <div className="control">
              <a className="button is-large is-static">
                Phone Number
              </a>
            </div>
            <div className="control is-expanded">
              <input
                value={phone}
                onChange={changeHandler}
                name="phone"
                placeholder="Enter a phone number..."
                className="input is-large"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className={`button is-${status} is-large`}>
                <span>{button}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
