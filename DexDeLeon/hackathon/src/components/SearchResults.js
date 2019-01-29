import React from 'react'
import { Link } from 'react-router-dom'

import Loading from './Loading'

const SearchResults = (props) => {
  if (props.submit && props.artists.length === 0){
    return <Loading />
  }
  return (
    <ul id="searchResultList">
      {props.artists.map((artist, i) =>
        <Link key={artist.artist.artist_id} to={`/${artist.artist.artist_name}`}>
          <li id={`a${i}`} key={artist.artist.artist_id}>{artist.artist.artist_name}</li>
        </Link>
      )}
    </ul>
  )

}

export default SearchResults
