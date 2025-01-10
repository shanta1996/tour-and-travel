import React from 'react'
import ImageCarousel from '../components/homeUI/ImageCarousel'
import DestData from '../UI/destinations/DestData'



const HomePage = () => {
  return (
    <>
      <div className='w-full'>
        <ImageCarousel/>
        <DestData/>
      </div>

    </>
  )
}

export default HomePage