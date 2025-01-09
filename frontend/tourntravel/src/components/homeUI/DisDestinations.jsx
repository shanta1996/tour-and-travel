import React, { useContext } from 'react'
import DestinationContext from '../../context/Destinations'

const DisDestinations = () => {
    const { getDAta, isPending } = useContext(DestinationContext)
    return (
        <div> 
            {getDAta.map((item,i)=>(
                <div key={i}>{item.country_name}</div>
            ))}
        </div>
    )
}

export default DisDestinations