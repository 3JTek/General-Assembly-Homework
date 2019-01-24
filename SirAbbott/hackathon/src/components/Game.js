import React from 'react'

import BrainTraining from './BrainTraining'

class Game extends React.Component {
  constructor() {
    super()

    this.state= {
      questions: {},
      chosenCategory: '',
      chosenDifficulty: ''
    }

    this.handleClickCategory = this.handleClickCategory.bind(this)
    this.handleClickDifficulty = this.handleClickDifficulty.bind(this)
  }

  handleClickCategory(e) {
    this.setState( {chosenCategory: e.target.value})
  }

  handleClickDifficulty(e) {
    this.setState( {chosenDifficulty: e.target.value})
  }


  render() {
    console.log(this.state)
    return (
      <div className="option-container">
        {!this.state.chosenCategory &&
        <section className="container">
          <h1 className="title is-5">1. Choose a catagory</h1>
          <div>
            <button className="button" value="9" onClick={this.handleClickCategory}>General Knowledge</button>
            <button className="button" value="10" onClick={this.handleClickCategory}>Books</button>
            <button className="button" value="11" onClick={this.handleClickCategory}>Film</button>
            <button className="button" value="12" onClick={this.handleClickCategory}>Music</button>
            <button className="button" value="13" onClick={this.handleClickCategory}>Theatre & Musicals</button>
            <button className="button" value="14" onClick={this.handleClickCategory}>Television</button>
            <button className="button" value="15" onClick={this.handleClickCategory}>Video Games</button>
            <button className="button" value="17" onClick={this.handleClickCategory}>Science & Nature</button>
            <button className="button" value="18" onClick={this.handleClickCategory}>Computers</button>
            <button className="button" value="21" onClick={this.handleClickCategory}>Sports</button>
            <button className="button" value="23" onClick={this.handleClickCategory}>History</button>
            <button className="button" value="24" onClick={this.handleClickCategory}>Politics</button>
          </div>
        </section>}
        {!this.state.chosenDifficulty &&
        <section className="container">
          <h1 className="title is-5">2. Select a difficulty</h1>
          <div>
            <button className="button" value="easy" onClick={this.handleClickDifficulty}>Easy</button>
            <button className="button" value="medium" onClick={this.handleClickDifficulty}>Medium</button>
            <button className="button" value="hard" onClick={this.handleClickDifficulty}>Hard</button>
          </div>
        </section>}
        {this.state.chosenCategory && this.state.chosenDifficulty &&
        <div>
          <BrainTraining
            category={this.state.chosenCategory}
            difficulty={this.state.chosenDifficulty}
          />
        </div>}
      </div>
    )
  }
}

export default Game
