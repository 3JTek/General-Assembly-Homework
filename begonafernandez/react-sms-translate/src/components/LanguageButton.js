import React from 'react'

const LanguageButton = ({value, handleClick}) => {
  return (
    <div className="column">
      <button
        type="button"
        name="lang"
        value={value}
        className="button"
        onClick={handleClick}
      >Italian</button>
    </div>
  )
}

export default LanguageButton
