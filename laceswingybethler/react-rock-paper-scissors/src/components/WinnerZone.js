import React from 'react'

class WinnerZone extends React.Component {
  render() {

    return (
      <section className='win-display'>
        <h1>Winner is... {this.props.winner}</h1>

      </section>
    )
  }
}
//
// const WinnerZone = (winner) => {
//   console.log(winner)
//   return (
//     <div>
//       <h1>{winner}</h1>
//     </div>
//   )
// }

export default WinnerZone
