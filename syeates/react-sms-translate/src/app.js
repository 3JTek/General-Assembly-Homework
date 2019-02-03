require('dotenv').config()
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

app.use(bodyPaser.json())
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  componentDidMount(){
   axios.get('/api/message',{
   })
     .then(res => this.setState({ message: res.data }))
 }

}
 render() {
 if(!this.state.forecast) return null
     return (
       <div>
      
       </div>
     )
   }
 }

 ReactDOM.render(
   <App />,
   document.getElementById('root')
 )
