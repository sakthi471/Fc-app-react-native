
import { Stack } from 'expo-router';
import React, { createContext, useContext, useReducer, useState } from 'react'


export const AppContext = createContext()


const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]
      break;
    default:
      break;
  }
}

const Layout = () => {

  const [cartState, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ cartState, dispatch }}>
      <Stack />
    </AppContext.Provider>

  )
}


export default Layout

export const useItems = () => {
  return useContext(AppContext)
} 