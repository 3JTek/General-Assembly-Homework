import React from 'react'

const WineForm = ({data, handleSubmit, handleChange}) => {
  return(
    <form onSubmit={handleSubmit}>
      <h1 className="title is-1">New Wine</h1>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            name='name'
            type="text"
            placeholder="e.g Beefsteak Club Malbec 2016 Mendoza"
            value={data.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Origin</label>
        <div className="control">
          <input
            className="input"
            name='origin'
            type="text"
            placeholder="e.g Argentine"
            value={data.origin}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            name='image'
            type="text"
            placeholder="Image"
            value={data.image}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Tasting Notes</label>
        <div className="control">
          <input
            className="input"
            name='tastingNotes'
            type="text"
            placeholder="e.g Woody"
            value={data.tastingNotes}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Grape</label>
        <div className="control">
          <input
            className="input"
            name='grape'
            type="text"
            placeholder="e.g Pinot"
            value={data.grape}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Abv</label>
        <div className="control">
          <input
            className="input"
            name='abv'
            type="text"
            placeholder="e.g 12%"
            value={data.abv}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input
            className="input"
            name='price'
            type="text"
            placeholder="e.g 5.99"
            value={data.price}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Location: lat</label>
        <div className="control">
          <input
            className="input"
            name='lat'
            type="text"
            placeholder="e.g 33"
            value={data.lat}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Location: lng</label>
        <div className="control">
          <input
            className="input"
            name='lng'
            type="text"
            placeholder="e.g 66"
            value={data.lng}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="button is-info">Submit</button>

    </form>
  )
}

export default WineForm
