import React, { useEffect, useState, useTransition } from 'react'
import { getDestinationApi } from '../../apis/PostApi'
import DisplayData from './DisplayData'

const DestData = () => {
  const [isPending, startTransition] = useTransition()
  const [getDAta, setgetDAta] = useState([])
  useEffect(() => {
    startTransition(async () => {
      const response = await getDestinationApi()
      console.log(response.data);
      setgetDAta(response.data)

    })
  }, [])
  return (
    <>
    {getDAta.map((data,index)=>{
      return <DisplayData key={index} data={data}/>
    })}
    </>
  )
}

export default DestData