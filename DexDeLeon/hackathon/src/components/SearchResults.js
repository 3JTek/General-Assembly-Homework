import React from 'react'
import { Link } from 'react-router-dom'

const SearchResults = (props) => {
  return (
    <ul id="searchResultList">
      {props.artists.map((artist, i) =>
        <Link key={artist.artist.artist_id} to={`/${artist.artist.artist_name}`}>
          <li id={`a${i}`}>{artist.artist.artist_name}</li>
        </Link>
      )}
    </ul>
  )

}

export default SearchResults
