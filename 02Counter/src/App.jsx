import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  return (
    <>
    <h1>hello chai aur code ! {counter} </h1>
    <button 
    onClick={()=> setCounter(counter+1)}
    >Add Value</button>
    <br /> 
    <button
    onClick={()=>{
      if(counter>0){
        setCounter(counter-1)
      }else{
        setCounter(counter=0)
      }
    }}
    >Remove Value</button>
    </>
  )
}

export default App
