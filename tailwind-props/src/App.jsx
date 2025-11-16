import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

/*   let my_obj={
    name:"shash",
    age:21
  }
  let arr=[1,2,3,4] */
  return (
    <>
      <h1 className='bg-green-300 text-black p-5 rounded-xl mb-4'>Tailwind testing</h1>
      <Card  username="shash" price="1B"/>
      <Card  username="google" price="10B"/>
    </>
  )
}

export default App
