import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import HomePage from '../pages/HomePage'
import Contact from '../components/contact/Contact'
import ErrorPage from '../pages/ErrorPage'
import SingleCard from '../UI/destinations/SingleCard'

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
              path:'/destination/:id',
              element:<SingleCard/>
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