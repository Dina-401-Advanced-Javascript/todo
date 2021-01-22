import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../context/login';

// Auth is going to tap into LoginContext and check if the user is logged in
// Auth will get a props of capability to see what it will show the user


function Auth(props) {
  const [okToRender, setOkToRender] = useState(false);
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    console.log('loginContext', loginContext)
    setOkToRender(
      loginContext.loggedIn && (props.capability ? loginContext.user.capabilities.includes(props.capability) : false)
    )
  }, [loginContext.loggedIn, props.capability])

  console.log(okToRender, loginContext.loggedIn)

  return (
    okToRender &&
    <div>{props.children}</div>
  )
}

// okToRender ? 'do this thing ' : ''
// okToRender && 'do this thing'

export default Auth;