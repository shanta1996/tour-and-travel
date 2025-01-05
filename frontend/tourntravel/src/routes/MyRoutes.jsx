import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import HomePage from '../pages/HomePage'
import Contact from '../components/contact/Contact'

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layouts/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
              path:'/contactpage',
              element:<Contact/>
            }
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