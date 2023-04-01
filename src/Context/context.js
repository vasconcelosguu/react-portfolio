import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export function MyContextProvider(props) {
  const [darkMode, setDarkMode] = useState(null)

  return (
    <MyContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </MyContext.Provider>
  )
}