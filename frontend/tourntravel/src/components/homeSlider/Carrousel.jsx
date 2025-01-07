import React from 'react'
import imageSlider from './imageSlider'
import ImageCard from './ImageCard'

const Carrousel = () => {
  return (
    <>
      <div className='w-full h-[500px] flex flex-wrap overflow-hidden'>
        {
          imageSlider.map((slides, index) => {
            return <ImageCard slides={slides} key={index} />
          })
        }
      </div>

  
    </>
  )
}

export default Carrousel