import React from 'react'

export const LoginContext = React.createContext()

export function LoginContextProvider({children}) {
  const [user, setUser] = React.useState(null);
  const token = localStorage.getItem('token');

  const checkUser = async(token) =>{
    try {
      let res = await fetch('http://localhost:9999/checkUserByToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      });
      let data = await res.json();
      if(data.token){
        setUser(data.token);
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(()=>{
    if(token){
      checkUser(token);
    }
  },[token]);
  return (
    <LoginContext.Provider value={{user, setUser}}>{children}</LoginContext.Provider>
  )
}

export default LoginContext