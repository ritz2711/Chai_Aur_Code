import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{background:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 px-3 inset-x-3'>
        <div className='flex flex-wrap justify-center gap-3 bg-amber-50 rounded-full px-3 py-2'>
        <button 
        onClick={()=>setColor('red')}
        className='rounded-full bg-red-600 px-2 py-1'>Red</button>
        <button 
        onClick={()=>setColor('green')}
        className='rounded-full bg-green-600 px-2 py-1'>Green</button>
        <button 
        onClick={()=>setColor('yellow')}
        className='rounded-full bg-yellow-600 px-2 py-1'>Yellow</button>
        <button 
        onClick={()=>setColor('blue')}
        className='rounded-full bg-blue-600 px-2 py-1'>Blue</button>
        <button 
        onClick={()=>setColor('pink')}
        className='rounded-full bg-pink-600 px-2 py-1'>Pink</button></div>
      </div>
    </div>
    </>
  )
}

export default App
