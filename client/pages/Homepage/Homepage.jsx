import React from 'react'
import {LoginContext} from '../../Context/context/LoginContext';

function Homepage() {
  const {user} = React.useContext(LoginContext);
  return (
    <div>
        
        <div >
            {
                user ? "User Logged In" : "User Not Logged In"
            }
        </div>
    </div>
  )
}

export default Homepage