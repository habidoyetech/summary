import React, {useState, useContext, createContext} from 'react';


const authContextDefaultValues = {
    auth: null,
    logIn: () => {},
    logOut: () => {},
    userName: '',
    setToken: (para) => {}
};

export function useAuth() {
    return useContext(AuthContext);
}

const AuthContext = createContext(authContextDefaultValues)

export function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userName, setUserName] = useState('')
    
    const values = {
      auth: isAuthenticated,
      userName: userName,
      logIn:  function logIn (name) {
        setUserName(name)
        
      },
      logOut: function logOut () {
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