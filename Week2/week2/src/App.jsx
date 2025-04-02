import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Toggle/Toggle'
import Cart from './Components/Cart/Cart'
import Table from './Components/Table/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button/>
     <Cart/>
     <Table/>
    </>
  )
}

export default App
