import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../components/Home/Home.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact_us/contact_us.jsx'
import User from '../components/User/User.jsx'
import Github, { github_info_loader } from '../components/Github/Github.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />,
        /* children:[
          {

          }
        ] */
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"user/:id",
        element:<User />
      },
      {
        loader:github_info_loader, // Loader feels faster because the user never sees an empty or loading UI — the page loads with the data already ready.
        path:"github", 
        element:<Github />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
