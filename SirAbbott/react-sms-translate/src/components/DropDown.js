import React from 'react'

const DropDown = ({ handleSelect, countries }) => {

  return (
    <div className="select is-medium is-primary">
      <select
        className="is-focused"
        onChange={handleSelect}
        name="lang"
        defaultValue="Select a language"
      >
        <option disabled>Select a language</option>
        { Object.keys(countries.langs).map((lang, i) =>
          <option
            key={i}
            value={lang}
          >
            {countries.langs[lang]}
          </option>
        )}
      </select>
    </div>
  )
}

export default DropDown
