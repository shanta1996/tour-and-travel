import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Destinations from '../context/Destinations'

const Layouts = () => {
  return (
    <Destinations>
    <Navbar/>
    <Outlet/>
    </Destinations>
  )
}

export default Layouts