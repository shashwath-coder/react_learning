import { useState } from 'react'
import use_currency_info from './hooks/useCurrencyInfo.js'
import {InputBox} from './components/InputBox.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = use_currency_info(from)

  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <h1 className='text-3xl bg-orange-500'>currency converter</h1>
  )
}

export default App
