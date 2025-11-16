import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp()
{
  const username=":shash"
  return(
    <div>
      <h1>custom app {username}</h1> 
    </div>
  )
}

const anotherEle=(
  //target=blank , opens google in a new tab
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const another_user="shash link"
const react_ele=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  another_user
)
createRoot(document.getElementById('root')).render(
    <div>
    <App />
    <MyApp />  {/* this expects a function.. function is being used as an element tag */}
    {anotherEle}<br/>
    {react_ele}
    </div>
)

