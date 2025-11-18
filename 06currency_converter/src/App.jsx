import { useState } from 'react'
import use_currency_info from './hooks/useCurrencyInfo.js'
import InputBox from './components/InputBox.jsx'


function App() {

  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = use_currency_info(from)

  const options=Object.keys(currencyInfo||{})

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
  <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1696834137549-239bf7ae591b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}
  >
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5
        backdrop-blur-sm bg-white/30"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* FROM INPUT */}
          <div className="w-full mb-1">
            <InputBox 
            label="From" 
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>
              setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount)=>
                setAmount(amount)}
            />
          </div>

          {/* SWAP BUTTON */}
          <div className="relative w-full h-0.5 my-3">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
              border-2
              border-white 
              rounded-md
            bg-blue-600 text-white px-2 py-0.5"

            onClick={swap}
            >
              swap
            </button>
          </div>

          {/* TO INPUT */}
          <div className="w-full mt-1 mb-4">
            <InputBox 
            label="To" 
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>
              setTo(currency)
            }     
            selectCurrency={to}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert{from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  </div>
);

}

export default App
