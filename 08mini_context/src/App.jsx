import React ,{ useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <div className='bg-black'>
    <UserContextProvider >{/* 
      ALL children render under the SAME provider and SAME state */}
      <h1>React context calling</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
  )
}

export default App

/* App renders → Provider creates state → children render → Login updates state → Provider re-renders → Profile automatically updates */

