class Auth{
  static setToken(token){
    localStorage.setIteam('token', token)
  }

  static getToken(){
    return localStorage.getIteam('token')
  }
}

export default Auth 
