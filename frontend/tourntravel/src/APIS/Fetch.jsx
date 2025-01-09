
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetch = async() => {
    const [getApi, setgetApi] = useState([])
    const GetApis=async()=>{
      try {
        const {res}=await axios.get("https://fakestoreapi.com/users")
        console.log(res);
      } catch (error) {
        console.log(error);
        
      }
       
    }
    useEffect(()=>{
        
        GetApis()
        
    },[])
  return (
    <div>Fetch</div>
  )
}

export default Fetch