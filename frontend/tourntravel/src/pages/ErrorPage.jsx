import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError()
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center text-[20px]'>Oops! An Error accured
        <p>{error.data}</p>
    </div>
  )
}

export default ErrorPage