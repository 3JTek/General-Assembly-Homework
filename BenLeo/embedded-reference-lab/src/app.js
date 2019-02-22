import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import PostsIndex from './components/postsIndex'
import Home from './components/Home'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/posts" component={PostsIndex} />
            <Route path="/" component={Home} />
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
