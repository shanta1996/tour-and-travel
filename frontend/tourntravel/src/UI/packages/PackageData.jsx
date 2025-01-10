import React, { useEffect, useState, useTransition } from 'react'
import PackageCard from './PackageCard'
import { getDestinationApi } from '../../apis/PostApi'

const PackageData = () => {
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
    <div className='p-1 md:p-16 text-[25px] font-semibold md:text-[45px] 2xl:text-[50px] text-center text-textTeal'>OUR PACKAGES</div>
      <div className='w-full h-[60vh] grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center px-7'>
          {getDAta.map((data, index) => {
            return <PackageCard key={index} data={data} />
          })}
      </div>
    </>
  )
}

export default PackageData