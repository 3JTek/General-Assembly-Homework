import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
// import 'bulma'
import './style.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/message', {
      message: this.state.message,
      lang: this.state.lang,
      to: '+447770672016'
    })
      .then(res => console.log(res))
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }


  componentDidMount() {
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs', {
      params: {
        key: 'trnsl.1.1.20190131T144017Z.66d7297ea3a90112.826ea67f3313381f01f8293c17e644b3e0be8323',
        ui: 'en'
      }
    })
      .then(res => this.setState({ languages: res.data.langs }))
  }

  render() {

    if(!this.state.languages) return null
    return(
      <main>

        <input placeholder="Enter Message" name="message" className="message" onChange={this.handleChange}></input>

        <select name="lang" className="lang" onChange={this.handleChange}>
          {Object.keys(this.state.languages).map(langCode =>
            <option key={langCode} value={langCode}> {this.state.languages[langCode]} </option>
          )}
        </select>

        <button className="button">Send Message</button>

      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)












































// // my code below
// import React from 'react'
// import ReactDOM from 'react-dom'
// // import bulma from 'bulma'
//
// // import './style.css'
//
// import axios from 'axios'
//
// class App extends React.Component {
//   constructor() {
//     super()
//
//     this.state = {}
//
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//
//   handleChange({target: {name, value}}){
//     this.setState({[name]: value})
//   }
//
//
//   handleSubmit(e) {
//     e.preventDefault()
//     axios.post('/api/message', {
//       message: this.state.message,
//       lang: this.state.lang,
//       to: '+447770672016'
//     })
//       .then(res => console.log(res))
//   }
//
//   //
//   componentDidMount() {
//     axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs', {
//       params: {
//         key: process.env.YANDEX_KEY,
//         ui: 'en'
//       }
//     })
//       .then(res => this.setState({ languages: res.data.langs }))
//   }
//
//   render() {
//     console.log(this.state)
//     // if(!this.state.languages) return null
//     return(
//       <div>
//         <h1>Hi</h1>
//
//         <div>
//           <form onSubmit={this.handleSubmit} className="control">
//             <input className="input" name="text" type="text" placeholder="Message" onChange={this.handleChange} />
//
//
//
//             <button>Submit</button>
//           </form>
//         </div>
//
//       </div>
//     )
//   }
//
// }
//
// // <select name="lang" onChange={this.handleChange}>
// //   {Object.keys(this.state.languages).map(langCode =>
// //     <option key={langCode} value={langCode}> {this.state.languages[langCode]} </option>
// //   )}
// // </select>
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
