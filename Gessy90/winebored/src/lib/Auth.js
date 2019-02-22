class Auth{
  static setToken(token){
    localStorage.setItem('token', token)
  }

  static getToken(){
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token')
  }
}

export default Auth
