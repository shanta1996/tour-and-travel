import React from 'react'
import { BiDownArrowCircle } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";


const ImageCard = ({ image }) => {
  const { urls, description } = image
  return (
    <>
      <div className='w-full h-full relative px-7'>
        <div className='w-full h-full relative '>
          <img src={urls} alt="" className=' w-full h-full object-cover ' />
          <p className='text-white text-[50px]  absolute top-0 w-full h-full flex items-center justify-center z-30'>{description}</p>

          <div className='text-white font-semibold text-[19px]  absolute top-[100px] h-full w-full flex items-center justify-center flex-col'>
            <p >Scroll down
            </p>
            <span className='text-[30px]'><BiDownArrowAlt /></span>
          </div>

          <div className='absolute text-white top-[40%] text-[40px] w-full h-full flex flex-col gap-8 left-3'>
            <button className='cursor-pointer'>
              <BiUpArrowCircle />
            </button>
            <button className='cursor-pointer'>
              <BiDownArrowCircle />
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default ImageCard