import React from 'react'

const WineForm = ({ data, handleChange, handleSubmit }) => {
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
        <label className="label">ABV</label>
        <div className="control">
          <input
            className="input"
            placeholder="ABV"
            name="abv"
            onChange={handleChange}
            value={data.abv}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">price</label>
        <div className="control">
          <input
            className="input"
            placeholder="price"
            name="price"
            onChange={handleChange}
            value={data.price}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">grape</label>
        <div className="control">
          <input
            className="input"
            placeholder="grape"
            name="grape"
            onChange={handleChange}
            value={data.grape}
          />
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default WineForm