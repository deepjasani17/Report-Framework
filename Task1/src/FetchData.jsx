import { useEffect, useState } from 'react'
import './App.css'
import Table from '@mui/joy/Table';

function FetchData() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
      fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c')
      .then(res => res.json())
      .then(data => setCount(data))
      .catch(err=>console.log(err))
    })
    return (
      <>
        
      </>
    )
  }
  
  export default FetchData