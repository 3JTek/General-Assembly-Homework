import React from 'react'

const WineForm = ({data, handleChange, handleSubmit, handleDelete}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Origin</label>
        <div className="control">
          <input
            className="input"
            placeholder="Origin"
            name="origin"
            onChange={handleChange}
            value={data.origin}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Abv</label>
        <div className="control">
          <input
            className="input"
            placeholder="Abv"
            name="abv"
            onChange={handleChange}
            value={data.abv}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">grape</label>
        <div className="control">
          <input
            className="input"
            placeholder="Grape"
            name="grape"
            onChange={handleChange}
            value={data.grape}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input
            className="input"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={data.price}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Tasting notes</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Tasting notes"
            name="tastingNotes"
            onChange={handleChange}
            value={data.tastingNotes}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Latitude</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Latitute"
            name="lat"
            onChange={handleChange}
            value={data.location.lat}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Longitude</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Longitude"
            name="lng"
            onChange={handleChange}
            value={data.location.lng}
          />
        </div>
      </div>
      <button onClick={handleDelete} className="button is-danger">Delete</button>
      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default WineForm
