import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import blogsIndex from './components/blogsIndex'
import blogsShow from './components/blogsShow'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <Switch>
            <Route path="/blogs/:id" component={blogsShow} />
            <Route path="/blogs" component={blogsIndex} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
