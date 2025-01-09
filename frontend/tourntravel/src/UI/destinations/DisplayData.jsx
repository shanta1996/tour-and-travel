import React from 'react'
import {Link} from 'react-router-dom'
import { LiaArrowAltCircleRightSolid } from "react-icons/lia";


const DisplayData = ({data}) => {
    const{country_name,capital_name,languages,religions,telephone_code,image}=data
  return (
    <>
    <Link to="" className='h-full w-full relative '>
        <img src={image} alt="" className='w-full md:w-[450px] h-full object-cover bg-center  rounded-lg '/>
        <div className='bg-bgTeal text-white absolute top-0 w-full h-full  flex flex-col items-center justify-center rounded-lg'>
        <p className='text-[20px] md:text-[40px] 2xl:text-[50px] tracking-[1px] font-semibold'>{country_name}</p>
        <div className='flex items-center gap-2 text-[18px] md:text-[20px] 2xl:text-[25px] tracking-[1px] '>
            <p>Explore</p>
            <span className='text-[40px]'><LiaArrowAltCircleRightSolid /></span>
        </div>
        </div>
    </Link>
    </>
  )
}

export default DisplayData