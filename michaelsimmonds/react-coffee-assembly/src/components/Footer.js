import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>{this.props.aboutFooter}</p>
      </footer>
    )
  }
}

export default Footer
