
import { Stack } from 'expo-router';


import React, { createContext, useState } from 'react'

const DateContext = createContext()

const Layout = () => {

  const [count, setCount] = useState(0)

  return (
    <Stack />
  )
}

export default Layout