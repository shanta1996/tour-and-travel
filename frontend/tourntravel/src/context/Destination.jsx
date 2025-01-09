import React, { createContext, useState, useTransition } from 'react'
import { getDestinationApi } from '../apis/PostApi'

const DestinationApi = () => {
    // const DestinationContext=createContext()
    const [getData, setGetData] = useState([])
    const [isPending, startTransition] = useTransition()
    useState(()=>{
        useTransition(async()=>{
            const res=await getDestinationApi()
            console.log(res);
            
        })
    },[])
    if(isPending) return <p>Loading...</p>
  return (
    <>
    <p>hello</p>
    </>
  )
}

export default DestinationApi