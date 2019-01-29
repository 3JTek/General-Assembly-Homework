import React from 'react'


const SearchBar = ({ searchText, handleChange, possibleResults, getMovie }) => {
  return(
      <div className="columns is-multiline">
        <input
          id="search-bar"
          className="column is-8"
          value={searchText}
          onChange={handleChange}
        />

        {possibleResults &&
          possibleResults.map((possibleResult,index) =>
          <div
            className="column is-8 search-result"
            onClick={(e) => getMovie(undefined, e)}
            key={index}
            id={possibleResult.imdbID}>
            <span>{possibleResult.Title}</span>
            <img src={possibleResult.Poster}/>
          </div>
        )
      }
    </div>
  )
}



export default SearchBar
