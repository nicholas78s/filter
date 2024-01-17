import React from 'react'
import { useState } from 'react'
import Portfolio from './components/Portfolio'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <Portfolio
      filters = {['All', 'Websites', 'Flayers', 'Business Cards']}
      selected = "All"
    />
  )
}

export default App;
