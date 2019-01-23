// we'll use class but we don't need react
//static bings the method to be atcual class as oppose to make instance of class

class Auth {
  static setToken(token){
    localStorage.setItem('token', token)
  }

  static getToken(){
    return localStorage.getItem('token')
  }
}

export default Auth

// when you import Auth you'll have access to every method inside the Auth
