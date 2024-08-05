import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './FetchData'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c')
    .then(res => res.json())
    .then(data => setCount(data))
    .catch(err=>console.log(err))
  })
  return (
    <>
      <FetchData/>
    </>
  )
}

export default App
