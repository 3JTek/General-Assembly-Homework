import React from 'react'


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>{this.props.footer.text}</p>
      </footer>
    )
  }
}

export default Footer
