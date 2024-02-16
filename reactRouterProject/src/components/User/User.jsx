import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
     const {userId} = useParams()
  return (
    <div>
          <h1 className='bg-gray-600 text-white text-5xl font-semibold m-4 text-center'>UrlPass:{userId} </h1>
    </div>
  )
}

export default User
