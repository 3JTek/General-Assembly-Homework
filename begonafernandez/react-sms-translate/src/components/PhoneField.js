import React from 'react'

const PhoneField = ({to, handleChange}) => {
  return (
    <div className="field">
      <label className="label">Phone Number</label>
      <div className="control">
        <input
          name="to"
          className="input"
          type="text"
          placeholder="Telephone number e.g +440988674543"
          value={to}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default PhoneField
