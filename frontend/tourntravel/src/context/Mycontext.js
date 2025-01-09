import React, { createContext } from 'react'

const Mycontext = ({children}) => {
    const Context=createContext()
    const name='shanta'
    const age='20'
  return (
    <Context.Provider value={{name,age}}>
        {children}
    </Context.Provider>
  )
}

export default Mycontext