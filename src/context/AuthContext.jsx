import React, {useState, useContext, createContext} from 'react';


const authContextDefaultValues = {
    auth: null,
    login: () => {},
    logout: () => {},
    // token: '',
    setToken: (para) => {}
};

export function useAuth() {
    return useContext(AuthContext);
}

const AuthContext = createContext(authContextDefaultValues)

export function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // const safeToken = localStorage.getItem('token')
    
    const values = {
      auth: isAuthenticated,
      // token: safeToken,
      login:  function logIn () {
        setIsAuthenticated(true)
      },
      logout: function logOut () {
        localStorage.clear()
        
      },
      setToken: function setToken(newtoken) {
        localStorage.setItem('token', newtoken)
      }
    }
  

    return (
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    )
  }