import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Main />

    </>
  )
}

export default App
