
import { useEffect } from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {


 useEffect(()=>{
  initializeArr()
 })

 
  return (
    <>
  <Outlet/>
    </>
  )
}


export default App
const initializeArr=()=>
{
  if(!localStorage.getItem('arr'))
  {
    localStorage.setItem('arr','[]')
  }
}

