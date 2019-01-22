import React from 'react'

const WineForm = ({ data, handleChange, handleSubmit, type }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <h2 className="title">{type}</h2>
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
        <label className="label">Tasting notes</label>
        <div className="control">
          <input
            className="input"
            placeholder="Tasting notes"
            name="tastingNotes"
            onChange={handleChange}
            value={data.tastingNotes}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Grape Variety</label>
        <div className="control">
          <input
            className="input"
            placeholder="Grape Variety"
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
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={data.price}
          />
        </div>
        <div className="field">
          <label className="label">ABV</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="ABV"
              name="abv"
              onChange={handleChange}
              value={data.abv}
            />
          </div>
        </div>
      </div>
      <button className="button is-dark">Submit</button>
    </form>
  )
}

export default WineForm
