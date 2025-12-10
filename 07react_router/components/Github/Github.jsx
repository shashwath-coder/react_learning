import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();
    /* const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)})
    },[]) */
    return (
    <div className='text-center m-4 bg-amber-200 text-black p-4 text-3xl'>Github followers :{data.followers}
    <img src={data.avatar_url} alt='github pic' width={300} />
    </div>
  )
}

export default Github

export const github_info_loader=async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}