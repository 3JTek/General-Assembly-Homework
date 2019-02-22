class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }
  // sets and gets the token from local storage
  static getToken() {
    return localStorage.getItem('token')
  }
}

export default Auth
