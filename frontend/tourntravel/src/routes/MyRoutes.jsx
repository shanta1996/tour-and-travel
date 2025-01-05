import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import HomePage from '../pages/HomePage'

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layouts/>,
        children:[
            {
                index:true,
                element:<HomePage/>
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