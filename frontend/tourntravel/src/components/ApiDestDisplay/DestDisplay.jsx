import React from 'react'

const DestDisplay = ({displayData}) => {
    const{country_name,capital_name,languages,religions,telephone_code,image}=displayData
  return (
    <>
    <div>
        <img src={image} alt="" />
    </div>
    </>
  )
}

export default DestDisplay