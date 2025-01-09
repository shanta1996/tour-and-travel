
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DestDisplay from '../../components/ApiDestDisplay/DestDisplay'

const DestinationApi = () => {
    const [getApi, setgetApi] = useState([])
    const GetApis=async()=>{
      try {
        const res=await axios.get("http://127.0.0.1:8000/destinationapi/getcountry/")
        console.log(res.data);
        setgetApi(res.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    useEffect(()=>{
        GetApis()
    },[])
  return (
    <>
<p>fetcdata</p>
{
    getApi.map((displayData,i)=>{
        return <DestDisplay key={i} displayData={displayData} />
    })
}
    </>
  )
}

export default DestinationApi