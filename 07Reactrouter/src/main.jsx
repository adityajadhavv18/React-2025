import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contactus/Contactus'
import User from './components/User/User'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    }, {
      path:"user/:userid",
      element:<User/>
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
