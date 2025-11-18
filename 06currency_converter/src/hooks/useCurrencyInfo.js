import React, { useEffect, useState } from "react";

const use_currency_info=function(currency)
{
    if (!currency) {
      setData({});
      return;
    }
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res) => setData(res[currency]))
    console.log(data)
} , [currency])

return data
}

export default use_currency_info // thus we r returning entire func(here it acts as a hook).. now we can use it anywhere
