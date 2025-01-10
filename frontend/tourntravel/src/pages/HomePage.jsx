import React from 'react'
import ImageCarousel from '../components/homeUI/ImageCarousel'
import DestData from '../UI/destinations/DestData'
import PackageData from '../UI/packages/PackageData'



const HomePage = () => {
  return (
    <>
      <div className='w-full'>
        <ImageCarousel/>
        <DestData/>
        <PackageData/>
      </div>

    </>
  )
}

export default HomePage