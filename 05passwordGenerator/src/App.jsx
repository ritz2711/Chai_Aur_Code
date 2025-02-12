import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const[length,setLength] = useState('0');
  const[numberAllowed,setNumberAllowed] = useState(false)
  const[charAllowed,setCharacter] = useState(false);
  const[password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`";
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass+=str.charAt(char);
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])
  
  const passRef = useRef(null)
  useEffect(()=>{
    passwordGenerator()
  }
  ,[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPassword=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },
  [password])

  return (
    <div className='w-full max-w-md bg-gray-800 mx-auto rounded-lg px-3 py-4 my-8 text-orange-500'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text'
          placeholder='password'
          value={password}
          readOnly
          className=' bg-amber-50 w-full py-1 px-3 outline-none'
          ref={passRef}
        />
        <button onClick = {copyPassword} className='outline-none bg-blue-700 text-white rounded-lg py-0.5 px-3 shrink-0'>copy</button>
      </div>
      <div className='flex gap-x-2 text-sm'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          className='cursor-pointer'
          />
          <label>Lenght : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{setNumberAllowed((prev) => !prev) }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{setCharacter((prev) => !prev) }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
