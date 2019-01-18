import React from 'react'


class Choices extends React.Component{


  render(){

    return(

      <div>
        {this.props.choices.map((rock,paper,scissors, i) =>
          <p key={i}>{rock,paper,scissors}</p>)}
      </div>
    )
  }
}

export default Choices
