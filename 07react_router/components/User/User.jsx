import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id}=useParams() // this is a hook to extract data from the url
  return (
    <div className='bg-gray-400 text-white text-3xl'>User:{id}</div>
  )
}

export default User