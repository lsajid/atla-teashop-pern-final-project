import React from 'react'
import { useState } from "react";
import  auth  from "../firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"

function Home() {
  const [ registerUser, setRegisterUser ] = useState({
    registerEmail: "",
    registerPassword: ""
  })
  const [ loginUser, setLoginUser ] = useState({
    loginEmail: "",
    loginPassword: ""
  })

  const [ user, setUser ] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(
        auth,
        registerUser.registerEmail,
        registerUser.registerPassword
      )
      console.log(user)
    }catch(err){
      console.log(err)
    }
  }

  const login = async () => {
    try{
      const user = signInWithEmailAndPassword(
        auth,
        loginUser.loginEmail,
        loginUser.loginPassword
      )
      console.log(user)
    }catch(err){
      console.log(err)
    }
  }

  const logout = async () => {
    await signOut(auth);
    window.alert(`You have been signed out successfully`);
  }

  const handleInputChange = (event) => {
    const eventId = event.target.id;
    eventId.includes('login') ? setLoginUser({...loginUser, [event.target.id]:event.target.value}) : setRegisterUser({...registerUser, [event.target.id]:event.target.value});
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    login();
    setLoginUser({
      loginEmail: "",
      loginPassword: ""
    })
  }

  const handleCreateNewSubmit = (event) => {
    event.preventDefault();
    register();
    window.alert(`Your account has been created`)
    setRegisterUser({
      registerEmail: "",
      registerPassword: ""
    })
  }


  return (
    <div className='grid-wrapper'>
      <div className='login-wrapper'>
        <div className='image-container'>
          <img src="https://pbs.twimg.com/media/EcsWb-_XoA0jXVl.jpg" alt="family-photo"/>
        </div>
        <div className='login-container'>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit} className="form">
            <label htmlFor="login-email">Email</label>
            <input 
              id="loginEmail"
              type="text"
              value={loginUser.loginEmail}
              placeholder="type here"
              onChange={handleInputChange}
            />
            <label htmlFor="login-password">Password</label>
            <input 
              id="loginPassword"
              value={loginUser.loginPassword}
              type="text"
              placeholder="..."
              onChange={handleInputChange}
            />
            <button>Login Account</button>
          </form>
        </div>
        <div className='register-container'>
          <h2>New User</h2>
          <form onSubmit={handleCreateNewSubmit} className="form">
            <label htmlFor='registerEmail'>Email</label>
            <input 
              id="registerEmail"
              value={registerUser.registerEmail}
              placeholder='type here'
              type="text"
              onChange={handleInputChange}
            />
            <label htmlFor='registerPassword'>Password</label>
            <input 
              id="registerPassword"
              value={registerUser.registerPassword}
              placeholder="..."
              type="text"
              onChange={handleInputChange}
            />
            <button>Create Account</button>
          </form>
        </div>
        <div className='account-container'>
          <h3>User Logged In:</h3>
          {user?.email}
          <button onClick={logout}>Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export default Home