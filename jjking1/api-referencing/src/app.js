import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Container } from 'semantic-ui-react'

import axios from 'axios'

class App extends React.Component{
  constructor(){
    super()

    this.state={}
  }

  componentDidMount(){
    axios
      .get('/api/tvshows')
        .then(res => this.setState({ data: res.data }))
  }

  render(){
    if(!this.state.data) return null
    return(
      <div>
          {this.state.data.map(tvshow =>
            <div key={tvshow._id}>
             <img src={`${tvshow.image}`} />
              <p>{tvshow.title}</p>
            </div>
          )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
