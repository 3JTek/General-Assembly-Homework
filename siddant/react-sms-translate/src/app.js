import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

class App extends React.Component{
  render(){
    return(
      <main className='section'>
        <div className='container'>
          <div className='columns  is-multiline'>
            <div className='column'>
              <h1 className='title is-1'>Hello</h1>
            </div>
            <div className='column'>
              <form>

                <div className="field">
                  <label className="label">Number To</label>
                  <div className="control">
                    <input className="input" type="number" placeholder="0" min="0" />
                  </div>
                </div>


                <div className="field">
                  <label className="label">Translation</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>French</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea has-fixed-size" placeholder="Fixed size textarea"></textarea>
                  </div>
                </div>

                <div className="control">
                  <button className="button is-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
