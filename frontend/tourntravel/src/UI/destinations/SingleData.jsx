import React, { useEffect, useState, useTransition } from 'react'
import { getSingleDestinationApi } from '../../apis/PostApi'
import { useParams } from 'react-router-dom'
import SingleCard from './SingleCard'

const SingleData = () => {
    const [getData, setGetData] = useState([])
    const[isPending,startTransition]=useTransition()
    const params=useParams()
    useEffect(()=>{
        startTransition(async()=>{
            const response=await getSingleDestinationApi(params.id)
            console.log(response.data);
            setGetData(response.data)
            
        })
    },[])
    if(isPending) return <p>Loading...</p>
  return (
    <>
    <div className='p-1 md:p-16 text-[25px] font-semibold md:text-[45px] 2xl:text-[50px] text-center text-textTeal'>DESTINATIONS</div>
    <div className='w-full h-[60vh] grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center px-7'>
        hello
    </div>
  </>
  )
}

export default SingleData