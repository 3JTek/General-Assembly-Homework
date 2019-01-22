import React from 'react'

const WinesForm = ({data, handleChange, handleSubmit}) => {
  return (
    <main className="section">
      <div className="container">
        <form >
          <h2 className="title is-2">Add New Wine</h2>
          <div className="field">
            <div className="control">
              <label className="label">Name</label>
              <input
                name="name"
                className="input"
                value={data.name}
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Origin</label>
              <input
                name="origin"
                className="input"
                value={data.origin}
                placeholder="Origin"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Image</label>
              <input
                name="image"
                className="input"
                value={data.image}
                placeholder="Image"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Tasting Notes</label>
              <input
                name="tastingNotes"
                className="input"
                value={data.tastingNotes}
                placeholder="Tasting Notes"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Grape</label>
              <input
                name="grape"
                className="input"
                value={data.grape}
                placeholder="Grape"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Abv</label>
              <input
                name="abv"
                className="input"
                value={data.abv}
                placeholder="Abv"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Price</label>
              <input
                name="price"
                className="input"
                value={data.price}
                placeholder="Price"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </main>

  )

}

export default WinesForm
