import React from 'react'

const DisplayData = ({data}) => {
    const{country_name,capital_name,languages,religions,telephone_code,image}=data
  return (
    <>
    <div>
        <p>{country_name}</p>
    </div>
    </>
  )
}

export default DisplayData