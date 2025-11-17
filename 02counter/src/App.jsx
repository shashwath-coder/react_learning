import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)
  const addValue=()=>{
    //console.log("clicked", Math.random());
    if(counter<20)
    {
    setCounter(counter+1) //setCounter by default returns a value... hence no need to write return explicitly even if we used curly braces
    }
  }
  const removeValue=()=>{
    if(counter>0)
    {
    setCounter(counter-1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react series</h1>
      <h2>Counter value:{counter}</h2>
      <button 
      onClick={addValue}>Add Value {counter}</button><br />
      <button 
      onClick={removeValue}>Remove Value {counter}</button>
      <p>counter:{counter}</p>
    </>
  )
}

export default App
