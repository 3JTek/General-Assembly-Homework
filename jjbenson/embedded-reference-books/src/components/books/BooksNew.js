import React from 'react'
import axios from 'axios'

class BooksNew extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        title: '',
        author: '',
        genre: '',
        image: '',
        review: '',
        releaseDate: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .post('/api/books',
        this.state.data)
      .then( (res) => {
        //Go to show page (Doesn't exist yet)
        this.props.history.push(`/books/${res.data._id}`)
      })
      .catch( (err) => alert(err.message))
  }

  render(){
    const handleSubmit = this.handleSubmit
    const handleChange = this.handleChange
    return(
      <section className="section">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={this.state.title}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Author</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Author"
                  name="author"
                  onChange={handleChange}
                  value={this.state.author}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Genre</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Genre"
                  name="genre"
                  onChange={handleChange}
                  value={this.state.genre}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Image URL"
                  name="image"
                  onChange={handleChange}
                  value={this.state.image}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Release Date</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Release Date"
                  name="releaseDate"
                  onChange={handleChange}
                  value={this.state.releaseDate}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Review</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Review"
                  name="review"
                  onChange={handleChange}
                  value={this.state.review}
                />
              </div>
            </div>
            <button className="button is-primary">Save</button>
          </form>
        </div>
      </section>
    )
  }
}

export default BooksNew
