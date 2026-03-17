import React from 'react'
import { Container,Logo,Logout_btn } from '../index'
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"

function Header() {
  const authStatus= useSelector((state)=>state.auth.status)

  const navigate= useNavigate()

  const nav_items=[
    {
      name:"Home",
      url:'/',
      active: true
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      url: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      url: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      url: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div>
            <Link to='/'>
          <Logo width='70px'   />
          </Link>
          </div>

          <ul className='flex ml-auto'>
            {nav_items.map((item)=>
              item.active?
              (
                <li key='item.name'>
                  <button onClick={()=>navigate(item.url)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                    {item.name}
                  </button>
                </li>
              )
              (
                
              ):null
            )}
            {authStatus &&(
             <div>
              <Logout_btn /> 
              {/* “If left side is true → show right side..If left side is false → show nothing” */}
             </div>
            )}
            </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
