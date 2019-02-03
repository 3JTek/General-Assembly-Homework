import React from 'react'

const MessageForm = ({handleSubmit, handleChange, text, language, phone}) => {
  return(
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="field">
            <label className="label">This message...</label>
            <div className="control">
              <input
                className="input"
                placeholder="Type the message you want to send"
                name="text"
                onChange={handleChange}
                value={text}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">...will be translated in...</label>
            <div className="control">
              <input
                className="input"
                placeholder="Type the message you want to send"
                name="text"
                onChange={handleChange}
                value={language}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">...and send to</label>
            <div className="control">
              <input
                className="input"
                placeholder="+44..."
                name="text"
                onChange={handleChange}
                value={phone}
              />
            </div>
          </div>

          <div className="control">
            <button className="button is-link">Submit</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default MessageForm
