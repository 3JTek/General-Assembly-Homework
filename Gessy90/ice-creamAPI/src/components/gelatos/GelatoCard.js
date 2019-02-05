import React from 'react'


const GelatoCard =({name, ingredients,price, description,image,flavour,extra })=> {
  return(
    <div className= "card">
      <div className= "card-header">
        <h4 className= "card-header-title">{name}</h4>
      </div>

      <p>Ingredients:{ingredients}</p>

      <div className= "card-image">
        <figure className= "image" style={{backgroundImage: `url(${image})`}} />
      </div>

      <p><strong>Description:</strong>{description}</p>
      <p>Price:{price}</p>

      <div className= "card">
        <div className= "card-header">
          <h4 className= "card-header-title">{flavour}</h4>
        </div>

        <div className= "card">
          <div className= "card-header">
            <h4 className= "card-header-title">{extra}</h4>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GelatoCard
