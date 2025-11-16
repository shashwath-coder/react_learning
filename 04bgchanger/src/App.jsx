import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  const change_color=(c)=>{
    setcolor(c)
  }
  return (
  
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center bg-white rounded-xl gap-3 shadow-lg px-3 py-2">

        <button onClick={()=>change_color("Red")} 
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"red"}}
        >Red</button>

        <button onClick={()=>change_color("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"green"}}
        >Green</button>

        <button onClick={()=>change_color("orange")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"orange"}}
        >Orange</button>

        <button onClick={()=>change_color("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"blue"}}
        >Blue</button>

      </div>
    </div>
    </div>
  )
}

export default App
