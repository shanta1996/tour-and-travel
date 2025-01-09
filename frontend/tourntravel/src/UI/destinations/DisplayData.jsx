import React from 'react'
import {Link} from 'react-router-dom'

const DisplayData = ({data}) => {
    const{country_name,capital_name,languages,religions,telephone_code,image}=data
  return (
    <>
    <Link className='h-full w-full relative '>
        <img src={image} alt="" className='w-full md:w-[450px] h-full object-cover bg-center  rounded-lg '/>
        <Link to="" className='bg-bgTeal text-white absolute top-0 w-full h-full flex items-center justify-center rounded-lg text-[30px] '>{country_name}</Link>
    </Link>
    </>
  )
}

export default DisplayData