import React from 'react'
import Home from '../components/homeUI/Home'
import ImageCarousel from '../components/homeUI/ImageCarousel'
import DestData from '../UI/destinations/DestData'



const HomePage = () => {
  return (
    <>
      <div className='w-full'>
        <ImageCarousel/>
        <DestData/>
        {/* <Home/> */}
      </div>

    </>
  )
}

export default HomePage