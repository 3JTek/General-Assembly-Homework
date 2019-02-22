import React from 'react'
import LanguageButton from './LanguageButton'

const LanguageField = ({handleClick}) => {
  return(
    <div className="field">
      <label className="label">Language</label>
      <div className="columns">
        <LanguageButton  text="Italian" value='it' handleClick={handleClick}/>
        <LanguageButton  text="Spanish" value='es' handleClick={handleClick}/>
        <LanguageButton  text="French" value='fr' handleClick={handleClick}/>
        <LanguageButton  text="Greek" value='el' handleClick={handleClick}/>
        <LanguageButton  text="Hebrew" value='he' handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default LanguageField
