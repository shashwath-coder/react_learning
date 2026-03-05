import { useState } from 'react'
import './App.css'
import AddTodo from './componenets/AddTodo'
import Todos from './componenets/Todos'
function App() {

  return (
    <>
      <h1>learning about redux</h1>
      <AddTodo/>
      <Todos />
    </>
  )
}

export default App
