import React, { createContext, useEffect, useState, useTransition } from 'react'
import { getDestinationApi } from '../apis/PostApi'

const Destinations = ({children}) => {
    const [isPending, startTransition] = useTransition()
    const [getDAta, setGetDAta] = useState([])
    const DestinationContext=createContext()
    useEffect(() => {
        startTransition(async () => {
            const res = await getDestinationApi()
            console.log(res.data);
            setGetDAta(res.data)

        })
    }, [])
    return (
      <DestinationContext.Provider value={{getDAta,isPending}}>
        {children}
      </DestinationContext.Provider>
    )
}

export default Destinations