
import { Stack } from 'expo-router';
import React, { createContext, useContext, useReducer } from 'react'
import { initialState, reducer } from '../context/reducer';
import ContextProvider from '../context/Context';



export const AppContext = createContext()





const Layout = () => {

  const [globalState, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ globalState, dispatch }}>
      <Stack />
    </AppContext.Provider>


  )
}


export default Layout

export const appContext = () => {
  return useContext(AppContext)
} 