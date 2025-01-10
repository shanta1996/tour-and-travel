import React, { useEffect, useState, useTransition } from 'react'
import { getSingleDestinationApi } from '../../apis/PostApi'
import { useParams } from 'react-router-dom'

const SingleData = () => {
    const [getData, setGetData] = useState([])
    const[isPending,startTransition]=useTransition()
    const params=useParams()
    useEffect(()=>{
        startTransition(async()=>{
            const response=await getSingleDestinationApi(params.id)
            console.log(response);
            
        })
    },[])
    if(isPending) return <p>Loading...</p>
  return (
    <div className='bg-red-300 h-screen w-full pt-[100px]'>SingleData</div>
  )
}

export default SingleData