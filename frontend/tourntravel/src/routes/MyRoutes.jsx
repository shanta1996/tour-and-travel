import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import HomePage from '../pages/HomePage'
import Contact from '../components/contact/Contact'
import Destinations from '../components/destinations/Destinations'
import ErrorPage from '../pages/ErrorPage'

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layouts/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
              path:'/contactpage',
              element:<Contact/>
            },
            {
              path:'/destinations',
              element:<Destinations/>
            },
        ]
    }
])
const MyRoutes = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default MyRoutes