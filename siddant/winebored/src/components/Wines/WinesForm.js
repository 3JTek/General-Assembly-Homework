import React from 'react'


const WineForm = ({ data, handleChange, handleSubmit}) => {

  return(
    <section className="section">
      <div className="container">
        <h1 className="title is-1">Add New Wines</h1>
        <form onSubmit={handleSubmit}>

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" onChange={handleChange} placeholder="Wine Name" name="name" value={data.name}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Origin</label>
            <div className="control">
              <input className="input" type="text"onChange={handleChange} placeholder="Origin" name="origin" value={data.origin}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input className="input" type="text" onChange={handleChange} placeholder="Image" name="image" value={data.image}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Grapes</label>
            <div className="control">
              <input className="input" type="text" onChange={handleChange} placeholder="Grapes" name="grape" value={data.grape}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Alcohol by Volume</label>
            <div className="control">
              <input className="input" type="number"onChange={handleChange} placeholder="0" name="abv" value={data.abv} min="0" />
            </div>
          </div>

          <div className="field">
            <label className="label">Wine Price</label>
            <div className="control">
              <input className="input" type="number" onChange={handleChange} placeholder="0" name="price" value={data.price} min="0" />
            </div>
          </div>

          <div className="field">
            <label className="label">Tasting Notes</label>
            <div className="control">
              <textarea className="textarea" type="text" onChange={handleChange} placeholder="Tasting Notes" name="tastingNotes" value={data.tastingNotes}/>
            </div>
          </div>

          <button className="button is-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default WineForm
