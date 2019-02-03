import React from 'react'



const Form = ({ handleSubmit, handleChange, langsArray }) => {
  return (

    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              React SMS Translate
            </h1>
            <h2 className="subtitle">
              Send translated message
            </h2>
          </div>
        </div>
      </section>

      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="field">
            <div className="control">
              <label className="title is-5"> Number to
                <input
                  className="input"
                  name="to"
                  placeholder="number"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="title is-5"> Choose a language
                <select name="lang"
                  onChange={handleChange}>
                  {langsArray.map((lang,i) => <option key={i}> {lang} </option> )}
                </select> 
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="title is-5"> Message
                <input
                  className="textarea"
                  placeholder="type your message"
                  onChange={handleChange}
                  name="message"
                />
              </label>
            </div>
          </div>

          <button className="button is-medium is-primary">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Form
