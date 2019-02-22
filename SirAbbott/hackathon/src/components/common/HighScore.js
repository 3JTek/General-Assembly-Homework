class HighScore {
  static newHighScore(userName, score) {
    this.name = userName
    this.score= score
  }

  static getHighScore() {
    return (this.name, this.score)
  }
}

export default HighScore
