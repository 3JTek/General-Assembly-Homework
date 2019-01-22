class Auth{
  static setToken(token){
    localStorage.setItem('token',token)
  }
  static getToken(){
    localStorage.getItem('token')
  }
}

export default Auth
