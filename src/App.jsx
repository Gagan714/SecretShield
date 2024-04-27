import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import passwords from './components/passwords'

function App() {
  return (
    <>
    <Navbar/>
    <Manager/>
    <passwords/>
    </>
  )
}

export default App
