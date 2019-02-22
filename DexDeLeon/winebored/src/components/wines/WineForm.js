import React from 'react'

const WineForm = ({ data, handleSubmit, handleChange }) => {
  return(
    <form onSubmit={ handleSubmit }>

      <div className="field">
        <label className="label title is-4">Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="Wine Name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Origin</label>
        <div className="control">
          <input
            className="input"
            name="origin"
            placeholder="Origin"
            value={data.origin}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Image URL</label>
        <div className="control">
          <input
            className="input"
            name="image"
            placeholder="Image URL"
            value={data.image}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Tasting Notes</label>
        <div className="control">
          <textarea
            className="textarea"
            name="tastingNotes"
            placeholder="Tasting Notes"
            value={data.tastingNotes}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Grape</label>
        <div className="control">
          <input
            className="input"
            name="grape"
            placeholder="Grape"
            value={data.grape}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">ABV</label>
        <div className="control">
          <input
            className="input"
            name="abv"
            placeholder="ABV"
            value={data.abv}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Price</label>
        <div className="control">
          <input
            className="input"
            name="price"
            placeholder="Price"
            value={data.price}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="button is-light">Submit</button>

    </form>
  )
}

export default WineForm
