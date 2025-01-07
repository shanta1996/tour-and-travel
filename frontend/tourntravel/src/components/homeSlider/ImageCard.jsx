import React, { useState } from 'react'
import { BiDownArrowCircle } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";

const ImageCard = ({ slides }) => {
  const { urls, description } = slides

  const [current, setCurrent] = useState(0)
  const goPrev=()=>{
    setCurrent((current)=>(current==0?slides.length-1:current-1))
  }

  const goNext=()=>{
    setCurrent((current)=>(current==slides.length-1?0:current+1))
  }
  return (
    <>
      <div className='w-full h-full relative px-7'>
        <div className='w-full h-full relative '>
          <img src={urls} alt="" className=' w-full h-full object-cover transition-transform ease-out duration-500' style={{transform:`translateY(-${current*100}%)`}} />
          <p className='text-white text-[50px]  absolute top-0 w-full h-full flex items-center justify-center z-30'>{description}</p>

          <div className='text-white font-semibold text-[19px]  absolute top-[100px] h-full w-full flex items-center justify-center flex-col'>
            <p >Scroll down
            </p>
            <span className='text-[30px]'><BiDownArrowAlt /></span>
          </div>

          <div className='absolute text-white top-[40%] text-[40px] w-full h-full flex flex-col gap-8 left-3'>
            <button onClick={goPrev} className='cursor-pointer w-[4%] bg-red-600'>
              <BiUpArrowCircle />
            </button>
            <button onClick={goNext} className='cursor-pointer w-[4%]'>
              <BiDownArrowCircle />

            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default ImageCard