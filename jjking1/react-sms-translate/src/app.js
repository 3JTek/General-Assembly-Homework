import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

// wanted to try to use something other than bulma
// couldn't figure out to import the css so just put the cdn in head
import { Container, Grid, Image} from 'semantic-ui-react'
import Steps from './components/Steps'
import Composer from './components/Composer'
import './style.scss'


class App extends React.Component{
  constructor(){
    super()
  }



  render(){
    return(
      <div id='main-section'>
        <Grid columns={1} textAlign='center'>
          <Grid.Row>
              <Grid.Column width={8}>
                  <Composer />
                  <Steps />
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
