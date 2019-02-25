import React from 'react'

const Form = ({ handlesubmit, handlechange }) => {
  return (

    <div className="container">


      <h1 className="title is-3">Send a translated text message to your Phone!</h1>

      <form onSubmit={handlesubmit}>

        <div>
          <label className="label"> 1. Enter the Number to send a text:</label>
          <input className="input is-primary" name="to" placeholder="Mobile number" onChange={handlechange} />
        </div>


        <div>
          <label className="label"> 2.  Whats the message?:</label>
          <input className="input is-primary" name="message" placeholder="Type your text" onChange={handlechange} />
        </div>


        <div>
          <label className="label" onChange={handlechange}>3. Language to translate into:</label>
          <select name="lang" >
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button className="button is-primary">Send</button>

      </form>
    </div>

  )
}

export default Form
