import React from 'react'

const TextField = ({message, handleChange}) => {
  return (
    <div className="field">
      <label className="label">Text message</label>
      <div className="control">
        <input
          name="message"
          className="input"
          type="text"
          placeholder="Write the text you want translated here"
          value={message}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default TextField
