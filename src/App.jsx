import React from 'react'
import Background from './Component/Background'
import Foreground from './Component/Foreground'

const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App