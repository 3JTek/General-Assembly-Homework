class Auth{
  static setToken(token){
    localStorage.setItem('wineboredToken', token)
  }

  static getToken(){
    return localStorage.getItem('wineboredToken')
  }
}

export default Auth
