import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'


function Logout_btn() {
    const dispatch=useDispatch() 
    const logout_handler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div>
      <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logout_handler} // this is reference , while logout_handler() is wrong becoz because that would run immediately during render.
    >Logout</button>
    </div>
  )
}

export default Logout_btn
