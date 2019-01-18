import React from 'react'

const Map = (props)=> {
  return(
    <div>
      {props.country.filter(country => country.location.length !== 0).map((country, index) => <p key={index}> {country.name} | {country.location[0]}, {country.location[1]} </p>)}
    </div>
  )

  //United States Minor Outlying Islands ,
  //

}

export default Map
