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
              <div className="field">
                <label className="label">Label</label>
                <div className="control">
                  <input className="input" type="number" placeholder="Text input" />
                </div>
                <p className="help">This is a help text</p>
              </div>
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
