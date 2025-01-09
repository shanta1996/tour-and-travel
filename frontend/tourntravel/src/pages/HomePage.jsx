import React from 'react'
import Home from '../components/homeUI/Home'
import ImageCarousel from '../components/homeUI/ImageCarousel'



const HomePage = () => {
  return (
    <>
      <div className='w-full'>
        <ImageCarousel/>
        <Home/>
    
      </div>

    </>
  )
}

export default HomePage