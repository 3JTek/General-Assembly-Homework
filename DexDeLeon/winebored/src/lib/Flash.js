class Flash{

  static setMessage(type, message) {
    // If this._messages is falsey, initialise as an empty object.
    this._messages = this._messages || {} // Underscores flag variables as important
  }

  static getMessages() {
    return this._messages
  }

  static clearMessages() {
    this._messages = null
  }

}

export default Flash
