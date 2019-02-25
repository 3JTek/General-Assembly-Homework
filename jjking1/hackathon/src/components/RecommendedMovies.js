import React from 'react'
import axios from 'axios'




const RecommendedMovies = ({ movies, getId }) => {


  return(
      <div className="related-box columns is-multiline">
      {movies.map((movie,index) =>
        index < 6 &&
            <img
              onClick={() => getId(movie.id)}
             className="column is-5 related"
             key={movie.id}
             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>)}
      </div>
  )
}

export default RecommendedMovies
