import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const[length,setLength]=useState(6) 
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  
  //useRef hook
  const passwordRef=useRef(null)

  const password_generator=useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+[]{}~"

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length +1) //random idx val is generated 
      pass+=str.charAt(char)
    }

    setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword]) //just to optimize code(by storing password in memory/cache) , u also write setPassword... though even if u remove it , it will work...

  const copy_password_to_clipboard=useCallback(()=>{
    passwordRef.current?.select(); // so useRef is just used to give effects like when u click on copy , the text copied gets highlighted
    window.navigator.clipboard.writeText(password) // this copies password to clipboard
  },[password])
  useEffect(()=>{
    password_generator()
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
     <div className='w-full max-w-wd mx-auto shadow-md
     rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center my-5'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 my-5">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white text-black"
        placeholder='Password'
        readOnly 
        ref={passwordRef}
        />
        <button 
        onClick={copy_password_to_clipboard} // direct calling , no using if callback fn etc like in onChange 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range' //automatically tracks the dragged pointer
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} //Because when the slider moves, the browser fires a change event → React receives it → you read
          
         />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }} />Number
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }} />Character
        </div>
      </div>
     </div>
    </>
  )
}

export default App
