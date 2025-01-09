import React from 'react'
import {Link} from 'react-router-dom'

const DisplayData = ({data}) => {
    const{country_name,capital_name,languages,religions,telephone_code,image}=data
  return (
    <>
    <Link className='h-full'>
        <img src={image} alt="" className='w-full md:w-[450px] h-full object-cover bg-center  rounded-lg'/>
    </Link>
    </>
  )
}

export default DisplayData