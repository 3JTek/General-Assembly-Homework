import React from 'react'

const LanguageButton = ({text, value, handleClick}) => {
  return (
    <div className="column">
      <button
        type="button"
        name="lang"
        value={value}
        className="button"
        onClick={handleClick}
      >{text}</button>
    </div>
  )
}

export default LanguageButton
